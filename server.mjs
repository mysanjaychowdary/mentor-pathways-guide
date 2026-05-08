import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import handler from "./dist/server/server.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const clientDir = path.join(__dirname, "dist/client");

const mimeTypes = {
  ".js": "application/javascript",
  ".css": "text/css",
  ".html": "text/html",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".json": "application/json",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

const server = http.createServer(async (req, res) => {
  try {
    const url = req.url || "/";

    // Serve static assets
    if (
      url.startsWith("/assets/") ||
      url.match(/\.(js|css|jpg|jpeg|png|svg|woff|woff2)$/)
    ) {
      const filePath = path.join(clientDir, url);

      if (fs.existsSync(filePath)) {
        const ext = path.extname(filePath);

        res.writeHead(200, {
          "Content-Type": mimeTypes[ext] || "application/octet-stream",
        });

        fs.createReadStream(filePath).pipe(res);
        return;
      }
    }

    // SSR handler
    const response = await handler.fetch(
      new Request(`http://${req.headers.host}${url}`, {
        method: req.method,
        headers: req.headers,
      })
    );

    res.writeHead(response.status, Object.fromEntries(response.headers));

    if (response.body) {
      const reader = response.body.getReader();

      while (true) {
        const { done, value } = await reader.read();

        if (done) break;

        res.write(value);
      }
    }

    res.end();
  } catch (err) {
    console.error(err);
    res.statusCode = 500;
    res.end("Internal Server Error");
  }
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});