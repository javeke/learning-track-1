import { Component, Vue } from 'vue-property-decorator';
import { AppStore } from '@/store/app';
import { mapGetters } from 'vuex';
import { Transaction } from '@/types';

@Component({
  components: {},
  computed: {
    ...mapGetters('App', ['transactionData'])
  },
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
    AppStore.getTransactions();
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
      .then(() => {
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
    this.updateTransaction = transaction;
    this.isUpdatingTransaction = true;
  }

  private closeUpdatingTransactionModal() {
    this.isUpdatingTransaction = false;
  }

  private modifyTransaction() {
    AppStore
      .updateTransaction(this.updateTransaction.id, this.updateTransaction)
      .then(() => {
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
      type: "is-dark",
      onConfirm: () => {
        AppStore
          .deleteTransaction(transaction.id)
          .then(() => {
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
