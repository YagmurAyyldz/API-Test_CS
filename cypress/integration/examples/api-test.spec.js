describe('API', () => {
    it('check'), () => {
        cy.request('https://www.getpostman.com/collections/5d9f72679607a60f23af').should(
            (response) => {
            expect((response).status).to.eq(200)
            expect(response.body)
            .to.have.property('length')
            .and.be.oneOf([500, 501])
            expect(response).to.have.property('headers')
            expect(response).to.have.property('duration')
        },
    )}
})  

describe('API2', () => {
    it('returns JSON', () => {
      cy.request('https://www.getpostman.com/collections/5d9f72679607a60f23af')
        .its('headers')
        .its('content-type')
        .should('include', 'application/json')
    })
  })

  describe('API3', () => {
      it('detail', () => {
          // first, let's find out the userId of the first user we have
        cy.request('https://www.getpostman.com/collections/5d9f72679607a60f23af')
        .its('body') // yields the response object
         // yields the first element of the returned list
        // the above two commands its('body').its('0')
        // can be written as its('body.0')
        // if you do not care about TypeScript checks
      })
  })
  