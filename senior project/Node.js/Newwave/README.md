# 받아온 데이터 웹에서 보여주기!
&nbsp;&nbsp;: yolo    → node.js 소켓통신(net 모듈)<br/>
&nbsp;&nbsp;: node.js → web     소켓통신(socket.io 모듈)<br/>
<br/><br/>
&nbsp;&nbsp;__| main |__  
&nbsp;&nbsp;&nbsp;&nbsp;-app.js<br/><br/>
&nbsp;&nbsp;__| 이벤트 모듈 |__  
&nbsp;&nbsp;&nbsp;&nbsp;-getData.js : 1초마다 이벤트 발생시킴<br/><br/>
&nbsp;&nbsp;__| view |__  
&nbsp;&nbsp;&nbsp;&nbsp;-hello.html : 웹<br/><br/>
<br/><br/>
