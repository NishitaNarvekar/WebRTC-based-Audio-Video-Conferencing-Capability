<%@ page import ="java.sql.*" %>
<%@ page import ="javax.sql.*" %>
<% String sname="hi"; %>
<!DOCTYPE html>
<html>
<body>
<centre>
<table width="100%">
<tr>
<td colspan="3" style="background-color:#FFFFFF;">

<center><img src="logo.png" alt="black" width="100" height="100">
<H1>Global Hospital</H1></center>
<table style="width:100%;" cellspacing="0">
        <tr bgcolor=0066FF>
            <td><a href="home.html" style="text-decoration: none"><font color="white" size=5>Home</font></a></td>
            <td><a href="services.html" style="text-decoration: none"><font color="white" size=5>Services</font></a></td>
            <td><a href="doctors.html" style="text-decoration: none"><font color="white" size=5>Our doctors</font></a></td>

            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td><a href="sign-up.html" style="text-decoration: none"><font color="white" size=5>Sign Up</font></a></td>
            <td><a href="login.html" style="text-decoration: none"><font color="white" size=5>Login</font></a></td>
        </tr>        
</table>  
<br>
</td>
</tr>
</CENTER>
<tr>
<td style="background-color:#FFFFFF; cellpadding="0";width:500px;">
<img src="doc4.jpg" alt="black" width="600" height="400">

<td style="background-color:#FFFFFF;height:80px;width:100px;">
<table width="631" border="1" cellpadding="0" cellspacing="0" bordercolor="#CCCCCC">
<tr>
<td height="20" colspan="2">
<p class="center">DOCTOR'S PANEL</p>
</td>
</tr>
<tr>
<td width="5" height="20" bgcolor="#F0FFFF">
<b><p class="center">Doctors Name</b></p>
</td>
<td width="50" height="20" bgcolor="#F0FFFF">
<b><p class="bold">Specialization</p></b>
</td>
</tr>
<%
try
{
Class.forName("com.mysql.jdbc.Driver");
String url="jdbc:mysql://localhost:3306/doctor_db";
String username="root";
String password="root";

String query="select name,special from doctor where flag=1";
Connection conn=DriverManager.getConnection(url,username,password);
Statement stmt=conn.createStatement();
ResultSet rs=stmt.executeQuery(query);
while(rs.next())
{
%>
<tr>
<td height="20" bgcolor="#FFFFE0">

<p class="center"><a href="http://192.168.1.21:7777" onClick="setflag()"><%=rs.getString("name")%></a></p>
</td>
<td height="20" bgcolor="#FFFFE0">
<p><%=rs.getString("special") %></p>
</tr>
        <%

}
%>

</table>


</tr>
</table>
<script>
    function setflag() {
    	<%
    	sname= "sid";
    	stmt.executeUpdate("UPDATE doctor " + "SET flag2 = 1 WHERE uname='"+sname+"'");
    %>
    }
</script>
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

</body>
</html>
