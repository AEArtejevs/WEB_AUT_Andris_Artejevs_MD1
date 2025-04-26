export class BasePage {
  // Open https://demoqa.com/selectable
  static visit() {
    return cy.visit('https://demoqa.com/selectable')
  }
}