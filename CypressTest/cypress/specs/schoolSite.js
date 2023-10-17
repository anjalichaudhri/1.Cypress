///<reference types="cypress"/>
import { loginAsSchoolAdmin } from "../pages/loginPage";
//cypress - Spec i.e. test
describe("visit site", function () {
  it("Visit School Site", function () {
    loginAsSchoolAdmin();
  });
});
