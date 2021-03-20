import Vue from 'vue'

import {
  staticBaseUrl,
  imageBaseUrl
} from '../config';

Vue.mixin({
  data() {
    return {
      staticBaseUrl: staticBaseUrl,
      imageBaseUrl: imageBaseUrl
    }
  },
  computed: {
  },
  methods: {
  }
})