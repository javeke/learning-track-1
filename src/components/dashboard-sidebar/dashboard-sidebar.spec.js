import { shallowMount } from '@vue/test-utils';
import DashboardSidebar from './dashboard-sidebar.vue';

describe('DashboardSidebar.vue', () => {
  it('mounts component and check if component exists', () => {
    // Mount component and check if component exists
    const wrapper = shallowMount(DashboardSidebar);

    expect(wrapper.exists()).toEqual(true);
  });
});
