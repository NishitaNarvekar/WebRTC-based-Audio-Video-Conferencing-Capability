<%@ page import ="java.sql.*" %>
<%@ page import ="javax.sql.*" %>
<%

String name=request.getParameter("name"); 
session.putValue("name",name); 
String pwd=request.getParameter("pass"); 
Class.forName("com.mysql.jdbc.Driver"); 
java.sql.Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/doctor_db","root","root"); 
Statement st= con.createStatement(); 
ResultSet rs = st.executeQuery("select * from patient where uname='"+name+"'"); 

//System.out.println("pawrd is:" + rs.getString(4));
if(rs.next()) 
{ 
	if(rs.getString(4).equals(pwd)) 
	{ 
	out.println("Welcome to Global Hospital  "+name);
	st.executeUpdate("UPDATE doctor " + "SET flag = 1 WHERE uname='"+name+"'");
	response.sendRedirect("http://192.168.1.21:7777");
	return;
	} 
//	else 
	//{ 
	//out.println("Invalid password try again"); 
	//response.sendRedirect("login1.html");
	//} 
} 
out.println("Invalid password try again"); 
response.sendRedirect("login_pat1.html");
%>