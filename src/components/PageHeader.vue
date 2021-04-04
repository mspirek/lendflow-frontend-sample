<script>
export default {
  name: 'PageHeader',
  data: () => ({
    search: '',
    menuOpen: false,
  }),
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    doSearch() {
      if (!this.search) {
        return;
      }
      this.$router.push(`/org/${this.search}/details`);
      this.search = '';
    },
  },
};
</script>

<template>
  <div class="bg-github-gray text-white py-4 flex items-center justify-center md:justify-start px-4 relative">
    <button
      @click="toggleMenu"
      class="md:hidden absolute left-0 ml-4"
    >s
      <svg
        height="24"
        class="text-white fill-current hover:text-gray-400"
        viewBox="0 0 16 16"
        version="1.1"
        width="24"
        aria-hidden="true"
      ><path
        fill-rule="evenodd"
        d="M1 2.75A.75.75 0 011.75 2h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 2.75zm0 5A.75.75 0 011.75 7h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 7.75zM1.75 12a.75.75 0 100 1.5h12.5a.75.75 0 100-1.5H1.75z"
      /></svg>
    </button>
    <router-link
      to="/"
    >
      <svg
        class="fill-current"
        height="32"
        viewBox="0 0 16 16"
        version="1.1"
        width="32"
        aria-hidden="true"
      ><path
        fill-rule="evenodd"
        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
      /></svg>
    </router-link>
    <form
      @submit.prevent="doSearch"
      class="hidden md:block"
    >
      <input
        type="text"
        v-model="search"
        class="border rounded ml-4 bg-transparent text-gray-800 outline-none focus:bg-white border-gray-600 py-1 px-2 text-sm w-64"
        :class="{'bg-white': search}"
        placeholder="search by login"
      >
    </form>
    <nav
      class="ml-4 hidden md:block"
      role="navigation"
    >
      <router-link to="/">Home</router-link>
    </nav>
    <div
      v-if="menuOpen"
      class="absolute top-0 left-0 bg-github-gray w-full mt-16 p-4 md:hidden"
    >
      <form @submit.prevent="doSearch">
        <input
          type="text"
          v-model="search"
          class="border w-full rounded bg-transparent text-gray-800 outline-none focus:bg-white border-gray-600 py-1 px-2 text-sm"
          :class="{'bg-white': search}"
          placeholder="search by login"
        >
      </form>
      <nav
        class="mt-4"
        role="navigation"
      >
        <router-link to="/">Home</router-link>
      </nav>

    </div>
  </div>

</template>
