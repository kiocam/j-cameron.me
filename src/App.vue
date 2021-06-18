<template>
  <v-app>
    <core-drawer />

    <v-main class="overflow-hidden">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
  export default {
    components: {
      CoreDrawer: () => import('@/components/core/Drawer'),
    },
  }
</script>

<style>
  .text-decoration-none {
    text-decoration: none;
  }

  .profile-img {
      width: 450px;
      right: unset !important;
      top: 332px !important;
    }

    .v-timeline {
      z-index: 5;
    }
</style>
