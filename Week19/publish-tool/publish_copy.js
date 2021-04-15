let http = require("http");
let fs = require("fs");

let request = http.request(
  {
    hostname: "127.0.0.1",
    port: 8882,
    method: "POST",
    headers: { "Content-Type": "application/octet-stream" },
  },
  (response) => {
    console.log(response);
  }
);
//读取文件
let file = fs.createReadStream("./sample.html");

file.on("data", (chunk) => {
  console.log(chunk.toString());
  request.write(chunk);
});
file.on("end", (chunk) => {
  console.log("read finished");
  request.end(chunk);
});
