package com.sonata.login.impl;

import java.sql.PreparedStatement;
import java.sql.SQLException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


import com.sonata.login.dao.UserInterface;
import com.sonata.login.db.DbConnection;
import com.sonata.login.model.User;


@Component
public class defaultUser implements UserInterface {
	
	@Autowired
	DbConnection db;
         
	//implementing method to add a new user
	@Override
	public User addUser(User User) throws SQLException {
		PreparedStatement ps = db.getConnection().prepareStatement
				("insert into user values(?,?,?,?,?,?,?,?,?,?,?)");
		ps.setInt(1, User.getUser_ID());
		ps.setString(2,User.getUsername());
		ps.setString(3,User.getEmail());
		ps.setString(4, User.getFirst_Name());
		ps.setString(5,User.getLast_Name());
		ps.setLong(6, User.getContact_Number());
		ps.setString(7, User.getRole());
		ps.setBoolean(8, User.isIsActive());
		ps.setDate(9,User.getDOB());
		ps.setTimestamp(10, User.getCreatedOn());
		ps.setString(11, User.getPassword());
		int row = ps.executeUpdate();
		return User;
	}

	

}
