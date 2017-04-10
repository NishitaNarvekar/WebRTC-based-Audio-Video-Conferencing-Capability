<%@ page import ="java.sql.*" %>
<%@ page import ="javax.sql.*" %>
<%

String name=request.getParameter("name"); 
System.out.println(name);
//session.putValue("name",name); 
String email_id=request.getParameter("email_id");
String uname=request.getParameter("uname");
String pass=request.getParameter("pass"); 


//String special=request.getParameter("flag");
int n=1;
int k=0;
Class.forName("com.mysql.jdbc.Driver"); 
java.sql.Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/doctor_db","root","root"); 
Statement st= con.createStatement(); 
ResultSet rs; 

int i=st.executeUpdate("insert into patient values ('"+name+"','"+email_id+"','"+uname+"','"+pass+"','"+n+"')");
out.println("Registration successful.");
response.sendRedirect("home.html");
//return;
%>

<html>
<body>
<!--  <form action="home.html" method="post"> -->

<br>
<!--  <input type="submit" value="Go to Home Page"/>-->
<br>
<!--  </form> --->
</body>
</html>