//Callback functions
/*function print(val) {
	console.log(val)
}

function mainFunc(anotherfunction,val)
{
	anotherfunction(val);
}
mainFunc(print,'Hello');*/

/*console.log(__filename);
console.log(__dirname); 

function abc(){
	console.log('setTimeout');
}*/

//setTimeout(function_name,milliseconds)
//setTimeout(abc,5000);

//setInterval(funnction_name,milliseconds)
//setInterval(abc,2000); 

//creating own modules
/*var a=require('./modules');
a.relay();
a.longjump(); */

//creating http server with code module http
/*var http=require('http');
http.createServer(function(request,response){
	response.writeHead(200,{'content':'text'});
	response.write('hello world');
	response.end();
}).listen(2500);*/

//Events 
/*var events=require('events');
var eventEmitter=new events.EventEmitter();

var ringbell=function(){
	console.log('ring');
}

eventEmitter.on('dooropen',ringbell);
eventEmitter.on('bellrings',function(message)
{
	console.log(message);
})
eventEmitter.emit('dooropen');
eventEmitter.emit('bellrings','welcome');*/

//file system module
/*var fs=require('fs');

fs.readFile('input.txt',function(err,data)
{
	if(err){
		console.log(err);
	}
	else{
		console.log('assync data is '+data);
	}
})

var data=fs.readFileSync('input.txt');
console.log('sync data is '+data);*/

//Streams
/* two types-readable stream and writable stream*/

/*var fs=require('fs');
var readableStream=fs.createReadStream('input.txt');
var data='';
readableStream.setEncoding('UTF8');
readableStream.on('data',function(chunk){
	data+=chunk;
})
readableStream.on('end',function(){
	console.log(data);
})

var writeData='Hello world';
var writeableStream=fs.createWriteStream('output.txt');
writeableStream.write(writeData,'UTF8');
writeableStream.end();
writeableStream.on('finish',function(){
	console.log('write completed');
})*/
 
//pipes
/*var fs =require('fs');
var readableStream=fs.createReadStream('input.txt');
var writeableStream=fs.createWriteStream('output.txt');
readableStream.pipe(writeableStream);*/

var server=require('./server');
var routers=require('./routers');
var handler=require('./handler'); 

var handle={};
handle['/']=handler.home;
handle['/home']=handler.home;
handle['/review']=handler.review;
server.startserver(routers.router,handle);