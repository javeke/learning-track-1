/// <reference types="cypress" />
// @ts-check

describe('Transaction Dashboard ::', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/home');
    cy.intercept({ method: "GET", url: "**/api/transactions" }, { fixture: "transactions.json" });
    cy.intercept({ method: "POST", url: "**/api/transactions" }, { fixture: "new_transaction.json" });
    cy.intercept({ method: "PUT", url: "**/api/transactions/*" }, { fixture: "update_transaction.json" });
    cy.intercept({ method: "DELETE", url: "**/api/transactions/*" });
    cy.get("[data-testid=refresh-transactions-btn]").click();
  });

  it('should allow a user to add a transactions', () => {
    cy.get("[data-testid=add-transaction-btn]").click();

    cy.get("[data-testid=add-transaction-form-first-name-input]").type("Samantha");
    cy.get("[data-testid=add-transaction-form-last-name-input]").type("Grant");
    cy.get("[data-testid=add-transaction-form-stock-select]").select("DOLLA");
    cy.get("[data-testid=add-transaction-form-order-type-select]").select("BUY");
    cy.get("[data-testid=add-transaction-form-order-price-input]").type("23.5");
    cy.get("[data-testid=add-transaction-form-units-input]").type("12000");

    cy.get("[data-testid=add-transaction-form-create-btn]").click();
    cy.wait(1000);

    cy.get("[data-testid=transaction-table]").contains("Samantha");
    cy.get("[data-testid=transaction-table]").contains("Grant");
    cy.get("[data-testid=transaction-table]").contains("DOLLA");
    cy.get("[data-testid=transaction-table]").contains("BUY");
    cy.get("[data-testid=transaction-table]").contains("23.5");
    cy.get("[data-testid=transaction-table]").contains("12000");
  });

  it("should allow a user to delete a transaction", () => {
    const transactionId = 108;
    const transaction = `transaction-id-cell-${transactionId}`;
    const transactionToDelete = "delete-transaction-btn-" + transactionId;
    cy.get(`[data-testid=${transaction}]`).should('exist');


    cy.get(`[data-testid=${transactionToDelete}]`).click();
    cy.contains('button', "Delete").click();
    cy.wait(1000);

    cy.get(transaction).should('not.exist');
  });

  it("should allow a user to update a transaction", () => {
    const transactionId = 108;
    const transactionToUpdate = "update-transaction-btn-" + transactionId;
    cy.get(`[data-testid=transaction-order-type-cell-${transactionId}]`).contains("BUY");

    cy.get(`[data-testid=${transactionToUpdate}]`).click();

    cy.get("[data-testid=update-transaction-form-order-type-select]").select("SELL");
    cy.get("[data-testid=update-transaction-form-update-btn]").click();
    cy.wait(1000);

    cy.get(`[data-testid=transaction-order-type-cell-${transactionId}]`).contains("SELL");
  });

  it('should allow a user to add a transactions on mobile view', () => {
    cy.viewport('iphone-6');

    cy.get("[data-testid=add-transaction-btn]").click();

    cy.get("[data-testid=add-transaction-form-first-name-input]").type("Samantha");
    cy.get("[data-testid=add-transaction-form-last-name-input]").type("Grant");
    cy.get("[data-testid=add-transaction-form-stock-select]").select("DOLLA");
    cy.get("[data-testid=add-transaction-form-order-type-select]").select("BUY");
    cy.get("[data-testid=add-transaction-form-order-price-input]").type("23.5");
    cy.get("[data-testid=add-transaction-form-units-input]").type("12000");

    cy.get("[data-testid=add-transaction-form-create-btn]").click();
    cy.wait(1000);

    cy.get("[data-testid=transaction-table]").contains("Samantha");
    cy.get("[data-testid=transaction-table]").contains("Grant");
    cy.get("[data-testid=transaction-table]").contains("DOLLA");
    cy.get("[data-testid=transaction-table]").contains("BUY");
    cy.get("[data-testid=transaction-table]").contains("23.5");
    cy.get("[data-testid=transaction-table]").contains("12000");
  });

  it("should allow a user to delete a transaction on mobile view", () => {
    cy.viewport('iphone-6');

    const transactionId = 108;
    const transaction = `transaction-id-cell-${transactionId}`;
    const transactionToDelete = "delete-transaction-btn-" + transactionId;
    cy.get(`[data-testid=${transaction}]`).should('exist');


    cy.get(`[data-testid=${transactionToDelete}]`).click();
    cy.contains('button', "Delete").click();
    cy.wait(1000);

    cy.get(transaction).should('not.exist');
  });

  it("should allow a user to update a transaction on mobile view", () => {
    cy.viewport('iphone-6');

    const transactionId = 108;
    const transactionToUpdate = "update-transaction-btn-" + transactionId;
    cy.get(`[data-testid=transaction-order-type-cell-${transactionId}]`).contains("BUY");

    cy.get(`[data-testid=${transactionToUpdate}]`).click();

    cy.get("[data-testid=update-transaction-form-order-type-select]").select("SELL");
    cy.get("[data-testid=update-transaction-form-update-btn]").click();
    cy.wait(1000);

    cy.get(`[data-testid=transaction-order-type-cell-${transactionId}]`).contains("SELL");
  });
});