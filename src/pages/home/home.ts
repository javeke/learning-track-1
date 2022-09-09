import { Component, Vue } from 'vue-property-decorator';
import { AppStore } from '@/store/app';
import { mapGetters } from 'vuex';

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

  // --------------------------------------------------------------------------
  // Constructor
  // --------------------------------------------------------------------------
  constructor() {
    super();
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

  private openAddingTransactionModal() {
    this.isAddingTransaction = true;
  }

  // --------------------------------------------------------------------------
  // Event Handlers
  // --------------------------------------------------------------------------

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
