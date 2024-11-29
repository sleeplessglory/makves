describe('template spec', () => {
    beforeEach(() => {
        cy.visit(''); //visiting the baseUrl specified in config
    })
    it('loads the page', () => {
        cy.contains(/TensorFlow/i).should('be.visible');
    })
    //set the colour to "light" in Sidebar.tsx before this test!
    it('works correctly in a light mode', () => {
        cy.get('.toggler').should('have.css', 'color', 'rgb(151, 165, 185)');
        cy.get('.toggler').should('have.css', 'background-color', 'rgb(226, 232, 240)');
        cy.get('.toggler').click();
        cy.get('.toggler').should('have.css', 'background-color', 'rgb(255, 255, 255)');
        cy.get('.head-title').should('have.css', 'color', 'rgb(0, 0, 181)');
        for (let i = 0; i < 5; i++) {
            if (i === 0 || i === 1) {
                cy.get(`.bottom-button-${i}`).within(() => {
                    cy.get('span').should('not.have.css', 'color', 'rgb(0, 0, 181)');
                });
                cy.get(`.bottom-button-${i}`).should('not.have.css', 'background-color', 'rgb(240, 242, 255)');
                cy.get(`.bottom-button-${i}`).click();
                cy.get(`.bottom-button-${i}`).should('have.css', 'background-color', 'rgb(240, 242, 255)');
                cy.get(`.bottom-button-${i}`).within(() => {
                    cy.get('span').should('have.css', 'color', 'rgb(0, 0, 181)');
                });
            }
            cy.get(`.top-button-${i}`).within(() => {
                cy.get('span').should('not.have.css', 'color', 'rgb(0, 0, 181)');
            });
            cy.get(`.top-button-${i}`).should('not.have.css', 'background-color', 'rgb(240, 242, 255)');
            cy.get(`.top-button-${i}`).click();
            cy.get(`.top-button-${i}`).should('have.css', 'background-color', 'rgb(240, 242, 255)');
            cy.get(`.top-button-${i}`).within(() => {
                cy.get('span').should('have.css', 'color', 'rgb(0, 0, 181)');
            });
        }
    })
    //set the colour to "dark" in Sidebar.tsx before this test and then remove the comments!
    /*it('works correctly in a dark mode', () => {
        cy.get('.toggler').should('have.css', 'color', 'rgb(240, 242, 255)');
        cy.get('.toggler').should('have.css', 'background-color', 'rgb(75, 89, 102)');
        cy.get('.toggler').click();
        cy.get('.toggler').should('have.css', 'background-color', 'rgb(32, 33, 39)');
        cy.get('.head-title').should('have.css', 'color', 'rgb(59, 130, 246)');
        for (let i = 0; i < 5; i++) {
            if (i === 0 || i === 1) {
                cy.get(`.bottom-button-${i}`).within(() => {
                    cy.get('span').should('have.css', 'color', 'rgb(240, 242, 255)');
                });
                cy.get(`.bottom-button-${i}`).should('not.have.css', 'background-color', 'rgb(57, 58, 63)');
                cy.get(`.bottom-button-${i}`).click();
                cy.get(`.bottom-button-${i}`).should('have.css', 'background-color', 'rgb(57, 58, 63)');
                cy.get(`.bottom-button-${i}`).within(() => {
                    cy.get('span').should('have.css', 'color', 'rgb(240, 242, 255)');
                });
            }
            cy.get(`.top-button-${i}`).within(() => {
                cy.get('span').should('have.css', 'color', 'rgb(240, 242, 255)');
            });
            cy.get(`.top-button-${i}`).should('not.have.css', 'background-color', 'rgb(57, 58, 63)');
            cy.get(`.top-button-${i}`).click();
            cy.get(`.top-button-${i}`).should('have.css', 'background-color', 'rgb(57, 58, 63)');
            cy.get(`.top-button-${i}`).within(() => {
                cy.get('span').should('have.css', 'color', 'rgb(240, 242, 255)');
            });
        }
    })*/
    it('has other correct styles', () => {
        cy.get('.sidebar-container').should('not.have.css', 'width', '100px');
        cy.get('.head-title').should('have.css', 'opacity', '1');
        cy.get('.toggler').click();
        cy.get('.head-title').should('have.css', 'opacity', '0');
        cy.get('.sidebar-container').should('have.css', 'width', '100px');
        cy.get('.head-title').should('have.css', 'font-family', '"Circular Std 2"');
        cy.get('.top-buttons-container').should('have.css', 'gap', '10px');
        cy.get('.top-buttons-container').should('have.css', 'display', 'flex');
        cy.get('.top-buttons-container').should('have.css', 'flex-direction', 'column');
        cy.get('.bottom-buttons-container').should('have.css', 'gap', '10px');
        cy.get('.bottom-buttons-container').should('have.css', 'display', 'flex');
        cy.get('.bottom-buttons-container').should('have.css', 'flex-direction', 'column');
        cy.get('span').should('have.css', 'font-family', '"Circular Std 2"');
    })
})