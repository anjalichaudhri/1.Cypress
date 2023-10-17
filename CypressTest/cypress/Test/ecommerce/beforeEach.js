beforeEach(function () {
  //run once before all the tests in the block
  //data driven testing with fixures
  cy.fixture("cartProducts").then((data) => {
    this.data = data;
  });
});
