<style scoped lang="scss" src="./dashboard-sidebar.scss"></style>
<script lang="ts" src="./dashboard-sidebar.ts"></script>
<template>
  <div class="border-r border-typography-light h-full">
    <nav class="p-8 hidden md:block">
      <ul class="flex flex-col gap-4">
        <li>
          <a
            href="/"
            class="
              text-typography-primary
              hover:text-twitter-light hover:bg-typography-primary
              rounded
              px-4
              py-2
              font-bold
            "
            >Home</a
          >
        </li>
        <li>
          <a
            href="/twitter"
            class="
              text-typography-primary
              hover:text-twitter-light hover:bg-typography-primary
              rounded
              px-4
              py-2
              font-bold
            "
            >Twitter</a
          >
        </li>
        <li>
          <a
            href="/home"
            class="
              text-typography-primary
              hover:text-twitter-light hover:bg-typography-primary
              rounded
              px-4
              py-2
              font-bold
            "
            >Dashboard</a
          >
        </li>
      </ul>
    </nav>
  </div>
</template>