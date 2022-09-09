<style scoped lang="scss" src="./home.scss"></style>
<script lang="ts" src="./home.ts">
</script>
<template>
  <div class="p-8">
    <div class="flex flex-col md:flex-row gap-2 items-center">
      <h1 class="text-lg md:text-3xl">Bakayarou Reports</h1>
      <b-button
        label="Add"
        class="md:ml-5 w-full md:w-auto"
        type="is-dark"
        icon-left="plus"
        @click="openAddingTransactionModal"
      />
      <b-button class="ml-auto w-full md:w-auto" @click="refreshTransactions">
        <b-icon icon="sync-alt" />
      </b-button>
    </div>

    <div class="mt-3">
      <b-table :data="transactionData">
        <b-table-column label="Actions" width="100">
          <div class="flex gap-2">
            <b-button>
              <b-icon icon="edit"></b-icon>
            </b-button>
            <b-button>
              <b-icon icon="trash" />
            </b-button>
          </div>
        </b-table-column>
        <b-table-column field="id" label="ID" width="40" numeric v-slot="props">
          {{ props.row.id }}
        </b-table-column>
        <b-table-column field="first_name" label="First Name" v-slot="props">
          {{ props.row.first_name }}
        </b-table-column>
        <b-table-column field="last_name" label="Last Name" v-slot="props">
          {{ props.row.last_name }}
        </b-table-column>
        <b-table-column field="order_type" label="Order Type" v-slot="props">
          <span
            :class="{
              'bg-stock-sell': props.row.order_type === 'SELL',
              'bg-stock-buy': props.row.order_type === 'BUY',
            }"
            class="rounded px-3 py-1 text-white"
          >
            {{ props.row.order_type }}
          </span>
        </b-table-column>
        <b-table-column field="stock" label="Symbol" v-slot="props">
          {{ props.row.stock }}
        </b-table-column>
        <b-table-column
          field="order_price"
          label="Order Price (JMD $)"
          numeric
          v-slot="props"
        >
          {{ props.row.order_price }}
        </b-table-column>
        <b-table-column field="quantity" label="Units" numeric v-slot="props">
          {{ props.row.quantity }}
        </b-table-column>
      </b-table>
    </div>

    <b-modal v-model="isAddingTransaction"> Modal is here </b-modal>
  </div>
</template>