package com.sonata.login.dao;

import java.sql.SQLException;
import java.util.List;

import com.sonata.login.model.User;
import com.sonata.login.model.Task;



public interface UserInterface {

	
	public User addUser(User User) throws SQLException;
	public boolean validateuser(String Username, String Password) throws SQLException;
	public List<User> getData() throws SQLException;
	public void deleteUser(int id) throws SQLException;
	public void updateuser(int User_ID, User user) throws SQLException;
	public User userid(int User_ID) throws SQLException;
	
	
}
