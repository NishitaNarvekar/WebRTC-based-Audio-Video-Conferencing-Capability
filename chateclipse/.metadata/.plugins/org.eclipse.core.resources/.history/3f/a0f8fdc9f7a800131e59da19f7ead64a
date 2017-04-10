<%@ page import ="java.sql.*" %>
<%@ page import ="javax.sql.*" %>
<%
//String ss =request.getParameter("Id");
//System.out.println("my value" + name);
String name=request.getParameter("name"); 
out.println("hi");
out.println("my value" + name);
session.putValue("name",name); 
String pwd=request.getParameter("pass"); 
Class.forName("com.mysql.jdbc.Driver"); 
java.sql.Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/doctor_db","root","root"); 
Statement st= con.createStatement(); 
//ResultSet rs = st.executeQuery("select * from doctor where uname='"+name+"'"); 

String sql = "UPDATE doctor " + "SET flag = 0 WHERE uname='"+name+"'";
//String sql = "UPDATE doctor " + "SET flag = 0 WHERE uname='madz'";
st.executeUpdate(sql);
//rs = st.executeQuery("update doctor set flag=1 where uname='"+name+"'");
//response.sendRedirect("home.html");
 

%>