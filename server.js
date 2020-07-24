var http=require('http');
var url=require('url');

function startserver(router,handle){
http.createServer(function(request,response){
	var reviewData="";
	var pathname=url.parse(request.url).pathname;
	console.log('request received for '+pathname);
	request.setEncoding("utf8");
	
	request.addListener('data',function(chunk){
		reviewData+=chunk;
	})
	
	request.addListener('end',function(){
		router(pathname,handle,response,reviewData);
	})
}).listen(8888); 
console.log('server running on localhost:8888');
}
exports.startserver=startserver;