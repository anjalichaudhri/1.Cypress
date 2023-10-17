class CreateNewRegionPage {
  getName() {
    return cy
      //.get('#name')
      .xpath('//input[@id="name"]')
  }
  getEnglishName() {
    return cy
      //.get('#englishName')
      .xpath('//input[@id="englishName"]')
  }
  getSupportEmail() {
    return cy
      //.get('#supportEmail')
      .xpath('//input[@id="supportEmail"]')
  }
  getMaterialOrderEmail() {
    return cy
    // .get('#materialOrderEmail')
    .xpath('//input[@id="materialOrderEmail"]')
    .type(formData.materialOrderEmail)
  }
  getRegionGroupId() {
    return cy
    //.get("#regionGroupId")
    .xpath(
      "//div[@id='regionGroupId']//div[@class='ant-select-selection__rendered']"
    )
  }
  getPrimaryLanguage() {
    return cy.xpath(
        "//div[@id='primaryLanguage']//div[@class='ant-select-selection__rendered']"
      )
  }
  getClassMaxRadioButton() {
    return cy.xpath("//input[@value='true'][@type='radio'][@class='ant-radio-input']")
  }
  getEnableCodeLoginCheckbox() {
    return cy.xpath("//input[@id='enableCodeLogin']")
  }
  getBillingStartMonth() {
    return cy.xpath(
        "//div[@id='billingStartMonth']//div[contains(@class,'ant-select-selection__rendered')]"
      )
  }
  getBillingStartDay() {
    return cy.xpath(
        "//div[@id='billingStartDay']//div[contains(@class,'ant-select-selection__rendered')]"
      )
  }
  getBillingPeriod() {
    return cy.xpath(
        "//div[@id='billingPeriod']//div[@class='ant-select-selection__rendered']"
      )
  }
  getBillingDay() {
    return cy.xpath(
        "//div[@id='billingDay']//div[@class='ant-select-selection__rendered']"
      )
  }
  getManualRegistrationCheckbox() {
    return cy.xpath("//span[@class='ant-checkbox']//input[@value='1']")
  }
  getGenericRegistrationCheckbox() {
    return cy.xpath("//span[@class='ant-checkbox']//input[@value='2']")
  }
  getDigitalLessonPlanVersionId() {
    return cy.xpath(
        "//div[@id='digitalLessonPlanVersionId']//div[@class='ant-select-selection__rendered']"
      )
  }
  getRemoteLessonPlanVersionId() {
    return cy.xpath(
        "//div[@id='remoteLessonPlanVersionId']//div[@class='ant-select-selection__rendered']"
      )
  }
  getRepMethodologyVersionId() {
    return cy.xpath(
        "//div[@id='repMethodologyVersionId']//div[@class='ant-select-selection__rendered']"
      )
  }
  getGsLessonPlanVersionId() {
    return cy.xpath(
        "//div[@id='gsLessonPlanVersionId']//div[@class='ant-select-selection__rendered']"
      )
  }
  getStatus() {
    return cy.xpath("//div[@id='status']//div[@class='ant-select-selection__rendered']")
  }
  getSelectDate() {
    return cy.xpath("//input[@placeholder='Select date']")
  }
  getCurrency() {
    return cy.xpath("//div[@id='currency']//input[@type='text']")
  }
  getLsVersionGroupId() {
    return cy.xpath(
        "//div[@id='lsVersionGroupId']//div[@class='ant-select-selection__rendered']"
      )    
  }
  getGsVersionGroupId() {
    return cy.xpath(
        "//div[@id='gsVersionGroupId']//div[@class='ant-select-selection__rendered']"
      )    
  }
}

export default CreateNewRegionPage;
