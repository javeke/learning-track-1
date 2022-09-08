import { Component, Vue } from 'vue-property-decorator';
import { AppStore } from '@/store/app';
import { Transaction } from '@/types';
import { mapActions, mapGetters } from 'vuex';

@Component({
  components: {},
  computed: {
    ...mapGetters('App', ['fooBar', 'transactionData'])
  },
  name: 'home',
})
class Home extends Vue {
  // --------------------------------------------------------------------------
  // Fields
  // --------------------------------------------------------------------------

  private readonly columns = [
    { field: 'id', label: 'ID', width: '40', numeric: true },
    { field: 'first_name', label: 'First Name' },
    { field: 'last_name', label: 'Last Name' },
    { field: 'role', label: 'Role' },
    { field: 'show', label: 'TV Show' },
    { field: 'rating', label: 'Rating', numeric: true }
  ];

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
    // TODO: Implement this function
    AppStore.getTransactions();
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
