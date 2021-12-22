<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<body>
<h2>${errorMsg}</h2>
<form method="post"> 
<label>UserName:</label>
<input type="text" name="username" placeholder="Username" />
<br><br>
<label>Password</label>
<input type="password" name="password" placeholder="Password" />
<br><br>
<button>submit</button>
<button>reset</button></form>
</body>
</html>