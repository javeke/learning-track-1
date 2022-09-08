import { Component, Vue } from 'vue-property-decorator';
import { Dictionary } from 'vue-router/types/router';
import DashboardFooter from '@/components/dashboard-footer';
import DashboardSidebar from '@/components/dashboard-sidebar';
import DashboardTitlebar from '@/components/dashboard-titlebar';

@Component({
  components: {
    DashboardFooter,
    DashboardTitlebar,
    DashboardSidebar
  },
  name: 'dashboard',
})
class DashboardLayout extends Vue {
  // --------------------------------------------------------------------------
  // [Private] Fields
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // [Public] Constructor
  // --------------------------------------------------------------------------

  constructor() {
    super();
  }

  // --------------------------------------------------------------------------
  // [Public] Accessors
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // [Public] Methods
  // --------------------------------------------------------------------------

  public async navigate(path: string, params?: Dictionary<string>) {
    await this.$router.push({ path, params });
  }

  // --------------------------------------------------------------------------
  // [Private] Event Handlers
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // [Private] Methods
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // [Private] Lifecycle Hooks
  // --------------------------------------------------------------------------

  private mounted() {
    // TODO: stuff to do when this component loads.

  }
}

export {
  DashboardLayout as default,
  DashboardLayout,
};
