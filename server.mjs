import http from "node:http";
import handler from "./dist/server/server.js";

const port = process.env.PORT || 3000;

const server = http.createServer(async (req, res) => {
  try {
    const response = await handler.fetch(
      new Request(`http://${req.headers.host}${req.url}`, {
        method: req.method,
        headers: req.headers,
        body:
          req.method !== "GET" && req.method !== "HEAD"
            ? req
            : undefined,
        duplex: "half",
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

server.listen(port, "0.0.0.0", () => {
  console.log(`Server running on http://0.0.0.0:${port}`);
});