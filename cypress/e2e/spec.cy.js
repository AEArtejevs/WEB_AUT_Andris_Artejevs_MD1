import { HomePage } from "../PageObjects/HomePage"



describe('Selectable Grid Test', () => {
  beforeEach(() => {
    HomePage.visit();
  });

  // Click “Grid”
  it('passes', () => {
    HomePage.clickOnGrid.click();

    // Click - “Two”, “Four”, “Six”, “Eight”
    const itemsToSelect = ['Two', 'Four', 'Six', 'Eight'];
    itemsToSelect.forEach((item) => {
      HomePage.selectableItem(item).click();
    });
    // Validate that “Two”, “Four”, “Six”, “Eight” are highlighted
    itemsToSelect.forEach((item) => {
      HomePage.selectableItem(item).should('have.class', 'active');
    });
    const itemsNotToSelect = ['One', 'Three', 'Five', 'Seven', 'Nine'];
    // Validate that “One”, “Three”, “Five”, “Seven”, “Nine” are not highlighted
    itemsNotToSelect.forEach((item) => {
      HomePage.selectableItem(item).should('not.have.class', 'active');
    });
  })

})