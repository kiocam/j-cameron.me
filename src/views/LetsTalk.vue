<template>
  <core-section id="lets-talk">
    <core-heading>Let's talk.</core-heading>

    <v-col
      cols="12"
      md="5"
      class="mb-4 pr-md-5"
    >
      <core-subheading class="text-uppercase">
        What can I do for you?
      </core-subheading>

      <core-text class="mb-5">
        Don't hesitate to reach out to me! I am available for video call over zoom, google meets, and discord.
        Helping others with their bussiness needs and aiming to make the web a better place is what I strive for everyday.
      </core-text>

      <core-subheading class="text-uppercase mb-3">
        Send me a Message
      </core-subheading>

      <form
        name="new-contact-from"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input
          type="hidden"
          name="form-name"
          value="new-contact-from"
        >
        <v-text-field
          solo-inverted
          flat
          label="Name"
          name="name"
        />

        <v-text-field
          solo-inverted
          flat
          label="Email"
        />

        <v-text-field
          solo-inverted
          flat
          label="Subject"
        />

        <v-textarea
          class="form-control"
          solo-inverted
          flat
          label="Message"
        />

        <v-btn
          type="submit"
          class="ma-0"
          color="primary"
        >
          Contact Me
        </v-btn>
      </form>
    </v-col>

    <v-col
      cols="12"
      md="4"
      class="text-left"
    >
      <core-subheading class="text-uppercase">
        Social Contacts
      </core-subheading>

      <social-contacts />

      <v-list
        class="transparent"
        three-line
      >
        <v-list-item>
          <v-list-item-avatar>
            <v-icon
              class="mr-1"
              color="primary"
              size="35"
            >
              mdi-map-marker
            </v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="primary--text">
              Address
            </v-list-item-title>
            <v-list-item-subtitle>
              {{ schema.basics.location.address }}<br>
              {{ schema.basics.location.city }}, {{ schema.basics.location.postalCode }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-avatar>
            <v-icon
              size="35"
              color="primary"
              class="mr-1"
            >
              mdi-email
            </v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="primary--text">
              Email
            </v-list-item-title>
            <v-list-item-subtitle v-text="schema.basics.email" />
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-avatar>
            <v-icon
              size="35"
              color="primary"
              class="mr-1"
            >
              mdi-phone
            </v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="primary--text">
              Phone
            </v-list-item-title>
            <v-list-item-subtitle v-text="schema.basics.phone" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-col>
    <v-img
      :src="require('@/assets/john-alt.png')"
      contain
      max-width="30vw"
      style="bottom: -20px; right: 0; position: absolute;"
      width="100%"
    />
  </core-section>
</template>

<script>
  // Utilities
  import {
    mapState,
  } from 'vuex'

  export default {
    name: 'LetsTalk',

    components: {
      SocialContacts: () => import('@/components/SocialContacts'),
    },

    computed: {
      ...mapState('app', ['schema']),
    },
  }
</script>
