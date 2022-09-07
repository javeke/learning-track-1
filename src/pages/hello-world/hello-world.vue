<style lang="scss" src="./hello-world.scss"></style>
<script lang="ts" src="./hello-world.ts"></script>
<template>
  <div class="[ hello-world ][ grid ]">
    <h1 class="[ text-center ]">Vue Starter Project</h1>
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png"
      class="w-170px mx-auto mt-2rem"
    />
    <div class="grid grid-cols-2 mt-4">
      <div class="text-right pr-2 text-typography-light border-r border-solid border-a0aec0">
        powered
        <br />by
      </div>
      <div class="text-left pl-2 text-1.8rem">
        <a class="no-underline visited:no-underline active:no-underline link:no-underline text-typography-success visited:text-typography-success active:text-typography-success link:text-typography-success hover:text-white" target="_blank" href="https://www.npmjs.com/package/rdvue">rdvue</a>
      </div>
    </div>
    <div class="[ grid ][ grid-cols-2 p-8 pt-16 max-w-1200px mt-0 mx-auto grid-flow-col 800px:grid-cols-1 800px:grid-flow-row ]">
      <div class="text-0.9rem text-left">
        <h3 class="mb-2">Summary</h3>
        <span class="leading-6">
          The rdvue cli tool was created as a way to automate many of the
          processes that go into building SPAs (Single Page Applications) and
          setting consistencies between projects, shortenening the learning
          curve for developers per project. This VueJS project is scaffolded
          using predetermined best-practice structures, dependencies, meta
          tooling for consistent coding standards and automatic unit test
          generation.
        </span>
      </div>
      <div class="text-0.9rem text-left ml-8 800px:mt-8 800px:ml-0 features">
        <h3 class="mb-2">Features Included</h3>
        <ul class="[ ml-4 ] list-none">
          <li class="leading-6 before:content-square before:text-typography-success before:font-bold before:inline-block before:w-1em before:ml-n1em">
            vue-router
            <span class="text-typography-light">-</span>
            <span class="desc">
              in-app page navigation (<a hover:text-white class="no-underline visited:no-underline active:no-underline link:no-underline text-typography-success visited:text-typography-success active:text-typography-success link:text-typography-success hover:text-white" href="https://router.vuejs.org/"
                >read more</a
              >)
            </span>
          </li>
          <li class="leading-6 before:content-square before:text-typography-success before:font-bold before:inline-block before:w-1em before:ml-n1em">
            vuex
            <span class="text-typography-light">-</span>
            <span class="desc">
              state management for vue (<a hover:text-white class="no-underline visited:no-underline active:no-underline link:no-underline text-typography-success visited:text-typography-success active:text-typography-success link:text-typography-success hover:text-white" href="https://vuex.vuejs.org/"
                >read more</a
              >)
            </span>
          </li>
          <li class="leading-6 before:content-square before:text-typography-success before:font-bold before:inline-block before:w-1em before:ml-n1em">
            sass
            <span class="text-typography-light">-</span>
            <span class="desc">
              css extension library (<a hover:text-white class="no-underline visited:no-underline active:no-underline link:no-underline text-typography-success visited:text-typography-success active:text-typography-success link:text-typography-success hover:text-white" href="https://sass-lang.com/"
                >read more</a
              >)
            </span>
          </li>
          <li class="leading-6 before:content-square before:text-typography-success before:font-bold before:inline-block before:w-1em before:ml-n1em">
            tailwind
            <span class="text-typography-light">-</span>
            <span class="desc">
              css framework (<a hover:text-white class="no-underline visited:no-underline active:no-underline link:no-underline text-typography-success visited:text-typography-success active:text-typography-success link:text-typography-success hover:text-white" href="https://tailwindcss.com/">read more</a>)
            </span>
          </li>
          <li class="leading-6 before:content-square before:text-typography-success before:font-bold before:inline-block before:w-1em before:ml-n1em">
            typescript
            <span class="text-typography-light">-</span>
            <span class="desc">
              typechecking for javascript (<a hover:text-white class="no-underline visited:no-underline active:no-underline link:no-underline text-typography-success visited:text-typography-success active:text-typography-success link:text-typography-success hover:text-white"
                href="https://www.typescriptlang.org/"
                >read more</a
              >)
            </span>
          </li>
          <li class="leading-6 before:content-square before:text-typography-success before:font-bold before:inline-block before:w-1em before:ml-n1em">
            axios
            <span class="text-typography-light">-</span>
            <span class="desc">
              promise based http client for browser and node (<a hover:text-white class="no-underline visited:no-underline active:no-underline link:no-underline text-typography-success visited:text-typography-success active:text-typography-success link:text-typography-success hover:text-white"
                href="https://github.com/axios/axios/"
                >read more</a
              >)
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>