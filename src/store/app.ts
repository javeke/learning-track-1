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
        alert('Request failed');
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

