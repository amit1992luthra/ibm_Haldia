$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/demo.feature");
formatter.feature({
  "name": "Login Feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify Dashboard",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@amit"
    }
  ]
});
formatter.step({
  "name": "user clicks on login link",
  "keyword": "When "
});
formatter.step({
  "name": "enter \"\u003cUsername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user navigate to the dashboard",
  "keyword": "And "
});
formatter.step({
  "name": "Company logo display dkcnjerkfjefknefk",
  "keyword": "And "
});
formatter.step({
  "name": "user navigates to instagram",
  "keyword": "When "
});
formatter.step({
  "name": "enter the \"\u003cUsername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Instagram dashboard will be display",
  "keyword": "Then "
});
formatter.step({
  "name": "User sign up with the values \"\u003cUsername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Username",
        "password"
      ]
    },
    {
      "cells": [
        "user1",
        "amit1234"
      ]
    }
  ]
});
formatter.background({
  "name": "common test steps",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "User is on the application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefination.user_is_on_the_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Verify Dashboard",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@amit"
    }
  ]
});
formatter.step({
  "name": "user clicks on login link",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.user_clicks_on_login_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "enter \"user1\" and \"amit1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.enter_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user navigate to the dashboard",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination2.user_navigate_to_the_dashboard()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Company logo display dkcnjerkfjefknefk",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.company_logo_display_dkcnjerkfjefknefk()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user navigates to instagram",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.user_navigates_to_instagram()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "enter the \"user1\" and \"amit1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.enter_the_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Instagram dashboard will be display",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.instagram_dashboard_will_be_display()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User sign up with the values \"user1\" and \"amit1234\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "skipped"
});
});