<script>
import {mapActions, mapState} from 'vuex';

export default {
  name: 'Organization',

  created() {
    this.getOrgDetails(this.$route.params.login);
  },
  computed: mapState([
    'orgDetails',
    'noResults',
  ]),
  methods: {
    ...mapActions({
      getOrgDetails: 'getOrgDetails',
    }),
  },
  watch: {
    '$route.params.login'() {
      this.getOrgDetails(this.$route.params.login);
    },
  },
};
</script>

<template>

  <div
    v-if="noResults"
    class="container"
  >
    <h3 class="font-semibold text-2xl">No Results</h3>
    <p>Sorry, no results for that login. Try another.</p>
  </div>
  <div
    v-else
    class="flex container"
  >
    <img
      :src="orgDetails.avatar_url"
      :alt="`avatar for ${orgDetails.company}`"
      class="rounded h-24 w-24 block mr-6"
    >
    <div>
      <div class="text-2xl font-semibold">{{ orgDetails.name }}</div>
      <div v-if="orgDetails.company">{{ orgDetails.company }}</div>
      <div class="text-gray-500 text-sm">{{ orgDetails.description }}</div>

      <a
        class="flex items-center text-xs mt-2 text-gray-700 hover:underline"
        :href="orgDetails.html_url"
        target="_blank"
        rel="noopener"
      >
        <svg
          class="mr-2"
          viewBox="0 0 16 16"
          version="1.1"
          width="16"
          height="16"
          aria-hidden="true"
        ><path
          fill-rule="evenodd"
          d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"
        /></svg>
        {{ orgDetails.html_url }}
      </a>
    </div>
  </div>

</template>
