import { getMultiParamModule, MultiParamAction } from '@/modules/core';
import transactionService from '@/services/transaction-service';
import { Transaction } from '@/types';
import { Module, Mutation, VuexModule } from 'vuex-module-decorators';
import store from './index';

const MODULE_NAME = 'App';

@Module({ namespaced: true, name: MODULE_NAME, dynamic: true, store })
class Store extends VuexModule {
  private fooBarVal = '';

  private transactionDataArray: Transaction[] = [];

  // ------------------------------------------------------------------------
  // Getters
  // ------------------------------------------------------------------------

  public get fooBar() {
    return this.fooBarVal;
  }

  public get transactionData() {
    return this.transactionDataArray;
  }

  // ------------------------------------------------------------------------
  // Actions
  // ------------------------------------------------------------------------

  @MultiParamAction()
  public initializeFooBar() {
    this.setFooBar('Hello World');
  }

  @MultiParamAction()
  public resetFooBar() {
    return null;
  }

  @MultiParamAction()
  public setCustomFooBar(value: string) {
    return value;
  }

  @MultiParamAction()
  public initializeTransactionData() {
    this.setTransactionData(
      [
        { 'id': 101, 'first_name': 'Julian', 'last_name': 'Kent', 'order_type': 'SELL', 'stock': 'ONE', 'order_price': 3.02, 'quantity': 40000 },
        { 'id': 102, 'first_name': 'Conner', 'last_name': 'O\'Brien', 'order_type': 'BUY', 'stock': 'WIG', 'order_price': 0.42, 'quantity': 2000 },
      ]
    );
  }

  @MultiParamAction()
  public getTransactions() {
    transactionService
      .getTransactionData()
      .then((serviceResult) => {
        this.setTransactionData(serviceResult.data as Transaction[]);
      })
      .catch((err) => {
        // TODO: handle errors better
        alert('Request failed');
      });
  }

  @MultiParamAction()
  public async createTransaction(transaction: Transaction) {
    return transactionService
      .createTransactionData(transaction)
      .then((serviceResult) => {
        this.transactionDataArray.push(serviceResult.data as Transaction);
        this.setTransactionData(this.transactionDataArray);

        return true;
      })
      .catch((err) => {
        // TODO: handle errors better

        return false;
      });
  }

  @MultiParamAction()
  public async updateTransaction(transactionId: number, updatedTransaction: Transaction) {
    const targetTransactionIndex = this.transactionDataArray.findIndex(transaction => transaction.id === transactionId);

    this.transactionDataArray[targetTransactionIndex] = updatedTransaction;

    this.setTransactionData(this.transactionDataArray);

    return transactionService
      .updateTransaction(transactionId, updatedTransaction)
      .then((serviceResult) => {

        return true;
      })
      .catch((err) => {

        return false;
      });
  }

  @MultiParamAction()
  public async deleteTransaction(transactionId: number) {
    const updatedArray = this.transactionDataArray.filter(transaction => transaction.id !== transactionId);
    this.setTransactionData(updatedArray);

    return transactionService
      .deleteTransaction(transactionId)
      .then((serviceResult) => {

        return true;
      })
      .catch((err) => {

        return false;
      });
  }

  // ------------------------------------------------------------------------
  // Mutations
  // ------------------------------------------------------------------------

  @Mutation
  private setFooBar(value: string) {
    this.fooBarVal = value;
  }

  @Mutation
  private setTransactionData(value: Transaction[]) {
    this.transactionDataArray = value;
  }
}

const app = getMultiParamModule<Store>(Store, MODULE_NAME, store);

export {
  app as AppStore,
};

