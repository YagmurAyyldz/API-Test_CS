describe('API Check', () => {
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

describe('API Json Check', () => {
    it('Returns JSON', () => {
      cy.request('https://www.getpostman.com/collections/5d9f72679607a60f23af')
        .its('headers')
        .its('content-type')
        .should('include', 'application/json')
    })
  })

  describe('API Getting Item', () => {
      it('Getting Item', () => {
        cy.request('https://www.getpostman.com/collections/5d9f72679607a60f23af')
        .its('body').its('item')        
      })

      it('Getting "installment", "productGroupId", "installmentText" from Item 0', () => {
        cy.request('https://www.getpostman.com/collections/5d9f72679607a60f23af')
        .its('body')
        .its('item')
        .its('0')
        .its('response')
        .its('0')
        .its('body')
        .should('include','"installment": true')
        .should('include', '"productGroupId": 1,')
        .should('include', '"installmentText": Taksit Seçeneği,')
      })
        

      it('Getting Item 1', () => {
        cy.request('https://www.getpostman.com/collections/5d9f72679607a60f23af')
        .its('body')
        .its('item')
        .its('1')
        .its('response')
        .its('0')
        .its('body')       
        .should('include', '"installment": false')
        .should('include', '"installment": true')
      })

      it('Getting Item 2', () => {
        cy.request('https://www.getpostman.com/collections/5d9f72679607a60f23af')
        .its('body').its('item').its('2').its('response').its('0').its('body')
      })

      it('Getting Name', () => {
        cy.request('GET', 'https://www.getpostman.com/collections/5d9f72679607a60f23af', {
            name: 'Ciceksepeti API Test Project',
        })
    })

       
})

//expect(request.body).to.include('email')

