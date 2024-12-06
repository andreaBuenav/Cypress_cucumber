
import{Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import BasePage from "./pages/BasePage"

const basePage = new BasePage();

 Given('I visit the homepage'), ()=>{
    basePage.navigate();
 }

 When('I click on the home button'), () =>{
    cy.clickAndOpen("li.nav-item.active > a.nav-link");
 }

 When('I click on the contact button'), () =>{
    cy.clickAndOpen("");
 }

 When('I click on the cart button'), () =>{
    cy.clickAndOpen("#cartur");
 }

 When('I click on the login button'), () =>{
    cy.clickAndOpen("#login2");
 }

 When('I click on the sign up button'), () =>{
    cy.clickAndOpen("#singin2");
 }


