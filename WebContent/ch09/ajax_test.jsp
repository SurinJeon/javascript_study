<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<%
	request.setCharacterEncoding("utf-8");
	String cp = request.getContextPath();
%>
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; chartset = utf-8">
	<title>JSON 형식으로 데이터 주고받기</title>
	<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
	<script src="js/ajax_test.js"></script>
</head>
<body>
	아이디: <input type="text" id="userId"> <br>
	패스워드: <input type="text" id="userPwd"> <br>
	<button id="sendButton">전송</button>
	<br>
	<br>
	<div id="resultDIV"></div>
</body>
</html>