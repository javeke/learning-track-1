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
        data-testid="add-transaction-btn"
        @click="openAddingTransactionModal"
      />
      <b-button
        class="ml-auto w-full md:w-auto"
        data-testid="refresh-transactions-btn"
        @click="refreshTransactions"
      >
        <b-icon icon="sync-alt" />
      </b-button>
    </div>

    <div class="mt-3" data-testid="transaction-table">
      <b-table :data="transactionData">
        <b-table-column label="Actions" width="100" v-slot="props">
          <div class="flex gap-2">
            <b-button
              size="is-small"
              @click="openUpdateTransactionModal(props.row)"
              :data-testid="`update-transaction-btn-${props.row.id}`"
              type="is-info"
            >
              <b-icon icon="edit"></b-icon>
            </b-button>
            <b-button
              @click="removeTransaction(props.row)"
              :data-testid="`delete-transaction-btn-${props.row.id}`"
              type="is-danger"
              size="is-small"
            >
              <b-icon icon="trash" />
            </b-button>
          </div>
        </b-table-column>
        <b-table-column field="id" label="ID" width="40" numeric v-slot="props">
          <span :data-testid="`transaction-id-cell-${props.row.id}`">{{
            props.row.id
          }}</span>
        </b-table-column>
        <b-table-column field="first_name" label="First Name" v-slot="props">
          {{ props.row.first_name }}
        </b-table-column>
        <b-table-column field="last_name" label="Last Name" v-slot="props">
          {{ props.row.last_name }}
        </b-table-column>
        <b-table-column field="order_type" label="Order Type" v-slot="props">
          <span
            :data-testid="`transaction-order-type-cell-${props.row.id}`"
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
          <strong>{{ props.row.stock }}</strong>
        </b-table-column>
        <b-table-column
          field="order_price"
          label="Order Price (JMD$)"
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

    <!-- Create Transaction Modal -->

    <b-modal v-model="isAddingTransaction" :can-cancel="['escape', 'x']">
      <section>
        <form class="bg-white rounded-lg p-5 flex flex-col gap-4">
          <div class="text-center">
            <h3>Create a new transaction</h3>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 md:gap-8">
            <b-field label="First Name" aria-label="First Name">
              <b-input
                data-testid="add-transaction-form-first-name-input"
                placeholder="First Name"
                v-model="newTransaction.first_name"
              ></b-input>
            </b-field>
            <b-field label="Last Name" aria-label="Last Name">
              <b-input
                data-testid="add-transaction-form-last-name-input"
                placeholder="Last Name"
                v-model="newTransaction.last_name"
              ></b-input>
            </b-field>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 md:gap-8">
            <b-field label="Stock Symbol" aria-label="Stock Symbol">
              <b-select
                data-testid="add-transaction-form-stock-select"
                placeholder="Choose a stock"
                aria-placeholder="Choose a stock"
                v-model="newTransaction.stock"
              >
                <option value="ONE" aria-valuetext="ONE">ONE</option>
                <option value="DOLLA" aria-valuetext="DOLLA">DOLLA</option>
                <option value="FESCO" aria-valuetext="FESCO">FESCO</option>
                <option value="WIG" aria-valuetext="WIG">WIG</option>
              </b-select>
            </b-field>
            <b-field label="Order Type" aria-label="Order Type">
              <b-select
                data-testid="add-transaction-form-order-type-select"
                placeholder="Select an order type"
                aria-placeholder="Select an order type"
                v-model="newTransaction.order_type"
              >
                <option aria-valuetext="SELL" value="SELL">SELL</option>
                <option aria-valuetext="BUY" value="BUY">BUY</option>
              </b-select>
            </b-field>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 md:gap-8">
            <b-field label="Order Price" aria-label="Order Price">
              <b-numberinput
                step="0.01"
                min="0"
                data-testid="add-transaction-form-order-price-input"
                aria-minus-label="decrement by 0.01"
                aria-plus-label="increment by 0.01"
                controls-alignment="right"
                controls-position="compact"
                placeholder="Order price per unit"
                type="is-dark"
                v-model="newTransaction.order_price"
              ></b-numberinput>
            </b-field>
            <b-field label="Units" aria-label="Units">
              <b-numberinput
                min="100"
                data-testid="add-transaction-form-units-input"
                controls-alignment="right"
                controls-position="compact"
                placeholder="Number of units"
                type="is-dark"
                v-model="newTransaction.quantity"
              ></b-numberinput>
            </b-field>
          </div>
          <div class="flex items-center justify-center gap-4">
            <b-button
              @click="createTransaction"
              data-testid="add-transaction-form-create-btn"
              type="is-dark"
              class="font-bold"
              >Create</b-button
            >
            <b-button @click="closeAddingTransactionModal">Cancel</b-button>
          </div>
        </form>
      </section>
    </b-modal>

    <!-- Update Transaction Modal -->

    <b-modal v-model="isUpdatingTransaction" :can-cancel="['escape', 'x']">
      <section>
        <form class="bg-white rounded-lg p-5 flex flex-col gap-4">
          <div class="text-center">
            <h3>Update transaction</h3>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 md:gap-8">
            <b-field label="First Name" aria-label="First Name">
              <b-input
                placeholder="First Name"
                data-testid="update-transaction-form-first-name-input"
                v-model="updateTransaction.first_name"
              ></b-input>
            </b-field>
            <b-field label="Last Name" aria-label="Last Name">
              <b-input
                placeholder="Last Name"
                data-testid="update-transaction-form-last-name-input"
                v-model="updateTransaction.last_name"
              ></b-input>
            </b-field>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 md:gap-8">
            <b-field label="Stock Symbol" aria-label="Stock Symbol">
              <b-select
                placeholder="Choose a stock"
                aria-placeholder="Choose a stock"
                data-testid="update-transaction-form-stock-select"
                v-model="updateTransaction.stock"
              >
                <option value="ONE" aria-valuetext="ONE">ONE</option>
                <option value="DOLLA" aria-valuetext="DOLLA">DOLLA</option>
                <option value="FESCO" aria-valuetext="FESCO">FESCO</option>
                <option value="WIG" aria-valuetext="WIG">WIG</option>
              </b-select>
            </b-field>
            <b-field label="Order Type" aria-label="Order Type">
              <b-select
                placeholder="Select an order type"
                aria-placeholder="Select an order type"
                data-testid="update-transaction-form-order-type-select"
                v-model="updateTransaction.order_type"
              >
                <option aria-valuetext="SELL" value="SELL">SELL</option>
                <option aria-valuetext="BUY" value="BUY">BUY</option>
              </b-select>
            </b-field>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 md:gap-8">
            <b-field label="Order Price" aria-label="Order Price">
              <b-numberinput
                step="0.01"
                min="0"
                aria-minus-label="decrement by 0.01"
                aria-plus-label="increment by 0.01"
                controls-alignment="right"
                controls-position="compact"
                placeholder="Order price per unit"
                data-testid="update-transaction-form-order-price-input"
                type="is-dark"
                v-model="updateTransaction.order_price"
              ></b-numberinput>
            </b-field>
            <b-field label="Units" aria-label="Units">
              <b-numberinput
                min="100"
                controls-alignment="right"
                controls-position="compact"
                placeholder="Number of units"
                data-testid="update-transaction-form-units-input"
                type="is-dark"
                v-model="updateTransaction.quantity"
              ></b-numberinput>
            </b-field>
          </div>
          <div class="flex items-center justify-center gap-4">
            <b-button
              @click="modifyTransaction"
              type="is-dark"
              class="font-bold"
              data-testid="update-transaction-form-update-btn"
              >Update</b-button
            >
            <b-button @click="closeUpdatingTransactionModal">Cancel</b-button>
          </div>
        </form>
      </section>
    </b-modal>
  </div>
</template>