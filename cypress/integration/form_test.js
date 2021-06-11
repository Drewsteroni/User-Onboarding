describe('Basic Check', () => {
    it('checks')
})

describe ('User Onboarding Tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it('name check', () => {
        cy.get("input[name='name']")
        .should('have.value', "")
        .type('Drew')
        .should('have.value', "Drew")
    })
    it('email and password input', () => {
        cy.get('input[name="email"]')
        .type('yonkers@wassup.com')
        cy.get('input[name="password"]')
        .type('drowssap')
    })
    it('terms of service check', () => {
        cy.get('[type="checkbox"]').check()
        cy.get('input[name="tos"]').should('be.enabled')
       
    })
})

describe('validation', () => {
    it('name validation', () => {
        cy.get('#name')
        .should('have.text', '')
        cy.get('input[type=submit]')
        .should('be.disabled')
    })
})
