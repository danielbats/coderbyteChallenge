
describe("API Feature", () => {

    it('Scenario: Get areas list - 200 OK', function () {
        cy.getAddress('areas').then(resp => {
            expect(resp.status).to.eq(200)
            expect(resp.body.count).to.eq(272)
        })
    })

    it('Scenario: Get wrong endpoint areas list - 404 Not Found', function () {
        cy.getAddress('areas/1').then(resp => {
            expect(resp.status).to.eq(404)
            expect(resp.body.error).to.eq(404)
        })
    })

    it('Scenario: Get wrong endpoint areas list - 404 Not Found', function () {
        cy.getAddress('competitions/PL').then(resp => {
            expect(resp.status).to.eq(403)
            expect(resp.body.errorCode).to.eq(403)
            expect(resp.body.message).to.eq('The resource you are looking for is restricted and apparently not within your permissions. Please check your subscription.')
        })
    })
});
