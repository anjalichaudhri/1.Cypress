// import { should } from "chai";

export function openRegionPage() {
  // cy.get('.gl-link')
  //     .wait(1000)
  //     .find("span")
  //     .each(($el, index, $list) => {
  //         const spanText = $el.text();
  //         if(spanText.includes("Regions")) {
  //             console.log(spanText);
  //             cy.wrap($el).wait(2000).click().wait(5000);
  //         }
  //     });
  cy.xpath('//li[.="Regions"]').click();
}

export function openAddNewRegionPage() {
  // cy.get('.reg-page__action')
  // .find("span")
  // .each(($el, index, $list) => {
  //     const spanText = $el.text();
  //     if(spanText.includes("Add New Region")) {
  //         cy.wrap($el).click().wait(3000);
  //     }
  // });
  cy.xpath('//span[contains(normalize-space(),"Add New Region")]').click();
}

// const name = "Anjali automation region";
// const supportEmail = "anjalinonerole@yopmail.com";
// const materialOrderEmail = "anjalinonerole@yopmail.com";
// const regionGroupId = "Anjali Group";
// const primaryLanguage = "Thai";
// const gsVersionGroupId = "GSv4";
// const lsVersionGroupId = "LSv1";
// const currency = "RUB";
// const status = "Test";
// const gsLessonPlanVersionId = "Ankit 1";
// const repMethodologyVersionId = "2nd REP GSv4 lesson plan";
export function createRegionNumber(){
  let regionNumber = " RN ";
  for(let count = 0; count<=4; count++) {
    regionNumber = regionNumber + (Math.trunc((Math.random()*9)+1));
    cy.log(regionNumber);
  }
  return regionNumber;
}

let regionName;
export function fillTheAddNewRegionForm(formData) {
  const regionNumber = createRegionNumber();
  Cypress.env('regionName', formData.name.concat(regionNumber));
  regionName = formData.name.concat(regionNumber);
  cy.log(Cypress.env('regionName'));
  cy.pause();
  cy
    //.get('#name')
    .xpath('//input[@id="name"]')
    .type(Cypress.env('regionName'))
    .should("have.value", formData.name.concat(regionNumber));
  cy
    //.get('#englishName')
    .xpath('//input[@id="englishName"]')
    .type(Cypress.env('regionName'))
    .should("have.value", formData.name.concat(regionNumber));
  cy
    //.get('#supportEmail')
    .xpath('//input[@id="supportEmail"]')
    .type(formData.supportEmail)
    .should("have.value", formData.supportEmail);
  cy
    // .get('#materialOrderEmail')
    .xpath('//input[@id="materialOrderEmail"]')
    .type(formData.materialOrderEmail)
    .should("have.value", formData.materialOrderEmail);
  cy
    //.get("#regionGroupId")
    .xpath(
      "//div[@id='regionGroupId']"
    )
    .click()
    .wait(100)
    .xpath("//li[@title='"+formData.regionGroupId+"']")
    .click()
    .should("have.text", formData.regionGroupId);
  cy.wait(2000);

  cy.xpath(
    "//div[@id='primaryLanguage']"
  )
    .click()
    .wait(100)
    .xpath("//li[@title='"+formData.primaryLanguage+"']")
    .should("have.text", formData.primaryLanguage)
    .click();

  cy.xpath(
    "//div[@id='gsVersionGroupId']"
  )
    .click()
    .wait(100)
    .xpath("//li[@title='"+formData.gsVersionGroupId+"']")
    .click()
    .should("contain", formData.gsVersionGroupId);

  cy.wait(2000);

  cy.xpath(
    "//div[@id='lsVersionGroupId']"
  )
    .click()
    .wait(100)
    .xpath("//li[@title='"+formData.lsVersionGroupId+"']")
    .should("have.text", formData.lsVersionGroupId)
    .click();

  cy.xpath("//div[@id='currency']")
    .click()
    .wait(100)
    .xpath(`//li[contains(.,'${formData.currency}')]`)
    .click()
    .should("have.text", formData.currency);
  cy.wait(2000);

  cy.xpath("//input[@placeholder='Select date']")
    .click()
    .wait(100)
    .xpath("//a[normalize-space()='Today']")
    .should("be.not.empty")
    .click();

  cy.xpath("//div[@id='status']")
    .click()
    .wait(100)
    .xpath(`//li[@title='${formData.status}']`)
    .should("have.text", formData.status)
    .click();

    // .xpath("//ul[@role='listbox']//li[@title='Test']")
    // .xpath(`//li[@title='${formData.status}']`)
    // .should("have.text", formData.status)
    // .click();

  cy.xpath(
    "//div[@id='gsLessonPlanVersionId']"
  )
    .click()
    .wait(100)
    .xpath(`//li[@title='${formData.gsLessonPlanVersionId}']`)
    .click()
    .should("contain", formData.gsLessonPlanVersionId);
  cy.wait(2000);

  cy.xpath(
    "//div[@id='repMethodologyVersionId']"
  )
    .click()
    .wait(100)
    .xpath(`//li[@title='${formData.repMethodologyVersionId}']`)
    .should("have.text", formData.repMethodologyVersionId)
    .click();

  cy.xpath(
    "//div[@id='remoteLessonPlanVersionId']"
  )
    .click()
    .wait(100)
    .xpath(`//li[@title='${formData.remoteLessonPlanVersionId}']`)
    .click()
    .should("not.be.empty")
    .should("have.text", formData.remoteLessonPlanVersionId);
  cy.wait(2000);

  cy.xpath(
    "//div[@id='digitalLessonPlanVersionId']"
  )
    .click()
    .wait(100)
    .xpath(`//li[@title='${formData.digitalLessonPlanVersionId}']`)
    .click()
    .should("not.be.empty")
    .should("have.text", formData.digitalLessonPlanVersionId);

  cy.xpath("//span[@class='ant-checkbox']//input[@value='2']")
    .check()
    .should("be.checked")
    .wait(100);
  //.xpath("//li[@title='ActivityRemote-13796']")
  //.click();
  cy.wait(2000);

  cy.xpath("//span[@class='ant-checkbox']//input[@value='1']")
    .check()
    .should("be.checked")
    .wait(100);
  //.xpath("//li[@title='ActivityRemote-13796']")
  //.click();

  cy.xpath(
    "//div[@id='billingDay']"
  )
    .click()
    .wait(100)
    .xpath(`//li[@title='${formData.billingDay}']`)
    .click()
    .should("not.be.empty");
  cy.wait(2000);

  cy.xpath(
    "//div[@id='billingPeriod']"
  )
    //.xpath("//div[@id='billingPeriod']//div[contains(@role,'combobox')]")
    .click()
    .wait(100)
    .xpath(`(//li[@title='${formData.billingPeriod}'][text()='${formData.billingPeriod}'])[2]`)
    .click()
    .should("not.be.empty");

  cy.xpath(
    "//div[@id='billingStartDay']"
  )
    .should("be.visible")
    .click()
    .wait(100)
    .xpath(`(//li[@title='${formData.billingStartDay}'][normalize-space()='${formData.billingStartDay}'])[3]`)
    .click()
    .should("not.be.empty");

  cy.xpath(
    "//div[@id='billingStartMonth']"
  )
    .should("be.visible")
    .click()
    .wait(100)
    .xpath(`//li[@title='${formData.billingStartMonth}']`)
    .click()
    .should("not.be.empty");

  cy.xpath("//input[@id='enableCodeLogin']")
    .check()
    .should("be.checked")
    .wait(100);
  cy.wait(2000);

  cy.xpath("//input[@value='true'][@type='radio'][@class='ant-radio-input']")
    .click()
    .should("be.checked")
    .wait(1000);
  cy.pause();
}

export function submitAddNewRegionForm() {
  cy.xpath("//button[@type='submit']").should("be.visible").click().wait(3000);
}

export function findRegion(regionId, data) {
  cy.xpath("//input[@placeholder='Search using Region Name']")
    .type(data.name)
    .wait(100);

  cy.xpath("//span[@class='ant-input-suffix']").click().wait(2000);

  // cy.xpath("//span[contains(., 'Anjali automation region')]").click();
  // findRegion(this.data.name)
  cy.wait(100);
  cy
  .xpath("//a//span[contains(., '"+data.name+"')]")
//  .xpath("//a//span[text()='Anjali automation region']")
    .wait(1000)
    .should("exist")
    // .should("contain", `${data.name}`)
    .click()
    .wait(4000);

  cy.xpath(
    `//div[@class='material-order-email']//div[contains(text(),'${data.materialOrderEmail}')]`
  )
    .wait(1000)
    .should("exist")
    .should("have.text", data.materialOrderEmail);
}

export function ConfirmRegionDeleted(region) {
  cy.xpath("//input[@placeholder='Search using Region Name']")
    .type(Cypress.env('regionName'))
    .wait(100);

  cy.xpath("//span[@class='ant-input-suffix']").click().wait(4000);

  cy.xpath(`//a//span`).should("not.exist").wait(4000);
}

export function navigateToNextPage() {
  cy.xpath("//li[@title='Next Page']//a").click();
}

export function navigateToBackPage() {
  cy.xpath("//li[@title='Previous Page']//a").click();
}

export function resetSupportRequestDate(date) {
  cy.xpath("//i[@aria-label='icon: calendar']//*[name()='svg']").click();
  cy.wait(4000);
  // cy.xpath("//i[@aria-label='icon: calendar']//*[name()='svg']").click();
  // cy.wait(4000);
  cy.xpath("//div[@class='ant-calendar']//input[contains(@placeholder,'Select date')]").clear().type(date);
  submitAddNewRegionForm();
}

export function editRegion() {
  cy.xpath("//i[@title='Edit region']//*[name()='svg']").click();
  let date = '05/16';
  resetSupportRequestDate(date);
  submitAddNewRegionForm();
}

export default {
  openRegionPage,
  openAddNewRegionPage,
  fillTheAddNewRegionForm,
  submitAddNewRegionForm,
  findRegion,
  navigateToNextPage,
  navigateToBackPage
};
