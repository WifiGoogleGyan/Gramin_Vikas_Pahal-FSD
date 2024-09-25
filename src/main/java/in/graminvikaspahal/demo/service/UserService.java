package in.graminvikaspahal.demo.service;

import java.util.List;

import in.graminvikaspahal.demo.Model.AppUser;

public interface UserService {
	
	public AppUser SaveUser(AppUser newuser);
	
	public void removemessage();

	List<AppUser> findAllUsers();

}
