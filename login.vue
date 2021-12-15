<template>
  <div>
  <div class="container text-dark">
    <div class="row justify-content-md-center">
      <div class="col-md-5 p-3 login justify-content-md-center">
        <h1 class="h3 mb-3 font-weight-normal text-center">Zaloguj sie</h1>

        <p v-if="incorrectAuth">Nieprawidlowe haslo wpisz jeszcze raz!</p>
        <form v-on:submit.prevent="login">  <!-- zapobiega odświeżaniu strony -->
          <div class="form-group">
            <input type="text" name="username" id="user" v-model="username" class="form-control" placeholder="Username">
          </div>
          <div class="form-group">
            <input type="password" name="password" id="pass" v-model="password" class="form-control" placeholder="Password">
          </div>
          <button type="submit" class="btn btn-lg btn-primary btn-block">Logowanie</button>
        </form>
        
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data () {
      return {
        username: '',
        password: '',
        incorrectAuth: false
      }
    },
    methods: {
      login () { 
        this.$store.dispatch('userLogin', {        
          username: this.username,
          password: this.password
        })
        .then(() => {
          this.$router.push({ name: 'posts' })
        })
        .catch(err => {
          console.log(err)
          this.incorrectAuth = true
        })
        }
      }
  }
</script>

<style>
body { 
  background-color:#f4f4f4;
}
  .login{
    background-color:rgba(255, 255, 255, 0.605);
    margin-top:10%;
  }
  input {
    padding: 15px 10px;
}
</style>