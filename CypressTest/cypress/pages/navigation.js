export function navigateToBackPage() {
  cy.go("back");
}

export function navigateToForwardPage() {
  cy.go("forward");
}

export default { navigateToBackPage, navigateToForwardPage };
