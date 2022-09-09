<style scoped lang="scss" src="./dashboard-titlebar.scss"></style>
<script lang="ts" src="./dashboard-titlebar.ts"></script>
<template>
  <div class="px-8 py-4 text-white bg-typography-secondary">
    <div class="flex gap-6 items-center">
      <div class="md:hidden order-1">
        <button @click="openSidebar" class="flex items-center justify-center">
          <b-icon icon="bars" size="is-large" />
        </button>
      </div>
      <img
        class="w-10 h-full order-3 md:order-1"
        src="../../assets/logo/baccano.png"
        alt="Logo"
      />
      <h1 class="text-lg md:text-3xl m-auto order-2">Bakayarou Dashboard</h1>
    </div>

    <b-modal v-model="sidebarToggle" class="md:hidden">
      <nav class="flex-1 flex items-center justify-center">
        <ul class="flex flex-col items-center justify-center gap-10">
          <li>
            <a href="/" class="text-2xl font-bold text-white">Home</a>
          </li>
          <li>
            <a href="/twitter" class="text-2xl font-bold text-white">Twitter</a>
          </li>
          <li>
            <a href="/home" class="text-2xl font-bold text-white">Dashboard</a>
          </li>
        </ul>
      </nav>
    </b-modal>
  </div>
</template>