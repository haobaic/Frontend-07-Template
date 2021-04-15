let http = require("http");
let fs = require("fs");
const archiver = require("archiver");
let child_process = require("child_process");
let queryString=require("queryString");
///打开 https://github.com/login/oauth/authorize
child_process.exec(`open https://github.com/login/oauth/authorize?client_id=Iv1.677b4ecb0569b62f`)
///创建server 接受token 后点击发布
http
  .createServer(function (req, res) {
    let query=queryString.parse(req.url.match(/^\/\?([\s\S]+)$/)[1]);
    console.log(query);
    publish(query.token);
  })
  .listen(8083);
function publish(token){
let request = http.request(
  {
    hostname: "127.0.0.1",
    port: 8082,
    method: "POST",
    path: "/publish?token="+token,
    headers: {
      "Content-Type": "application/octet-stream",
    },
  },
  (response) => {
    console.log(response);
  }
);
// //读取文件
// let file = fs.createReadStream("./sample.zip");
const archive = archiver('zip', {
  zlib: { level: 9 } // Sets the compression level.
});
archive.directory('./sample/', false);
archive.finalize();
archive.pipe(request);
}

