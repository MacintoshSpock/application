<template>
  <div class="home">
    <SignUp />
    <h1>{{ User.firstName }}</h1>
  </div>
</template>

<script>
import SignUp from "@/components/SignUp.vue";
import axios from 'axios';

export default {
  name: "GetStarted",
  components: {
    SignUp
  },
  data() {
    return {
      User: {},
      dataFetched: false
    }
  },
  async mounted() {
    // FETCH DATA FROM DB //
    // try {
    //   this.User = await axios.get('http://localhost:3000/')
    //   this.User = this.User.data[0] // transform first object from array
    //   this.dataFetched = true
    // } catch(err) {
    //     console.error(err)
    // }
    
  }
};
</script>
