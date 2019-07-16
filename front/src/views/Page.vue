<template>
  <div class="home">
    <!-- <h1>{{ User.firstName }}</h1> -->
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "Page",
  
  data() {
    return {
      Users: {},
      dataFetched: false
    }
  },
  async mounted() {
    try {
      this.Users = await axios.get('http://localhost:3000/')
      console.log(this.Users)
      // this.User = this.User.data[0] // transform first object from array
      // this.dataFetched = true
    } catch(err) {
        console.error(err)
    }
    
  }
};
</script>
