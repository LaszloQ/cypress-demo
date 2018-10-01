
  describe( "Login", ( ) => {
    beforeEach(( ) => {
      return cy.visit( "" )
    });


    it( "will fail if the credentials are invalid", ( ) => {
      cy.get( ".login" ).click( )
      cy.get( "#email" )
        .type( "laszlo.kiss@fortech.ro" )
      cy.get( "#passwd" )
        .type( "Fortech1!" )
      cy.get( "#SubmitLogin" ).click( )
      cy.get( "h1 + .alert-danger" ).should( "be.visible" )
    });

  });
