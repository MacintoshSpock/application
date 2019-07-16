<template>
<div>
  SignUp
  <form @submit="sendRegData" @submit.prevent>
      <input type="text" v-model="firstName" name="firstName" placeholder="First name"><br>
      <input type="text" v-model="lastName" name="lastName" placeholder="Last name"><br>
      <input type="text" v-model="email" name="email" placeholder="Email"><br>
      <input type="text" v-model="password" name="password" placeholder="Password"><br>
      <input type="submit" value="Send">
    </form>
</div>
</template> 

<script>
import axios from 'axios';

export default {
  name: "SignUp",
  data() {
    return {
      firstName: null,
      lastName: null,
      email: null,
      password: null
    }
  }, 
  methods: {
    async sendRegData() {
      try {
        await axios.post('http://localhost:3000/signup', {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            password: this.password
        }).then((res) => {
            let token = res.data.token
            // console.log('token res received in front:', token)
            // localStorage.setItem("currentToken", token)
            // console.log('curToken:', localStorage.getItem("currentToken"))
        })   
      } catch(err) {
        console.log(err)
      }
    }
  }
};
</script>

<style scoped lang="scss">

</style>
