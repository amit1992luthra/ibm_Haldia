package stepdefination;

import cucumber.api.java.en.Then;

public class StepDefination2 {
	@Then("user navigate to the dashboard")
	public void user_navigate_to_the_dashboard() {
		System.out.println("i am in 6th step");
	}
	
	@Then("Company logo display")
	public void company_logo_display() {
	   System.out.println("new step");
	}

}
