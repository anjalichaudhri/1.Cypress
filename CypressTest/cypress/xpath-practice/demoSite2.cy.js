///<reference types='cypress'/>
import {
  AddBookToCart,
  basePage,
  FindInPage,
  Login,
  RemoveBookFromCart,
  ValidateDashboardPage,
  ValidateFinalPrice,
} from "../xpathPages/tutorialsPoint";

describe("tutorialspoint site", () => {
  it("xpath practice 2", () => {
    basePage();
    Login();
    cy.wait(8000);
    ValidateDashboardPage();
    cy.xpath("//a[@role='button'][.='eBooks']").click();
    cy.xpath("//ul[@id='ebooks']//li").each(($el, index, $list) => {
      cy.log($el.text(), " test ");
      if ($el.text().trim() === "List") {
        cy.log("test2");
        cy.wrap($el).click();
      }
    });

    AddBookToCart();
    cy.wait(4000);
    RemoveBookFromCart();
    ValidateFinalPrice()
    //FindInPage();
  });
});

