let http = require("http");
let fs = require("fs");
//但文件处理
fs.stat("./sample.html",(err, stats) => {
  let request = http.request(
    {
      hostname: "127.0.0.1",
      port: 8082,
      method: "POST",
      headers: { 
        "Content-Type": "application/octet-stream",
        "Content-Length": stats.size
      },
    },
    (response) => {
      console.log(response);
    }
  );
  //读取文件
  let file = fs.createReadStream("./sample.html");
  file.pipe(request);
  file.on("end",()=>request.end())
})
