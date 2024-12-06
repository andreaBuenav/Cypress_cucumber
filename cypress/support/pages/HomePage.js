import BasePage from "./BasePage";

class HomePage extends BasePage {
    navigateToHomepage(){
       super.navigate(""); 
    }

    clickOn_Cart_Button(){
        cy.clickAndOpen("#cartur");
    }

    clickOn_Login_Button(){
        
    }
}