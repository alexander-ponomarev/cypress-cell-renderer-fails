context('Cell renderer fails', () => {
  before(() => {
    cy.visit('http://localhost:4200')
  })

  it('without cell renderer it works', function() {
    cy.get('.without-cell-renderer .ag-cell').contains('TEST VALUE FOR FIRST COLUMN').should('be.visible');
  })

  /* the broser window MUST be minimized, so it's not visible on the screen*/
  it('BUT IF I APPLY ANY CELL RENDERER IT FAILS', function() {
    cy.get('.with-cell-renderer .ag-cell').contains('TEST VALUE FOR FIRST COLUMN').should('be.visible')
  })
})
