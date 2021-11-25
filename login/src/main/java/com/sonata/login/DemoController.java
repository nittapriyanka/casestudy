package com.sonata.login;


import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.sonata.login.dao.TaskInterface;
import com.sonata.login.dao.UserInterface;
import com.sonata.login.model.Task;
import com.sonata.login.model.User;

@RestController
public class DemoController {

    @Autowired
	UserInterface user;
	
	@Autowired
	TaskInterface task;
	
	@Autowired
	TaskInterface list;
	
	@Autowired
	TaskInterface priority;
	
	@Autowired
	TaskInterface state;
	

	//To GET list of tasks
	@RequestMapping(value ="/list", method = RequestMethod.GET)
	public List<Task> getData1() throws SQLException{
		
		return task.getData1();
		
	}
	
	//To prioritize the task from taskid
	@RequestMapping(value="/priority/{Task_ID}/{Priority}", method = RequestMethod.GET)
	public List<Task> setPriority( @PathVariable int Task_ID, @PathVariable String Priority) throws SQLException
	{
		int row=task.setPriority(Task_ID, Priority);
		
		return task.getData1();
		
	}
	
	
	//To assigning the task 
	@RequestMapping(value="/create/{Owner_ID}/{Task_ID}",method=RequestMethod.GET)
	public List<Task> settask(@PathVariable int Owner_ID,@PathVariable int Task_ID) throws SQLException
	{
		int row=task.settask(Owner_ID,Task_ID);
	    return task.getData1();
	}
	
	
	//By using Get requestmethod able to add notes 
	@RequestMapping(value="/notes/{Task_ID}/{Notes}", method = RequestMethod.GET)
	
	public List<Task> setNotes(@PathVariable int Task_ID, @PathVariable String Notes) throws SQLException
	{
		int row=task.setNotes(Task_ID, Notes);
		return task.getData1();
	}
	
	//To add bookmark
	@RequestMapping(value="/bookmark/{Task_ID}/{IsBookmarked}", method = RequestMethod.GET)
	public List<Task> setBookmarks(@PathVariable int Task_ID,@PathVariable boolean IsBookmarked) throws SQLException
	{
		int row = task.setBookmarks(Task_ID, IsBookmarked);
		return task.getData1();
	}
	
	//To search a task based on taskid
	@RequestMapping(value="/search/{Task_ID}",method = RequestMethod.GET)
	public Task setSearch(@PathVariable int Task_ID) throws SQLException
	{
		return  task.setSearch(Task_ID);
		//return task.getData1();
	}
	

	@RequestMapping(value="/stat/{Status}",method = RequestMethod.GET)
	public Task setstate(@PathVariable String Status) throws SQLException
	{
		return task.setstate(Status);
	}
	
	//By POST to add new task to the tasklist
	@PostMapping(value = "/newtask", consumes = "application/json", produces="application/json")
	public List<Task> insert(@RequestBody Task Task) throws SQLException
	{
		task.addTask(Task);
		return task.getData1();
 
	
	
	}
	
	//By post add new user
	@PostMapping(value="/newuser",consumes = "application/json", produces="application/json")
	 public User addUser(User User) throws SQLException{
		return User;
		
	}

	
	
}
