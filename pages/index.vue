<template>
  <div>
    <div class="container">
      <div>
        <h1 class="title">
          test-20200113
        </h1>
        <div v-if="count[0]">
          {{ count[0].count }}
        </div>
      </div>
    </div>
    <div class="button">
      <button @click="test">
        たす
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import firebase from 'firebase'
import { db } from '~/plugins/firebase.js'

export default {
  computed: {
    ...mapGetters({ count: 'getCount' })
  },
  created () {
    this.$store.dispatch('setCountRef', db.collection('count'))
  },
  methods: {
    test () {
      const countRef = db.collection('count').doc('count')
      console.log(countRef)
      const increment = firebase.firestore.FieldValue.increment(1)
      countRef.update({ count: increment })
    }
  }
}
</script>
<style>
.container {
  margin: 0 auto;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.button {
  width: 100%;
  text-align: center;
}

.links {
  padding-top: 15px;
}
</style>
