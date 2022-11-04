import http from "http";

const app = http.createServer(
  (
    req: http.IncomingMessage,
    res: http.ServerResponse<http.IncomingMessage>
  ) => {
    res.setHeader("Content-Type", "application/json");
    const { method, url } = req;

    const db = [{ id: 1, data: "I am" }];

    let body = "";
    req
      .on("data", (resp) => {
        body += resp;
      })
      .on("end", () => {
        if (url === "/" && method === "GET") {
          res.end(JSON.stringify(db));
        }

        if (url === "/" && method === "POST") {
          let newBody = JSON.parse(body);
          db.push(newBody);

          console.log(db);
        }
      });
  }
);

app.listen(4444, () => {
  console.log("");
  console.log("server is up");
  console.log("");
});
