<script>
export default {
  name: 'OrgListItem',
  props: {
    login: String,
    avatar: String,
    description: String,
  },
};
</script>

<template>
  <li class="border-t py-6 flex">
    <router-link
      :to="`/org/${login}/details`"
      class="flex"
    >
      <img
        :src="avatar"
        :alt="`avatar for ${login}`"
        class="h-5 w-5 rounded-full"
      >
    </router-link>
    <div class="ml-2">
      <router-link
        :to="`/org/${login}/details`"
        class="flex"
      >
        <div class="text-github-blue text-lg hover:underline leading-tight">{{ login }}</div>
      </router-link>
      <div
        v-if="description"
        class="text-sm"
      >{{ description }}</div>
    </div>
  </li>
</template>
