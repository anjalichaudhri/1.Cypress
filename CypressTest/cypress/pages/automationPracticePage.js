export function openAutomationPracticePage() {
  cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
}

export function openAngularPracticePage() {
  cy.visit("https://rahulshettyacademy.com/angularpractice/");
}
export default { openAutomationPracticePage, openAngularPracticePage };
