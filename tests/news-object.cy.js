import NewsObject from '../src/app/news-object';

const testNews = {
  multimedia: ["https://developer.nytimes.com/files/poweredby_nytimes_200a.png?v=1583354208344"],
  title: "This is a test",
  abstract: "This is a test news object, nothing to see here.",
  byline: "By Jorge",
  url: "http://localhost:3000"
};

const soloTestNews = {
  multimedia: [],
  title: "This is a test",
  abstract: "This is a test news object, nothing to see here.",
  byline: "By Jorge",
  url: "http://localhost:3000"
};

const emptyNews = {};

const breakageNews = {
  multimedia: null,
  title: undefined,
  abstract: false,
  byline: 0,
  url: ""
};

const noURl = {
  multimedia: [],
  title: "test",
  abstract: "test news",
  byline: "",
  url: ""
};

const noText = {
  multimedia: [],
  title: "",
  abstract: "",
  byline: "?",
  url: "http://localhost:3000"
};

describe('<NewsObject />', () => {
  it("test render", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<NewsObject news={testNews}/>);
    cy.get(".news-object").within(() => {
      cy.get(".news-image").should("exist");
      cy.get(".news-details").should("exist");
      cy.get(".solo-news-details").should("not.exist");
    });
  });

  it("solo test render", () => {
    cy.mount(<NewsObject news={soloTestNews}/>);
    cy.get(".news-object").within(() => {
      cy.get(".news-image").should("not.exist");
      cy.get(".news-details").should("not.exist");
      cy.get(".solo-news-details").should("exist");
    });
  });

  it("empty test", () => {
    cy.mount(<NewsObject news={emptyNews}/>);
    cy.get(".news-object").within(() => {
      cy.get(".news-image").should("not.exist");
      cy.get(".news-details").should("not.exist");
      cy.get(".solo-news-details").should("not.exist");
    });
  });

  it("breakage test", () => {
    cy.mount(<NewsObject news={breakageNews}/>);
    cy.get(".news-object").within(() => {
      cy.get(".news-image").should("not.exist");
      cy.get(".news-details").should("not.exist");
      cy.get(".solo-news-details").should("not.exist");
    });
  });

  it("no url", () => {
    cy.mount(<NewsObject news={noURl}/>);
    cy.get(".news-object").within(() => {
      cy.get(".news-image").should("not.exist");
      cy.get(".news-details").should("not.exist");
      cy.get(".solo-news-details").should("not.exist");
    });
  });

  it("no text", () => {
    cy.mount(<NewsObject news={noText}/>);
    cy.get(".news-object").within(() => {
      cy.get(".news-image").should("not.exist");
      cy.get(".news-details").should("not.exist");
      cy.get(".solo-news-details").should("not.exist");
    });
  });
})