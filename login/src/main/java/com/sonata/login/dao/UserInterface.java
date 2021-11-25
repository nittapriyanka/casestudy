package com.sonata.login.dao;

import java.sql.SQLException;

import com.sonata.login.model.User;
import com.sonata.login.model.Task;



public interface UserInterface {

	
	public User addUser(User User) throws SQLException;
	
	
}
