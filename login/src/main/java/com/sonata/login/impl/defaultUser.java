package com.sonata.login.impl;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


import com.sonata.login.dao.UserInterface;
import com.sonata.login.db.DbConnection;
import com.sonata.login.model.Task;
import com.sonata.login.model.User;


@Component
public class defaultUser implements UserInterface {
	
	@Autowired
	DbConnection db;
	boolean c;
	int row;

	
         
	//implementing method to add a new user
	@Override
	public User addUser(User User) throws SQLException {
		PreparedStatement ps = db.getConnection().prepareStatement
				("insert into user values(?,?,?,?,?,?,?,?,?,?,?)");
		ps.setInt(1,User.getUser_ID());
		ps.setString(2,User.getUsername());
		ps.setString(3,User.getEmail());
		ps.setString(4, User.getFirst_Name());
		ps.setString(5,User.getLast_Name());
		ps.setLong(6, User.getContact_Number());
		ps.setString(7, User.getRole());
		ps.setBoolean(8, User.isActive());
		ps.setDate(9,User.getdOB());
		ps.setTimestamp(10, User.getCreatedOn());
		ps.setString(11, User.getPassword());
		int row = ps.executeUpdate();
		return User;
	}
	
	
	@Override
	public boolean validateuser(String Username,String Password) throws SQLException {
		
		PreparedStatement ps1 = db.getConnection().prepareStatement("select Username,Password from user where Username=?");
		ps1.setString(1,Username);
		ResultSet rs = ps1.executeQuery();
		while(rs.next())
		{

		    if(Username.equals(rs.getString(1)) && Password.equals(rs.getString(2)))
		    {
		    	 c= true;
		    }
		  
		       else
		       {
		       c=false;
		       }
		       
		     
		}

		  return c;
		
	}


	@Override
	public List<User> getData() throws SQLException {
		List<User> userlist = new ArrayList<>();
		try {
		PreparedStatement cs1 = db.getConnection().prepareStatement
				("select * from user");
		
		ResultSet rs = cs1.executeQuery();
		while(rs.next()) {
			User u1= new User();
			u1.setUser_ID(rs.getInt(1));
			u1.setUsername(rs.getString(2));
			u1.setEmail(rs.getString(3));
			u1.setFirst_Name(rs.getString(4));
			u1.setLast_Name(rs.getString(5));
			u1.setContact_Number(rs.getLong(6));
			u1.setRole(rs.getString(7));
			u1.setActive(rs.getBoolean(8));
			u1.setdOB(rs.getDate(9));
			u1.setCreatedOn(rs.getTimestamp(10));
			u1.setPassword(rs.getString(11));
			userlist.add(u1);

			
		}
		
		}catch(SQLException se) {se.printStackTrace();}
		return userlist;}


	@Override
	public void deleteUser(int id) throws SQLException {
		
		PreparedStatement cs2=db.getConnection().prepareStatement("delete from user where User_ID=?");
		cs2.setInt(1, id);
		row=cs2.executeUpdate();
		
		
	}


	@Override
	public void updateuser(int User_ID, User user) throws SQLException {
		
		PreparedStatement cs3=db.getConnection().prepareStatement("update user set Username=?,Email=?,Contact_Number=?,Role=?,IsActive=?,Password=? where User_ID=?");
		
		cs3.setString(1,user.getUsername());
		cs3.setString(2,user.getEmail());
		//cs3.setString(3, user.getFirst_Name());
		//cs3.setString(4,user.getLast_Name());
		cs3.setLong(3, user.getContact_Number());
		cs3.setString(4, user.getRole());
		cs3.setBoolean(5, user.isActive());
		//cs3.setDate(6,user.getdOB());
		//cs3.setTimestamp(7, user.getCreatedOn());
		cs3.setString(6, user.getPassword());
		cs3.setInt(7,user.getUser_ID());
		
		 row = cs3.executeUpdate();
		
		
		
	}


	@Override
	public User userid(int User_ID) throws SQLException {
		User u1=new User();
		try {
		PreparedStatement cs4=db.getConnection().prepareStatement("select * from user where User_ID=?");
		cs4.setInt(1,User_ID);
		ResultSet rs = cs4.executeQuery();
		while(rs.next()) {
		u1.setUser_ID(rs.getInt(1));
		u1.setUsername(rs.getString(2));
		u1.setEmail(rs.getString(3));
		u1.setFirst_Name(rs.getString(4));
		u1.setLast_Name(rs.getString(5));
		u1.setContact_Number(rs.getLong(6));
		u1.setRole(rs.getString(7));
		u1.setActive(rs.getBoolean(8));
		u1.setdOB(rs.getDate(9));
		u1.setCreatedOn(rs.getTimestamp(10));
		u1.setPassword(rs.getString(11));
		
		}
		
		}catch(SQLException se) {se.printStackTrace();}
	
            
	        return u1;
	
	}
      
}
		
		
	
	



