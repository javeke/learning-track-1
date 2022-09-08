<style scoped lang="scss" src="./dashboard.scss"></style>
<script lang="ts" src="./dashboard.ts">
</script>
<template>
  <div
    class="
      [
      grid grid-rows-dashboard-layout-lg grid-cols-dashboard-layout-lg
      bg-white
      ]
    "
  >
    <!-- Sample layout change -->
    <div class="col-span-2">
      <dashboard-titlebar />
    </div>

    <div>
      <dashboard-sidebar />
    </div>

    <!-- Body -->
    <div class="[ grid ]">
      <transition name="fade">
        <router-view />
      </transition>
    </div>

    <!-- Footer -->
    <div class="col-span-2">
      <dashboard-footer />
    </div>
  </div>
</template>