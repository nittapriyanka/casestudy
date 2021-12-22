package com.sonata.login.impl;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.sonata.login.dao.TaskInterface;
import com.sonata.login.db.DbConnection;
import com.sonata.login.model.Task;


@Component
public class defaultTask implements TaskInterface{
	
	
	@Autowired
	DbConnection db;
	int row;
	
	
	//implementing method to get list of tasks
	public List<Task> getData1(){
		List<Task> tasklist = new ArrayList<>();
		try {
		PreparedStatement cs1 = db.getConnection().prepareStatement
				("select * from task");
		
		ResultSet rs = cs1.executeQuery();
		while(rs.next()) {
			
			Task t1= new Task();
			
			 
			t1.setTask_ID(rs.getInt(1));
			t1.setOwner_ID(rs.getInt(2));
			t1.setCreator_ID(rs.getInt(3));
			t1.setName(rs.getString(4));
			t1.setDescription(rs.getString(5));
			t1.setStatus(rs.getString(6));
			t1.setPriority(rs.getString(7));
			t1.setNotes(rs.getString(8));
			t1.setIsBookmarked(rs.getBoolean(9));
			t1.setCreated_On(rs.getTimestamp(10));
			t1.setStatus_Changed_On(rs.getTimestamp(11));
			tasklist.add(t1);
		}
			
		}catch(SQLException se) {se.printStackTrace();}
		return tasklist;}
		

		
		//implementing for method for priority
		@Override
		public int setPriority(int Task_ID, String Priority) throws SQLException {
			PreparedStatement cs2 = db.getConnection().prepareStatement
					("update task set Priority = ? where Task_ID=?");
			cs2.setString(1, Priority);
			cs2.setInt(2, Task_ID);
			
			int row = cs2.executeUpdate();
			return row;
		}
		
		
		@Override
		public int setsta(int Task_ID,String Status) throws SQLException{
			PreparedStatement cs2 = db.getConnection().prepareStatement
					("update task set Status = ? where Task_ID=?");
			cs2.setString(1, Status);
			cs2.setInt(2, Task_ID);
			
			int row = cs2.executeUpdate();
			return row;
			
		}
		
		//implementing method for set task
		@Override
		public int settask(int Task_ID, int Owner_ID) throws SQLException {
			PreparedStatement cs = db.getConnection().prepareStatement
					("update task set Owner_ID = ?  where Task_ID = ?");
			cs.setInt(1, Owner_ID);
			cs.setInt(2, Task_ID);
			int row=cs.executeUpdate();
			return row;
		}
		

        //implementing method for add notes
		@Override
		public int setNotes(int Task_ID, String Notes) throws SQLException {
			
			PreparedStatement cs3 = db.getConnection().prepareStatement
					("update task set Notes = ? where Task_ID=?");
			cs3.setString(1, Notes);
			cs3.setInt(2, Task_ID);
			
			int row = cs3.executeUpdate();
			return row;
			
		
		}
		
		//implement method to add notes
		@Override
		public int setDescription(int Task_ID,String Description) throws SQLException{
			
			PreparedStatement cs3 = db.getConnection().prepareStatement
					("update task set Description = ? where Task_ID=?");
			cs3.setString(1, Description);
			cs3.setInt(2, Task_ID);
			
			int row = cs3.executeUpdate();
			return row;
		}
		
		
		//implementing method to add bookmark
		@Override
		public int setBookmarks(int Task_ID , boolean IsBookmarked) throws SQLException{
			
			PreparedStatement cs4 = db.getConnection().prepareStatement
					("update task set IsBookmarked = ? where Task_ID = ?");
			cs4.setBoolean(1,IsBookmarked);
			cs4.setInt(2,Task_ID);
			
			int row = cs4.executeUpdate();
			return row;
		}



        //implementing method to add task
		@Override
		public Task addTask(Task task) throws SQLException {
			
			
			
			try {
				
				
				
				 
				PreparedStatement cs = db.getConnection().prepareStatement
						("insert into task values(?,?,?,?,?,?,?,?,?,?,?)");
				
				
				cs.setInt(1,task.getTask_ID());
				cs.setInt(2, task.getOwner_ID());
				cs.setInt(3, task.getCreator_ID());
				cs.setString(4, task.getName());
				cs.setString(5, task.getDescription());
				cs.setString(6, task.getStatus());
				cs.setString(7, task.getPriority());
				cs.setString(8, task.getNotes());
				cs.setBoolean(9, task.getIsBookmarked());
				cs.setTimestamp(10,task.getCreated_On());
				cs.setTimestamp(11, task.getStatus_Changed_On());
				
				
				 row = cs.executeUpdate();		
				
				
			}catch(SQLException e) {System.out.println(e);}
			return task;	
		}
		
			
			
		

        //implementing method for search a task
	    @Override
		public Task setSearch(int Task_ID) throws SQLException {
		
		List<Task> tasklist = new ArrayList<>();
		
			PreparedStatement cs5= db.getConnection().prepareStatement
					("select * from task where Task_ID=?");
			cs5.setInt(1,Task_ID);
			ResultSet rs = cs5.executeQuery();
			while(rs.next())
			{
				Task t3= new Task();
				
				 
				t3.setTask_ID(rs.getInt(1));
				t3.setOwner_ID(rs.getInt(2));
				t3.setCreator_ID(rs.getInt(3));
				t3.setName(rs.getString(4));
				t3.setDescription(rs.getString(5));
				t3.setStatus(rs.getString(6));
				t3.setPriority(rs.getString(7));
				t3.setNotes(rs.getString(8));
				t3.setIsBookmarked(rs.getBoolean(9));
				t3.setCreated_On(rs.getTimestamp(10));
				t3.setStatus_Changed_On(rs.getTimestamp(11));
				return t3;
				
			}
			return (Task) tasklist;		
										
		}




	 /*   @Override
	    public Task setstate(String Status) throws SQLException {
		
		List<Task> tasklist = new ArrayList<>();
		PreparedStatement cs6= db.getConnection().prepareStatement
				("select * from task where Status=?");
		cs6.setString(1,Status);
		ResultSet rs = cs6.executeQuery();
		
		while(rs.next())
		{
			Task t3= new Task();
			
			 
			t3.setTask_ID(rs.getInt(1));
			t3.setOwner_ID(rs.getInt(2));
			t3.setCreator_ID(rs.getInt(3));
			t3.setName(rs.getString(4));
			t3.setDescription(rs.getString(5));
			t3.setStatus(rs.getString(6));
			t3.setPriority(rs.getString(7));
			t3.setNotes(rs.getString(8));
			t3.setIsBookmarked(rs.getBoolean(9));
			t3.setCreated_On(rs.getTimestamp(10));
			t3.setStatus_Changed_On(rs.getTimestamp(11));
		
		return t3;
	}
		return (Task) tasklist ;

	}*/



		@Override
		public void updateTaskStatus(int Task_ID, Task task)throws SQLException 
		{
			PreparedStatement cs5=db.getConnection().prepareStatement("update task set Owner_ID=?,Creator_ID=?,Name=?,Description=?,Status=?,Priority=?,Notes=?,isBookmarked=?,Status_Changed_On=? where Task_ID=?");
			cs5.setInt(1, task.getOwner_ID());
			cs5.setInt(2, task.getCreator_ID());
			cs5.setString(3, task.getName());
			cs5.setString(4, task.getDescription());
			cs5.setString(5, task.getStatus());
			cs5.setString(6, task.getPriority());
			cs5.setString(7, task.getNotes());
			cs5.setBoolean(8,task.getIsBookmarked());
			//cs5.setTimestamp(9, task.getCreated_On());
			cs5.setTimestamp(9, task.getStatus_Changed_On());
			
			cs5.setInt(10, Task_ID);
			row=cs5.executeUpdate();
			
			
		}
		
		public void deleteTask(int id) throws SQLException
		{
			PreparedStatement cs6=db.getConnection().prepareStatement("delete from task where Task_ID=?");
			cs6.setInt(1, id);
			row=cs6.executeUpdate();
		}



		@Override
		public Task taskid(int Task_ID) throws SQLException {
			Task t1= new Task();
			//List<Task>  tasklist = new ArrayList<>();
			try {
			PreparedStatement cs7=db.getConnection().prepareStatement("select * from task where Task_ID=?");
			cs7.setInt(1, Task_ID);
			ResultSet rs = cs7.executeQuery();
			while(rs.next()) {
				
				
				
				 
				t1.setTask_ID(rs.getInt(1));
				t1.setOwner_ID(rs.getInt(2));
				t1.setCreator_ID(rs.getInt(3));
				t1.setName(rs.getString(4));
				t1.setDescription(rs.getString(5));
				t1.setStatus(rs.getString(6));
				t1.setPriority(rs.getString(7));
				t1.setNotes(rs.getString(8));
				t1.setIsBookmarked(rs.getBoolean(9));
				t1.setCreated_On(rs.getTimestamp(10));
				t1.setStatus_Changed_On(rs.getTimestamp(11));
				
				
				//tasklist.add(t1);
			}
			
			
			}
		catch(SQLException se) {se.printStackTrace();}
			return t1;
			
			
		}



		/*@Override
		public Task sttatus(String Status) throws SQLException {
			List<Task> tasklist = new ArrayList<>();
			
			PreparedStatement cs9= db.getConnection().prepareStatement
					("select * from task where Status=?");
			cs9.setString(1,Status);
			ResultSet rs = cs9.executeQuery();
			while(rs.next())
			{
				Task t3= new Task();
				
				 
				t3.setTask_ID(rs.getInt(1));
				t3.setOwner_ID(rs.getInt(2));
				t3.setCreator_ID(rs.getInt(3));
				t3.setName(rs.getString(4));
				t3.setDescription(rs.getString(5));
				t3.setStatus(rs.getString(6));
				t3.setPriority(rs.getString(7));
				t3.setNotes(rs.getString(8));
				t3.setIsBookmarked(rs.getBoolean(9));
				t3.setCreated_On(rs.getTimestamp(10));
				t3.setStatus_Changed_On(rs.getTimestamp(11));
				return t3;
				
			}
			return (Task) tasklist;	
			
		}*/



		@Override
		public List<Task> checkStatus(String Status) throws SQLException {
			List<Task> tasklist = new ArrayList<>();
			
			
			try {
				PreparedStatement cs1 = db.getConnection().prepareStatement
						("select * from task where Status=?");
				cs1.setString(1, Status);
				
				ResultSet rs = cs1.executeQuery();
				while(rs.next()) {
					
					Task t1= new Task();
					
					 
					t1.setTask_ID(rs.getInt(1));
					t1.setOwner_ID(rs.getInt(2));
					t1.setCreator_ID(rs.getInt(3));
					t1.setName(rs.getString(4));
					t1.setDescription(rs.getString(5));
					t1.setStatus(rs.getString(6));
					t1.setPriority(rs.getString(7));
					t1.setNotes(rs.getString(8));
					t1.setIsBookmarked(rs.getBoolean(9));
					t1.setCreated_On(rs.getTimestamp(10));
					t1.setStatus_Changed_On(rs.getTimestamp(11));
					tasklist.add(t1);
				}
					
				}catch(SQLException se) {se.printStackTrace();}
				return tasklist;}



		@Override
		public List<Task> checkTask_ID(int Task_ID) throws SQLException {
          List<Task> tasklist = new ArrayList<>();
			
			
			try {
				PreparedStatement cs1 = db.getConnection().prepareStatement
						("select * from task where Task_ID=?");
				cs1.setInt(1, Task_ID);
				
				ResultSet rs = cs1.executeQuery();
				while(rs.next()) {
					
					Task t1= new Task();
					
					 
					t1.setTask_ID(rs.getInt(1));
					t1.setOwner_ID(rs.getInt(2));
					t1.setCreator_ID(rs.getInt(3));
					t1.setName(rs.getString(4));
					t1.setDescription(rs.getString(5));
					t1.setStatus(rs.getString(6));
					t1.setPriority(rs.getString(7));
					t1.setNotes(rs.getString(8));
					t1.setIsBookmarked(rs.getBoolean(9));
					t1.setCreated_On(rs.getTimestamp(10));
					t1.setStatus_Changed_On(rs.getTimestamp(11));
					tasklist.add(t1);
				}
					
				}catch(SQLException se) {se.printStackTrace();}
				return tasklist;}



		@Override
		public List<Task> checkprio(String Priority) throws SQLException {
			 List<Task> tasklist = new ArrayList<>();
				
				
				try {
					PreparedStatement cs1 = db.getConnection().prepareStatement
							("select * from task where Priority=?");
					cs1.setString(1, Priority);
					
					ResultSet rs = cs1.executeQuery();
					while(rs.next()) {
						
						Task t1= new Task();
						
						 
						t1.setTask_ID(rs.getInt(1));
						t1.setOwner_ID(rs.getInt(2));
						t1.setCreator_ID(rs.getInt(3));
						t1.setName(rs.getString(4));
						t1.setDescription(rs.getString(5));
						t1.setStatus(rs.getString(6));
						t1.setPriority(rs.getString(7));
						t1.setNotes(rs.getString(8));
						t1.setIsBookmarked(rs.getBoolean(9));
						t1.setCreated_On(rs.getTimestamp(10));
						t1.setStatus_Changed_On(rs.getTimestamp(11));
						tasklist.add(t1);
					}
						
					}catch(SQLException se) {se.printStackTrace();}
					return tasklist;}



		@Override
		public List<Task> checkname(String Name) throws SQLException {
			 List<Task> tasklist = new ArrayList<>();
				
				
				try {
					PreparedStatement cs1 = db.getConnection().prepareStatement
							("select * from task where Name=?");
					cs1.setString(1, Name);
					
					ResultSet rs = cs1.executeQuery();
					while(rs.next()) {
						
						Task t1= new Task();
						
						 
						t1.setTask_ID(rs.getInt(1));
						t1.setOwner_ID(rs.getInt(2));
						t1.setCreator_ID(rs.getInt(3));
						t1.setName(rs.getString(4));
						t1.setDescription(rs.getString(5));
						t1.setStatus(rs.getString(6));
						t1.setPriority(rs.getString(7));
						t1.setNotes(rs.getString(8));
						t1.setIsBookmarked(rs.getBoolean(9));
						t1.setCreated_On(rs.getTimestamp(10));
						t1.setStatus_Changed_On(rs.getTimestamp(11));
						tasklist.add(t1);
					}
						
					}catch(SQLException se) {se.printStackTrace();}
					return tasklist;}


		}
			
		
			

		
			
			
		



		
		



		
		
			
			



	
	

	

