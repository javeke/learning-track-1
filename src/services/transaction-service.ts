import { AxiosResponse } from 'axios';
import { BaseService } from './_base';
import env from '@/config/env';
import { Transaction } from '@/types';

type ServiceResult = {
  success: boolean;
  // tslint:disable-next-line: no-any
  data?: any;
};

enum StatusCode {
  OK = 200,
  CREATED = 201,
  NO_CONTENT = 204,
  NOT_FOUND = 404,
  SERVER_ERROR = 500,
}

class TransactionService extends BaseService {
  // --------------------------------------------------------------------------
  // [Private] Fields
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // [Public] Constructor
  // --------------------------------------------------------------------------
  constructor() {
    super({
      baseURL: env.API_URL
    });
  }

  // --------------------------------------------------------------------------
  // [Public] Accessors
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // [Public] Methods
  // --------------------------------------------------------------------------
  public async postData(payload: string): Promise<ServiceResult> {
    // define custom request options [NB: default config found in @/services/base]
    const options = {};
    const result: ServiceResult = { success: false };

    return this.api
      .post(`<endpoint-name>`, payload, options)
      .then((response: AxiosResponse) => {
        // handle response here
        const { status, data } = response;
        result.success = status === StatusCode.OK;
        result.data = data;

        return result;
      })
      .catch((err) => {
        return result;
      });
  }

  public async getTransactionData(): Promise<ServiceResult> {
    const result: ServiceResult = { success: false };
    const options = {};

    return this.api
      .get('/api/transactions', options)
      .then((response: AxiosResponse) => {

        const { status, data } = response;
        result.success = status === StatusCode.OK;
        result.data = data;

        return result;
      })
      .catch((err) => {

        return result;
      });

  }

  public async createTransactionData(payload: Transaction): Promise<ServiceResult> {
    const result: ServiceResult = { success: false };
    const options = {};

    return this.api.post('/api/transactions', payload, options)
      .then((response: AxiosResponse) => {
        const { status, data } = response;
        result.success = status === StatusCode.CREATED;
        result.data = data;

        return result;
      })
      .catch((err) => {

        return result;
      });
  }

  public async updateTransaction(transactionId: number, updatedTransaction: Transaction): Promise<ServiceResult> {
    const result: ServiceResult = { success: false };
    const options = {};

    return this.api.put(`/api/transactions/${transactionId}`, updatedTransaction, options)
      .then((response: AxiosResponse) => {
        const { status, data } = response;
        result.success = status === StatusCode.OK;
        result.data = data;

        return result;
      })
      .catch((err) => {

        return result;
      });
  }

  public async deleteTransaction(transactionId: number): Promise<ServiceResult> {
    const result: ServiceResult = { success: false };
    const options = {};

    return this.api.delete(`/api/transactions/${transactionId}`, options)
      .then((response: AxiosResponse) => {
        const { status, data } = response;
        result.success = status === StatusCode.NO_CONTENT;
        result.data = data;

        return result;
      })
      .catch((err) => {

        return result;
      });
  }

  // --------------------------------------------------------------------------
  // [Private] Event Handlers
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // [Private] Methods
  // --------------------------------------------------------------------------

}

// ----------------------------------------------------------------------------
// Module Exports
// ----------------------------------------------------------------------------

const service = new TransactionService();

export {
  service as default,
  service as TransactionService,
};
