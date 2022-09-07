import { shallowMount } from '@vue/test-utils';
import TwitterFooter from './twitter-footer.vue';

describe('TwitterFooter.vue', () => {
  it('mounts component and check if component exists', () => {
    // Mount component and check if component exists
    const wrapper = shallowMount(TwitterFooter);

    expect(wrapper.exists()).toEqual(true);
  });
});
