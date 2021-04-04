<script>
export default {
  name: 'PageFooter',
  data: () => ({
    leftLinks: [
      {
        label: 'Terms',
        url: 'https://docs.github.com/en/github/site-policy/github-terms-of-service',
      },
      {
        label: 'Privacy',
        url: 'https://docs.github.com/en/github/site-policy/github-privacy-statement',
      },
      {
        label: 'Security',
        url: 'https://github.com/security',
      },
      {
        label: 'Status',
        url: 'https://www.githubstatus.com/',
      },
      {
        label: 'Docs',
        url: 'https://docs.github.com/',
      },
    ],
    rightLinks: [
      {
        label: 'Contact GitHub',
        url: 'https://support.github.com/',
      },
      {
        label: 'Pricing',
        url: 'https://github.com/pricing',
      },
      {
        label: 'API',
        url: 'https://services.github.com/',
      },
      {
        label: 'Blog',
        url: 'https://github.blog/',
      },
      {
        label: 'About',
        url: 'https://github.com/about',
      },
    ],
  }),
};
</script>

<template>
  <div class="container border-t text-xs text-center flex flex-col md:flex-row justify-between items-center py-8">
    <ul class="flex py-1">
      <li class="px-2 text-gray-500">&copy; {{ new Date().getFullYear() }} Mark Spirek</li>
      <li
        v-for="(link, idx) in leftLinks"
        :key="idx"
        class="px-2"
      > <a
        :href="link.url"
        class="text-github-blue"
        target="_blank"
        rel="noopener"
      >{{ link.label }}</a></li>
    </ul>
    <router-link
      class="hidden md:block"
      to="/"
    >
      <svg
        class="text-gray-300 hover:text-gray-400 fill-current h-6 w-6"
        height="32"
        viewBox="0 0 16 16"
        version="1.1"
        width="32"
        aria-hidden="true"
      ><path
        fill-rule="evenodd"
        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
      /></svg></router-link>

    <ul class="flex  py-1">
      <li
        v-for="(link, idx) in rightLinks"
        :key="idx"
        class="px-2"
      > <a
        :href="link.url"
        class="text-github-blue hover:underline"
        target="_blank"
        rel="noopener"
      >{{ link.label }}</a></li>
    </ul>
  </div>
</template>
