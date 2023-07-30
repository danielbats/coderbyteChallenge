import elements, { search } from '../support/elements.js';

beforeEach(function() {
    cy.goToWebsite()
})

describe("Take-home Feature", () => {

    it("Search in duckduckgo website", () => {
        cy.get(search.searchInputField).clear().type('The dev-friendly football API')
        cy.get(search.searchButton).should('be.visible').click()
        cy.get(search.searchResults).contains(Cypress.env('footballOrgUrl')).click({force:true})
		cy.url().should('contain',Cypress.env('footballOrgUrl'))
        }
    )
})