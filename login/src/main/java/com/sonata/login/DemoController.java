package com.sonata.login;


import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sonata.login.dao.TaskInterface;
import com.sonata.login.dao.UserInterface;
import com.sonata.login.model.Task;
import com.sonata.login.model.User;
//@CrossOrigin(origins="http://localhost:4200/")
@CrossOrigin(origins="http://localhost:3000/")
@RestController
public class DemoController {
	
	@Autowired
	User User;

    @Autowired
	UserInterface userimp;
	
	@Autowired
	TaskInterface taskimpl;
	
	@Autowired
	Task task;
		
	
	//To GET list of tasks
	@RequestMapping(value ="/tasks", method = RequestMethod.GET, produces={"application/json"})
	public List<Task> getData1() throws SQLException{
		
		return taskimpl.getData1();
		
	}
	//to get list of users
	@RequestMapping(value="/users",method=RequestMethod.GET,produces= {"application/json"})
	public List<User> getData() throws SQLException{
		return userimp.getData();
	}
	//to get task details based on task id
	@RequestMapping(value="/tasks/{Task_ID}", method=RequestMethod.GET,produces= {"application/json"})
	public Task  taskid(@PathVariable int Task_ID ) throws SQLException{
		return taskimpl.taskid(Task_ID);
	}
	
	
	//to get the details of user based on user_id
	@RequestMapping(value="/users/{User_ID}", method=RequestMethod.GET,produces= {"application/json"}) 
	public User Userid(@PathVariable int User_ID) throws SQLException{
		return userimp.userid(User_ID);
	}
	
	
	
	//update task details
		@PutMapping("/tasks/{Task_ID}")
		public void Update(@PathVariable int Task_ID,@RequestBody Task task) throws SQLException
		{
			taskimpl.updateTaskStatus(Task_ID,task);
		}
		
		
		//update user details
		@PutMapping("/users/{User_ID}")
		public void updateuser(@PathVariable int User_ID,@RequestBody User user) throws SQLException{
			userimp.updateuser(User_ID,user);
		}
		
	
	//deletetask
		@DeleteMapping("/tasks/{Task_ID}")
		public void Delete(@PathVariable int Task_ID) throws SQLException
		{
			taskimpl.deleteTask(Task_ID);
		}
		
		
		//delete user
		@DeleteMapping("/users/{User_ID}")
		public void Deleteuser(@PathVariable int User_ID) throws SQLException
		{
			userimp.deleteUser(User_ID);
		}

	
	//To prioritize the task from taskid
	@RequestMapping(value="/tasks/{Task_ID}/uu/{Priority}", method = RequestMethod.GET)
	public List<Task> setPriority( @PathVariable int Task_ID, @PathVariable String Priority) throws SQLException
	{
		int row=taskimpl.setPriority(Task_ID, Priority);
		
		return taskimpl.getData1();
		
	}
	
	//TO SET THE TASK
	@RequestMapping(value="/tasks/{Task_ID}/ss/{Status}", method=RequestMethod.GET)
	public List<Task> setsta(@PathVariable int Task_ID,@PathVariable String Status) throws SQLException{
		int row=taskimpl.setsta(Task_ID, Status);
		return taskimpl.getData1();
		
	}
	
	
	//To assigning the task 
	@RequestMapping(value="/tasks/{Task_ID}/ow/{Owner_ID}",method=RequestMethod.GET)
	public List<Task> settask(@PathVariable int Task_ID,@PathVariable int  Owner_ID) throws SQLException
	{
		int row=taskimpl.settask(Task_ID,Owner_ID);
	    return taskimpl.getData1();
	}
	
	
	//By using Get requestmethod able to add notes 
	@RequestMapping(value="/tasks/{Task_ID}/nn/{Notes}", method = RequestMethod.GET)
	
	public List<Task> setNotes(@PathVariable int Task_ID, @PathVariable String Notes) throws SQLException
	{
		int row=taskimpl.setNotes(Task_ID, Notes);
		return taskimpl.getData1();
	}
	
	//to add notes
	@RequestMapping(value="/tasks/{Task_ID}/dd/{Description}",method = RequestMethod.GET)
	
	public List<Task> setDescription(@PathVariable int Task_ID,@PathVariable String Description) throws SQLException{
		int row=taskimpl.setDescription(Task_ID, Description);
		return taskimpl.getData1();
	
	}
	
	//To add bookmark
	@RequestMapping(value="tasks/{Task_ID}/book/{IsBookmarked}", method = RequestMethod.GET)
	public List<Task> setBookmarks(@PathVariable int Task_ID,@PathVariable boolean IsBookmarked) throws SQLException
	{
		int row = taskimpl.setBookmarks(Task_ID, IsBookmarked);
		return taskimpl.getData1();
	}
	
	
	
	//To search a task based on taskid
	@RequestMapping(value="/tasks/{Task_ID}",method = RequestMethod.GET)
	public Task setSearch(@PathVariable int Task_ID) throws SQLException
	{
		return  taskimpl.setSearch(Task_ID);
		//return task.getData1();
	}
	
	
	//to get the status
	//@RequestMapping(value="/tasks/{Status}",method = RequestMethod.GET,produces= {"application/json"})
	//public Task Search(@PathVariable String Status) throws SQLException
	//{
		//return  taskimpl.checkStatus(Status);
		
	//}
	
	
	
	
	

	//@RequestMapping(value="/tasks/{Status}",method = RequestMethod.GET)
	//public Task setstate(@PathVariable String Status) throws SQLException
	//{
		//return taskimpl.setstate(Status);
	//}
	
	//By POST to add new task to the tasklist
	@PostMapping(value = "/tasks", consumes = "application/json", produces="application/json")
	public Task insert(@RequestBody Task Task) throws SQLException
	{
		
		return taskimpl.addTask(Task);
 
	
	
	}
	
	//By post add new user
	@PostMapping(value="/users",consumes = "application/json", produces="application/json")
	 public User addUser(@RequestBody User User) throws SQLException
	{
		
	   return userimp.addUser(User);
		
	}
	
	
	
	

	
	//validate user
	@GetMapping("/users/{Username}/{Password}")
	public boolean validateuser(@PathVariable String Username,@PathVariable String Password) throws SQLException
	{
		return userimp.validateuser(Username,Password);
	}
	
	// Search by status
	@RequestMapping(value= "/tasks/status/{Status}",method = RequestMethod.GET,produces="application/json")
	public List<Task> statuslist(@PathVariable("Status") String Status) throws SQLException{
		return taskimpl.checkStatus(Status);
		
	}
	
	
	//search by task id
	@RequestMapping(value= "/tasks/tak/{Task_ID}",method = RequestMethod.GET,produces="application/json")
	public List<Task> taklist(@PathVariable("Task_ID") int Task_ID) throws SQLException{
		return taskimpl.checkTask_ID(Task_ID);
		
	}
	
	//search by priority
	@RequestMapping(value="/tasks/pri/{Priority}",method=RequestMethod.GET,produces="application/json")
	public List<Task> tasklist(@PathVariable("Priority") String Priority) throws SQLException{
		return taskimpl.checkprio(Priority);
	}
	
	
	//search by task name
	@RequestMapping(value="/tasks/nam/{Name}",method=RequestMethod.GET,produces="application/json")
	public List<Task> tasklis(@PathVariable("Name") String Name) throws SQLException{
		return taskimpl.checkname(Name);
	}
	
	
	
}

