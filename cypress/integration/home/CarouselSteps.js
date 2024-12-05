import cypress from "cypress"
import{Given, When, Then} from "cypress-cucumber-preprocessor/steps"

Given('I visit the homepage', () =>{
    cy.visit("/")
})
When('I click #{string}  ')