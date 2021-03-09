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

describe('API Json Content Check', () => {
    it('Returns JSON', () => {
      cy.request('https://www.getpostman.com/collections/5d9f72679607a60f23af')
        .its('headers')
        .its('content-type')
        .should('include', 'application/json')
    })

    it('Getting Name', () => {
      cy.request('GET', 'https://www.getpostman.com/collections/5d9f72679607a60f23af', {
          name: 'Ciceksepeti API Test Project',
      })
    })
  })

describe('API Getting Items', () => {
      it('Getting Items', () => {
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
        .should('include', '"installmentText":').should('not.be.empty')

        cy.log('If installment:true then installmentText can not be empty and productGroupId should be 1');
      })
      
      it('Getting "installment", "productGroupId", "installmentText" from Item 1', () => {
        if( cy.request('https://www.getpostman.com/collections/5d9f72679607a60f23af')
        .its('body')
        .its('item')
        .its('1')
        .its('response')
        .its('0')
        .its('body')       
        .should('include', '"installment": true')
        )
        {
        cy.request('https://www.getpostman.com/collections/5d9f72679607a60f23af')
        .its('body')
        .its('item')
        .its('1')
        .its('response')
        .its('0')
        .its('body')       
        .should('include', '"installment": true')
        .should('include', '"installmentText":').should('not.be.empty')
        .should('include', '"productGroupId":').should('not.be.empty')

        cy.log('If installment:true then installmentText can not be empty and productGroupId should be 1.');
        }

        else( cy.request('https://www.getpostman.com/collections/5d9f72679607a60f23af')
        .its('body')
        .its('item')
        .its('1')
        .its('response')
        .its('0')
        .its('body')       
        .should('include', '"installment": false')
        );
        {
        cy.request('https://www.getpostman.com/collections/5d9f72679607a60f23af')
        .its('body')
        .its('item')
        .its('1')
        .its('response')
        .its('0')
        .its('body')       
        .should('include','"installment": false')
        .should('include', '"productGroupId": 2,')
        .should('include', '"installmentText":').should('not.be.empty')

        cy.log('If installment:false then installmentText should be empty and productGroupId should be 2.');
        }
      })

      it('Getting Item 2 ,status is 500', () => {
        cy.request('https://www.getpostman.com/collections/5d9f72679607a60f23af')
        .its('body')
        .its('item')
        .its('2')
        .its('response')
        .its('0')
        .its('body').should('be.empty')

        cy.log('There is no product, status is 500.')
      })     
})