<style scoped lang="scss" src="./home.scss"></style>
<script lang="ts" src="./home.ts"></script>
<template>
  <div class="p-8">
    <div class="flex justify-between items-center">
      <h1 class="text-lg md:text-3xl">Bakayarou Reports</h1>
      <b-button @click="refreshTransactions">
        <b-icon icon="sync-alt" />
      </b-button>
    </div>

    <div class="mt-3">
      <b-table :data="transactionData" :columns="columns"></b-table>
    </div>
    <h1>{{ fooBar }}</h1>
  </div>
</template>