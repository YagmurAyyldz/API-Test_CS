describe('API', () => {
    it('returns JSON', () => {
      cy.request('https://www.getpostman.com/collections/5d9f72679607a60f23af')
        .its('headers')
        .its('content-type')
        .should('include', 'application/json')
    })
  })

  it('load body items', () => {
    cy.request('https://www.getpostman.com/collections/5d9f72679607a60f23af')
      .its('body').its('item').its(1).its('response').its(0).its('body')
  })
//.its('data').its('products').its(0).its('productGroupId')
