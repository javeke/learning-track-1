<style scoped lang="scss" src="./simple.scss"></style>
<script lang="ts" src="./simple.ts">
</script>
<template>
  <div class="[ grid grid-rows-landing-layout bg-white ]">
    <!-- Sample layout change -->
    <!-- <div>Adding Header to my layout</div> -->

    <!-- Body -->
    <div class="[ grid ]">
      <transition name="fade">
        <router-view />
      </transition>
    </div>

    <!-- Footer -->
    <div class="py-4 px-8">
      <div
        class="
          flex flex-wrap
          items-center
          justify-center
          gap-2
          md:gap-4
          text-xs
        "
      >
        <span><a class="no-underline text-twitter-subtext">About</a></span>
        <span
          ><a class="no-underline text-twitter-subtext">Help Center</a></span
        >
        <span
          ><a class="no-underline text-twitter-subtext"
            >Terms of Service</a
          ></span
        >
        <span
          ><a class="no-underline text-twitter-subtext">Privacy Policy</a></span
        >
        <span
          ><a class="no-underline text-twitter-subtext">Cookie Policy</a></span
        >
        <span
          ><a class="no-underline text-twitter-subtext">Accessibility</a></span
        >
        <span><a class="no-underline text-twitter-subtext">Ads Info</a></span>
        <span><a class="no-underline text-twitter-subtext">Blog</a></span>
        <span><a class="no-underline text-twitter-subtext">Status</a></span>
        <span><a class="no-underline text-twitter-subtext">Careers</a></span>
        <span
          ><a class="no-underline text-twitter-subtext"
            >Brand Resources</a
          ></span
        >
        <span
          ><a class="no-underline text-twitter-subtext">Advertising</a></span
        >
        <span><a class="no-underline text-twitter-subtext">Marketing</a></span>
        <span
          ><a class="no-underline text-twitter-subtext"
            >Twitter for Business</a
          ></span
        >
        <span><a class="no-underline text-twitter-subtext">Developers</a></span>
        <span><a class="no-underline text-twitter-subtext">Directory</a></span>
        <span><a class="no-underline text-twitter-subtext">Settings</a></span>
        <span class="text-center text-twitter-subtext text-xs"
          >&copy; 2022 Twitter Inc.</span
        >
      </div>
    </div>
  </div>
</template>