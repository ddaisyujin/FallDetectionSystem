# 연구개요

**딥러닝 기반의 ‘실시간 객체 모니터링 프로그램'은 웹캠을 이용하여 실시간으로 영상을 촬영한다. 실시간으로 촬영된 영상에서 사람의 낙상을 인식하고, 사람의 다양한 자세 중 낙상(落傷, falling)이 감지될 경우 이를 네트워크에 접속한 사용자에게 웹 또는 모바일에서 실시간으로 위험 알림을 하는 서비스를 제공한다.**  
<br><br>
 그 중 데이터를 YOLO에서 NODE로, NODE에서 WEB으로 보내는 서버를 구현했다.  
 ### 내 파트 :  통신, 웹
<br><br><br>


## __1. YOLO 폴더__
__YOLO에서 처리된 데이터를 서버(NODE)로 보내자!__
&nbsp;&nbsp;: yolo → node.js 소켓통신<br/>
<br/><br/>
&nbsp;&nbsp;__| YOLO 다운받으면 있는 파일들 |__  
&nbsp;&nbsp;&nbsp;&nbsp;-__demo.c :__ socket Thread와 socket 통신 코드 추가  
&nbsp;&nbsp;&nbsp;&nbsp;-__image_opencv.c :__ class_id 0은 1로, 1은 0으로 <br/><br/>
<br/><br/>



## __2. Node.js 폴더__
__받아온 데이터 웹에서 보여주기!__
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


## __3. 통신 테스트__
__데이터가 NODE로 잘 보내지는지 LOCAL에서 확인해보자!__
&nbsp;&nbsp;: node로 데이터 보내기 테스트  
&nbsp;&nbsp;: c     → node.js 소켓통신  
&nbsp;&nbsp;: pyton → node.js 소켓통신  
<br/><br/>
&nbsp;&nbsp;__| socket test code |__  
&nbsp;&nbsp;&nbsp;&nbsp;-c_sendData.cpp : c언어로 짠 c → node.js 소켓통신  
&nbsp;&nbsp;&nbsp;&nbsp;-python_sendData.py : python으로 짠 python → node.js로 소켓통신<br/><br/>
<br/><br/>
