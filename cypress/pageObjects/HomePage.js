import { BasePage } from "./BasePage";

export class HomePage extends BasePage {
  static get url() {
    return "/#/";
  }
  static get clickOnGrid() {
    return cy.get("#demo-tab-grid");
  }
  static selectableItem(name) {
    return cy.contains('.list-group-item', name);
  }
}

