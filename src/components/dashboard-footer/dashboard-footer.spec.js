import { shallowMount } from '@vue/test-utils';
import DashboardFooter from './dashboard-footer.vue';

describe('DashboardFooter.vue', () => {
  it('mounts component and check if component exists', () => {
    // Mount component and check if component exists
    const wrapper = shallowMount(DashboardFooter);

    expect(wrapper.exists()).toEqual(true);
  });
});
