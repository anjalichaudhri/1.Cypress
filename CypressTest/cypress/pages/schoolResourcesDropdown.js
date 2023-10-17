export function openResourcesDropdown() {    
    cy.xpath("//i[@class='material-icons'][contains(.,'article')]").click();
  }
  
export default { openResourcesDropdown };