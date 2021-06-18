<template>
  <core-section id="what-ive-done">
    <abstract-3 />

    <core-heading>What I've done</core-heading>

    <v-col cols="12">
      <v-carousel
        :cycle="false"
        :height="650"
        :show-arrows="false"
        class="elevation-0"
        hide-delimiter-background
      >
        <v-carousel-item
          v-for="(project, i) in projects"
          :key="i"
        >
          <project :value="project" />
        </v-carousel-item>
      </v-carousel>
    </v-col>
  </core-section>
</template>

<script>
  export default {
    name: 'WhatIveDone',

    components: {
      Abstract3: () => import('@/components/Abstract3'),
      Project: () => import('@/components/Project'),
    },

    data: () => ({
      projects: [
        {
          name: 'Glory-MS',
          category: 'Web development / backend api development',
          src: 'gloryms.png',
          date: 'September, 2020',
          tech: 'Vue.js, node.js, StrapiCms, Google Firebase',
          projectInfo: 'Design and devloped a web platform for a private gaming community, where users can register for gaming accounts, view account details via dashboard etc.',
        },
        {
          name: 'Initium Digital',
          category: 'Web Development',
          src: 'initium.png',
          date: 'april, 2020',
          tech: 'Vue.js, Sanity.io, Netlify',
          projectInfo: 'Developed a platform for an upcomming Digital studio, & provided hosting',
        },
      ],
    }),
  }
</script>
