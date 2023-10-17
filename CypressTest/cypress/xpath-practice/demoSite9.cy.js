///<reference types="cypress"/>
describe("xpath practice testProject", function () {
  it("handle switch to another tab case", function () {
    cy.visit("https://testproject.io/");
    // handle svg icons 
    cy.xpath("//*[local-name()='svg'][@id='Group_2033']").click();
    cy.wait(10000);
    cy.xpath("//span[@class='lg-close lg-icon']").click();
    // 

    cy.xpath("//a[@href='https://www.facebook.com/testproject.io/']").invoke('removeAttr','target').click();
    cy.wait(10000);
    cy.xpath("//a[@href='https://www.facebook.com/testproject.io/']//*[local-name()='svg']").click();
    cy.wait(10000);
    cy.xpath("//a[@title='Blog']/parent::li/following-sibling::li//a").invoke("removeAttr", "target").click();
  });
});
