<template>
  <core-section id="what-i-know">
    <abstract-2 />

    <v-col cols="12">
      <v-row justify="space-between">
        <core-heading cols="auto">
          What I know.
        </core-heading>

        <v-col cols="auto">
          <blockquote style="max-width: 230px;">
            <p class="subheading font-weight-light font-italic">
              Click here to get a copy of my resume & cover letter
            </p>
            <footer class="text-center">
              <a color="v-btn v-btn--is-elevated v-btn--has-bg theme--dark v-size--default primary">
                download cv
              </a>
            </footer>
          </blockquote>
        </v-col>
      </v-row>
    </v-col>

    <v-col cols="12">
      <v-row justify="space-around">
        <v-col
          id="my-education"
          cols="12"
          md="3"
          tag="section"
        >
          <h3 class="text-h5 font-weight-medium mb-4 primary--text">
            My Education
          </h3>

          <education-card
            v-for="(degree, i) in schema.education"
            :key="i"
            :value="degree"
          />
        </v-col>

        <v-col
          id="my-skills"
          cols="12"
          md="4"
          tag="section"
        >
          <h3 class="text-h5 font-weight-medium mb-4 primary--text">
            My Skills
          </h3>

          <skill
            v-for="(skill, i) in schema.skills"
            :key="i"
            :value="skill"
          />
        </v-col>
      </v-row>
    </v-col>
  </core-section>
</template>

<script>
  // Utilities
  import {
    mapState,
  } from 'vuex'

  export default {
    name: 'WhatIKnow',

    components: {
      Abstract2: () => import('@/components/Abstract2'),
      EducationCard: () => import('@/components/EducationCard'),
      Skill: () => import('@/components/Skill'),
    },

    computed: {
      ...mapState('app', ['schema']),
    },
  }
</script>
