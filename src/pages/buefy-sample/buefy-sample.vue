<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { RequireVue } from '@/modules/core/constants';

const {
  BDropdown,
  BDropdownItem,
  // tslint:disable-next-line:no-var-requires
} = require('buefy/dist/components/dropdown') as RequireVue;
// tslint:disable-next-line:no-var-requires
const { BIcon } = require('buefy/dist/components/icon') as RequireVue;

@Component({ components: { BDropdown, BDropdownItem, BIcon } })
export default class extends Vue {
  private readonly activeStep = 2;
}
</script>

<template>
  <div class="[ text-center ]">
    <b-breadcrumb>
      <b-breadcrumb-item tag='router-link' to="/">Home</b-breadcrumb-item>
      <b-breadcrumb-item tag='router-link' to="/twitter">Twitter Clone</b-breadcrumb-item>
    </b-breadcrumb>

    <b-steps v-model="activeStep">
      <b-step-item label="Golgo 13">
        Golgo 13
      </b-step-item>
      <b-step-item label="Bleach">
        Bleach
      </b-step-item>
      <b-step-item label="Naruto">
        Naruto
      </b-step-item>
      <b-step-item label="One Piece">
        One Piece
      </b-step-item>
    </b-steps>

    <b-dropdown aria-role="list">
      <button class="button" slot="trigger" slot-scope="{ active }">
        <span>Click me!</span>
        <BIcon pack="fas" :icon="active ? 'chevron-up' : 'chevron-down'" />
      </button>

      <b-dropdown-item aria-role="listitem">Action</b-dropdown-item>
      <b-dropdown-item aria-role="listitem">Another action</b-dropdown-item>
      <b-dropdown-item aria-role="listitem">Something else</b-dropdown-item>
    </b-dropdown>
  </div>
</template>