<script>
import PageHeader from '@/components/PageHeader';
import PageFooter from '@/components/PageFooter';
export default {
  name: 'App',
  components: {
    PageHeader,
    PageFooter,
  },
};
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <page-header />
    <main
      class="flex-grow py-12"
      role="main"
    >
      <router-view />
    </main>
    <page-footer />
  </div>
</template>