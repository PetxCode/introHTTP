import http from "http";
import https from "https";

import path from "path";
import fs from "fs";

const app = http.createServer(
  (
    req: http.IncomingMessage,
    res: http.ServerResponse<http.IncomingMessage>
  ) => {
    if (req.method === "GET" && req.url === "/git") {
      https.get(
        {
          host: "api.github.com",
          path: "/users/petxcode",
          method: "GET",
          headers: {
            "user-agent": "node.js",
          },
        },
        (resp) => {
          let body = "";

          resp.on("data", (chunk) => {
            body += chunk;
          });

          resp.on("end", () => {
            let result = JSON.parse(body);

            const file = path.join(__dirname, "/saveGame", "game.json");

            fs.writeFileSync(file, JSON.stringify(result), (err, data) => {
              if (err) {
                throw err;
              } else {
                result = data;
                res.write(JSON.stringify(result));
              }
            });
          });
        }
      );

      const file = path.join(__dirname, "/saveGame", "game.json");

      fs.readFile(file, (err, data) => {
        if (err) {
          throw err;
        } else {
          res.write(data);
          res.end();
        }
      });

      res.end();
    }
  }
);

app.listen(4455, () => {
  console.log("");
  console.log("server is up");
  console.log("");
});
