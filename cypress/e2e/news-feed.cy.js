describe('news-feed', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('empty-feed', () => {
    let body = cy.get("body");
    body.within(() => {
      cy.get(".navigation-bar").should("exist");
      cy.get(".feed-container").within(() => {
        cy.get("button").should("exist");
        cy.get(".scrollable-box").within(() => {
          cy.get("p.initial-message").should("exist");
          cy.get("p.error-message").should("not.exist");
          cy.get(".news-object").should("not.exist");
        });
      });
    });
  });
})