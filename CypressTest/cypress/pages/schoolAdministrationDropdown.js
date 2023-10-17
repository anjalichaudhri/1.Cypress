export function openAdministrationDropdown() {
  // cy.get('.gl-header-right-item-dropdown')
  //     .wait(2000)
  //     .find('.gl-header-right-item ')
  //     .each(($el, index, $list) => {
  //         const iconText = $el.find("i.material-icons").text();
  //         console.log(iconText);
  //         if (iconText.includes("settings")) {
  //             console.log(iconText); //, $el.find('button'));
  //             //cy.wrap($el).find('button').contains('ADD TO CART').click();
  //             cy.wrap($el).wait(2000).click().wait(2000);
  //             //.get('#region_svg__\u56FE\u5C42_1').click().wait(2000);
  //         }
  //       });
  cy.xpath('//i[contains(text(),"settings")]').click();
}

export default { openAdministrationDropdown };
