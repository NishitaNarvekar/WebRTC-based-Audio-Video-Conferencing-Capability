<%@ page import ="java.sql.*" %>
<%@ page import ="javax.sql.*" %>
<html>
<head>
<title>Insert title here</title>
</head>
<body>
<form method="post">
<table border="2">
<tr>
<td>ID</td>
<td>NAME</td>
<td>SKILL</td>
<td>ACTION</td>
</tr>
<%
try
{
Class.forName("com.mysql.jdbc.Driver");
String url="jdbc:mysql://localhost:3306/doctor_db";
String username="root";
String password="root";
String query="select * from doctor where flag=1";
Connection conn=DriverManager.getConnection(url,username,password);
Statement stmt=conn.createStatement();
ResultSet rs=stmt.executeQuery(query);
while(rs.next())
{
%>
<tr>
    <td><%=rs.getString("name") %></td>
    <td><%=rs.getString("email_id") %></td>
    <td><%=rs.getString("uname") %></td>
    <td><%=rs.getString("pass") %></td>
    <td><%=rs.getInt("flag") %></td>
</tr>
        <%

}
%>
    </table>
    <%
    rs.close();
    stmt.close();
    conn.close();
    }
catch(Exception e)
{
    e.printStackTrace();
    }




%>

</form>
</body>
</html> 