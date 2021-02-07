const http = require('http');

const HTML = `<html maaa=a>
<head> 
<style>
body{
	background-color: rgb(0,0,0);
}
#box{
width:700px;
height:300px;
display:flex;
background-color: rgb(255,255,255);
}
#box #myid{
width:400px;
height:100px;
background-color: rgb(255,0,0);
}
#box .c1{
flex:1;
background-color: rgb(0,255,0);
}
</style>
</head>
<body>
<div id="box">
<div id="myid" > </div>
<div class="c1" > </div>
</div>
</body>
</html>`

http.createServer((request, response) => {
	let body = [];
	request.on("error", (err) => {
		console.error(err)
	}).on("data", (chunk) => {
		console.log(chunk)
		body.push(chunk);
	}).on("end", () => {
		body = Buffer.concat(body).toString();
		console.log("body", body);
		response.writeHead(200, { 'Content-Type': 'text/html' });
		response.end(HTML);
	})
}).listen(8088);

console.log("server started");

