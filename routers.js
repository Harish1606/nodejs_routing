function router(pathname,handle,response,reviewData) {
	console.log('receiving a request for '+pathname);
	if(typeof handle[pathname]=='function'){
		handle[pathname](response,reviewData);
	}
	else{
		console.log('No handler for this request');
		response.writeHead(404,{'content-type':'text/plain'});
		response.write('Error 404 page not found');
		response.end();
	}
}
exports.router=router;