import { shallowMount } from '@vue/test-utils';
import DashboardTitlebar from './dashboard-titlebar.vue';

describe('DashboardTitlebar.vue', () => {
  it('mounts component and check if component exists', () => {
    // Mount component and check if component exists
    const wrapper = shallowMount(DashboardTitlebar, {
      stubs: {
        'b-icon': true,
        'b-modal': true
      }
    });

    expect(wrapper.exists()).toEqual(true);
  });
});
