import { Component, Vue } from 'vue-property-decorator';
import { AppStore } from '@/store/app';
import { Transaction } from '@/types';

@Component({
  components: {},
  name: 'home',
})
class Home extends Vue {
  // --------------------------------------------------------------------------
  // Fields
  // --------------------------------------------------------------------------

  private isAddingTransaction = false;
  private isUpdatingTransaction = false;
  private newTransaction: Transaction = {
    id: -1, first_name: '', last_name: '', order_price: 0, order_type: '', quantity: 0, stock: ''
  };

  private updateTransaction: Transaction = {
    id: -1, first_name: '', last_name: '', order_price: 0, order_type: '', quantity: 0, stock: ''
  };

  private get transactionData() {
    return AppStore.transactionData;
  }

  // --------------------------------------------------------------------------
  // Constructor
  // --------------------------------------------------------------------------
  constructor() {
    super();
    // TODO: Add loading effect when fetching data
    AppStore.initializeTransactionData();
    this.refreshTransactions();
  }

  // --------------------------------------------------------------------------
  // Accessors
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // Methods
  // --------------------------------------------------------------------------

  private refreshTransactions() {
    AppStore.getTransactions()
      .then((result) => {
        if (!result) {
          throw new Error('Failed to create transaction');
        };
      })
      .catch(() => {
        this.$buefy.toast.open({
          message: 'Connection request failed',
          type: 'is-danger'
        });
      });
  }

  // --------------------------------------------------------------------------
  // Event Handlers
  // --------------------------------------------------------------------------

  private openAddingTransactionModal() {
    this.isAddingTransaction = true;
  }

  private closeAddingTransactionModal() {
    this.isAddingTransaction = false;
  }

  private resetNewTransactionData() {
    this.newTransaction = {
      id: -1, first_name: '', last_name: '', order_price: 0, order_type: '', quantity: 0, stock: ''
    };
  }

  private createTransaction() {
    // TODO: Add loading logic and ui
    let message = 'Transaction created successfully';
    let type = 'is-success';

    AppStore
      .createTransaction(this.newTransaction)
      .then((result) => {
        if (!result) {
          throw new Error('Failed to create transaction');
        }
        this.$buefy.toast.open({
          message,
          type
        });
        this.closeAddingTransactionModal();
        this.resetNewTransactionData();
      })
      .catch(() => {
        message = 'Failed to create transaction';
        type = 'is-danger';
        this.$buefy.toast.open({
          message,
          type
        });
        this.closeAddingTransactionModal();
        this.resetNewTransactionData();
      });
  }

  private openUpdateTransactionModal(transaction: Transaction) {
    this.updateTransaction = { ...transaction };
    this.isUpdatingTransaction = true;
  }

  private closeUpdatingTransactionModal() {
    this.isUpdatingTransaction = false;
  }

  private modifyTransaction() {
    AppStore
      .updateTransaction(this.updateTransaction.id, this.updateTransaction)
      .then((result) => {
        if (!result) {
          throw new Error('Failed to update transaction');
        }
        this.closeUpdatingTransactionModal();
        this.$buefy.toast.open({
          message: 'Transaction updated',
          type: 'is-success'
        });
      })
      .catch(() => {
        this.closeUpdatingTransactionModal();
        this.$buefy.toast.open({
          message: 'Failed to update transaction',
          type: 'is-danger'
        });
      });
  }

  private removeTransaction(transaction: Transaction) {
    this.$buefy.dialog.confirm({
      message: `Are you sure you want to delete transaction ${transaction.id}?`,
      closeOnConfirm: true,
      confirmText: 'Delete',
      type: 'is-dark',
      onConfirm: () => {
        AppStore
          .deleteTransaction(transaction.id)
          .then((result) => {
            if (!result) {
              throw new Error('Failed to delete transaction');
            }

            this.$buefy.toast.open({
              message: 'Transaction deleted',
              type: 'is-success'
            });
          })
          .catch(() => {
            this.$buefy.toast.open({
              message: 'Failed to delete transaction',
              type: 'is-danger'
            });
          });
      }
    });
  }

  // --------------------------------------------------------------------------
  // Lifecycle Hooks
  // --------------------------------------------------------------------------
  public mounted() {
    // TODO: stuff to do when this component loads.
  }
}

export {
  Home as default,
  Home,
};
