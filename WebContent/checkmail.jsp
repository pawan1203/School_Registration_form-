<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@page import="java.sql.*"%>
 <%
 String email=request.getParameter("email");
 if(email==null || email.trim().equals("")){  
	 out.print("Please enter email"); 
 }
 Class.forName("com.mysql.jdbc.Driver");
 Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/jio","root","Pawan");
 String sql="select email from registration_detail where email=?";
 PreparedStatement ps=con.prepareStatement(sql);
 ps.setString(1,email);
 ResultSet rs=ps.executeQuery();
 while(rs.next()){
	 if(rs.getString(1).equals(email)){
		 out.println("email already registered");
		 break;
	 }
 }
 con.close();
 ps.close();
 %> 






