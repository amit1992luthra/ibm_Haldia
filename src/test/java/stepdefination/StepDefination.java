package stepdefination;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import hooks.hooksclass;
import junit.framework.Assert;


public class StepDefination {
	WebDriver driver = hooksclass.driver;
	Alert alert;
	
	
	@Given("User is on the application")
	public void user_is_on_the_application() {
		
		driver.get("https://www.facebook.com/");
		
		
	    System.out.println("i am in 1st step");
	}
	
	@When("User navigates to login page")
	public void user_navigates_to_login_page() {
	    System.out.println("i am in demo 1 feature file");
	}

	@When("user clicks on login link")
	public void user_clicks_on_login_link() {
		System.out.println("User clicks on Login Button");
	}

	

	@When("user click on login button")
	public void user_click_on_login_button() {
		System.out.println("i am in 4th step");
	}

	@Then("Success message display")
	public void success_message_display() {
		System.out.println("i am in 5th step");
	}

	

	@When("enter {string} and {string}")
	public void enter_and(String username, String password) {
		try
		{
			driver.findElement(By.id("email")).sendKeys(username);
		    driver.findElement(By.id("pass")).sendKeys(password);
		    //Assert.assertEquals("Facebook", driver.getTitle());
		}
		catch(Exception ex)
		{
			
		}
	    
	    
	    
	}

	@When("i click on settings")
	public void i_click_on_settings() {
		System.out.println("i am in 7th step");
	}
	

	@Then("setting page opens")
	public void setting_page_opens() {
		System.out.println("i am in 8th step");
	}
	

@When("Company logo display dkcnjerkfjefknefk")
public void company_logo_display_dkcnjerkfjefknefk() {
    // Write code here that turns the phrase above into concrete actions
   // throw new cucumber.api.PendingException();
}

@When("user navigates to instagram")
public void user_navigates_to_instagram() throws InterruptedException {
   driver.get("https://www.instagram.com/");
   Thread.sleep(3000);
}

@When("enter the {string} and {string}")
public void enter_the_and(String username, String password) {
    System.out.println(username);
}

@Then("Instagram dashboard will be display")
public void instagram_dashboard_will_be_display() {
    System.out.println("insta dashboard");
}




}
