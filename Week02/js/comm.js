/*
 * 设置时间
 * @t {Number} 设置响应时间
*/
function sleep(t){
	return new Promise((resolve)=>{
		setTimeout(resolve,t)
	})
}