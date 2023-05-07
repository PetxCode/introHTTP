// import http, { IncomingMessage } from "http";

// const data: {}[] = [];
// Array.from({ length: 5 }, () => {
//   data.push({ numb: Math.floor(Math.random() * 1000) });
// });

// const app = http
//   .createServer(
//     (req: http.IncomingMessage, res: http.ServerResponse<IncomingMessage>) => {
//       try {
//         console.log(req.method);
//         console.log(req.url);

//         if (req.method === "GET" && req.url === "/") {
//           res.writeHead((res.statusCode = 200), {
//             "Content-Type": "application/json",
//           });
//           //   res.write("Hello CodeLab");
//           //   res.write("\n<h1>Hello CodeLab</h1>");
//           res.write(JSON.stringify(data));
//           res.end();
//         } else if (req.method === "POST" && req.url === "/") {
//           let body: any = [];
//           let dataBody: {}[] = [];

//           req.on("data", (chunk) => {
//             body.push(chunk);
//             console.log("Chunk: ", chunk);
//             console.log("Body: ", body);
//           });
//           req.on("end", () => {
//             dataBody.push(JSON.parse(body));

//             res.writeHead(200, { "Content-Type": "application/json" });

//             res.end(JSON.stringify(dataBody));
//           });
//         }
//       } catch (error) {
//         throw error;
//       }
//     },
//   )
//   .listen(3011, () => {
//     console.log("server is connected");
//   });

import http from "http";

http
  .createServer(
    (
      req: http.IncomingMessage,
      res: http.ServerResponse<http.IncomingMessage>,
    ) => {
      interface iData {
        id: number;
        name: string;
      }

      interface iDatas {
        success: boolean;
        message: string;
        data: iData[] | null;
      }

      try {
        const { url, method } = req;

        let mainData: iDatas[] = [];

        let success: boolean = false;

        let result: iDatas = {
          success,
          message: "Error",
          data: null,
        };
        let body: any = [];
        req.on("data", (chunk) => {
          body.push(chunk);
        });

        req.on("end", () => {
          if (method === "GET" && url === "/") {
            result.success = true;
            result.message = "Found";
            result.data = mainData;
          }
        });
      } catch (error) {
        throw error;
      }
    },
  )
  .listen(3311);
