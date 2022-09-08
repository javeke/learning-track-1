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

    <div
      v-if="sidebarToggle"
      class="
        fixed
        z-50
        left-0
        top-0
        min-h-screen min-w-full
        bg-backdrop
        flex
        md:hidden
      "
      @click="closeSidebar"
    >
      <nav class="flex-1 flex items-center justify-center">
        <ul class="flex flex-col items-center justify-center gap-10">
          <li>
            <a class="text-2xl font-bold text-typography-secondary">Home</a>
          </li>
          <li>
            <a class="text-2xl font-bold text-typography-secondary">Twitter</a>
          </li>
          <li>
            <a class="text-2xl font-bold text-typography-secondary"
              >Dashboard</a
            >
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>