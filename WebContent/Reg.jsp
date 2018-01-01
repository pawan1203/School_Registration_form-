<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@page import="java.sql.*"%>
<% 
  String fname=request.getParameter("fname");
  String mname=request.getParameter("mname");
  String lname=request.getParameter("lname");
  int s=Integer.parseInt(request.getParameter("class"));  
  String dob=request.getParameter("date");
  String gender=request.getParameter("gender");
  String course=request.getParameter("course");
  String email=request.getParameter("email");
  String phone=request.getParameter("phone");
  String houseno=request.getParameter("house");
  String streetname=request.getParameter("street");
  String state=request.getParameter("state");
  String city=request.getParameter("city");
  String pincode=request.getParameter("pin");
  String nationality=request.getParameter("nationality");
  String religion=request.getParameter("religion");
  String Degree=request.getParameter("degree");
  String university=request.getParameter("university");
  String percentage=request.getParameter("percentage");
  String Degree1=request.getParameter("degree1");
  String university1=request.getParameter("university1");
  String percentage1=request.getParameter("percentage1");
  
  Class.forName("com.mysql.jdbc.Driver");
  Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/jio","root","Pawan");
  String sql="insert into registration_detail(firstname,middlename,lastname,class,dob,gender,course,email,phone,houseno,streetname,state,city,pincode,nationality,religion,degree1,university,percentage,degree,university1,percentage1)values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
  PreparedStatement ps=con.prepareStatement(sql);
  ps.setString(1,fname);
  ps.setString(2, mname);
  ps.setString(3, lname);
  ps.setInt(4, s);
  ps.setString(5,dob);
  ps.setString(6, gender);
  ps.setString(7, course);
  ps.setString(8, email);
  ps.setString(9, phone);
  ps.setString(10, houseno);
  ps.setString(11, streetname);
  ps.setString(12, state);
  ps.setString(13, city);
  ps.setString(14, pincode);
  ps.setString(15, nationality);
  ps.setString(16, religion);
  ps.setString(17, Degree);
  ps.setString(18, university);
  ps.setString(19, percentage);
  ps.setString(20, Degree1);
  ps.setString(21, university1);
  ps.setString(22, percentage1);
  
  
  int x=ps.executeUpdate();
  con.close();
  ps.close();
  if(x>0){
	  out.println("<font color='green'>You have been registered successfully</font>");
  }else{
	  out.println("you have not registered");
  }
%>