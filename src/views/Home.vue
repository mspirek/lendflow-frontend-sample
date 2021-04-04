<script>
import OrgListItem from '@/components/OrgListItem';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Home',
  components: { OrgListItem },
  async created() {
    this.getAllOrgs();
  },
  computed: mapState([
    'allOrgs',
    'apiError',
  ]),
  methods: {
    ...mapActions({
      getAllOrgs: 'getAllOrgs',
    }),
  },
};
</script>

<template>
  <div
    v-if="apiError"
    class="container"
  >
    <h3 class="font-semibold text-2xl">API Error</h3>
    <p>Sorry, there was an error requesting data. Refresh this page to try again.</p>
  </div>
  <div
    v-else
    class="container"
  >
    <ul>
      <org-list-item
        v-for="(org, idx) in allOrgs"
        :key="idx"
        :login="org.login"
        :avatar="org.avatar_url"
        :description="org.description"
      />
    </ul>
  </div>
</template>
