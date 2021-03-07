describe('todos API', () => {
    it('returns JSON', () => {
      cy.request('https://www.getpostman.com/collections/5d9f72679607a60f23af')
        .its('headers')
        .its('content-type')
        .should('include', 'application/json')
    })
  })

  it('loads 2 items', () => {
    cy.request('https://www.getpostman.com/collections/5d9f72679607a60f23af')
      .its('body')
  })

// it('GET-list user',()=>{
//     cy.request('GET','https://www.getpostman.com/collections/5d9f72679607a60f23af').then((response)=>{
//         expect(response.status).equal(200)
//         expect(response.body).to.not.be.null
//     })
// })
