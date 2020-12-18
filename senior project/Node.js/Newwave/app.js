var http = require('http')
,path = require('path');
var url = require('url');
var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser')
, static = require('serve-static');
var module = require('./getData'); // 이벤트 발생시키는 모듈
var socketio = require('socket.io');
var cors = require('cors'); // 클라이언트에서 ajax로 요청하면 CORS 지원
var net_server = require('net');


var currentData=new Array();
var inputDataSize = 0;


//--------------------------------------뷰 엔진
var app = express();
app.set('port',process.env.PORT || 3000);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//app.use(cors());
app.use('/views', static(path.join(__dirname, 'views')));


//------------------------------------
//1. module 내부에 선언된 timer객체를 통해 tick 이벤트를 캐치하고, 이벤트 발생시마다 현재시간을 출력
module.timer.on('tick', function(time){
	
	//currendData 배열에 요소가 존재할 때
	if(currentData.length!=0){
		var message = { data: currentData.shift()}; // queue형식으로 첫 데이터가 먼저 나감
		io.emit('message',message); // 클라이언트(브라우저)에게  message 이벤트 발생  	
    }

});

//--------------------------------------


const server = http.createServer(app).listen(app.get('port'),function(){
	console.log('1. 웹 서버가 시작됐습니다: %s', app.get('port'));
});

// net: net module socket / 전송 제어 프로토콜 TCP를 사용해 원시데이터를 전송
// tcp 서버를 생성
var server2 = net_server.createServer(function(client,data) {
	console.log('┌ 외부에서 데이터를 전송!');

    client.on('data', function(data) {
    	currentData=[];
    	//console.log(Object.keys(JSON.parse(data).flag));
        console.log('│ 들어온 데이터: '+ (JSON.parse(data).flag)); // flag 요소들
        inputDataSize = Object.keys(JSON.parse(data).flag).length; // 배열 사이즈

        for(var i=0; i<inputDataSize; i++){
        	
        	if(!(JSON.parse(data).flag[i]== '1' ||JSON.parse(data).flag[i]== '0'))
        	{
        			continue;
        	}
        	// currentData 배열에 JSON데이터를 요소 하나하나 push!!
        	currentData.push(JSON.parse(data).flag[i]);
        }
    });

    client.on('end', function() {
        console.log('└ 외부 데이터 수신 끝!');
    });

});

server2.listen(8000, function() {
    console.log('2. 외부 데이터 받아들일 준비가 됐습니다: ' + 8000);
});

// socket.io 서버를 시작합니다. 
var io = socketio(server);

// 클라이언트가 연결했을 때의 이벤트 처리 (좀 다름)
io.on('connection', (socket)=>{
	console.log('- 클라이언트(브라우저) 접속! | port: ', socket.request.connection._peername.port);

	
});

