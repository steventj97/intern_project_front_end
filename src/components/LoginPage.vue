<template>
  <div class="LoginPage">

   <div class="top-content" >
              <div class="inner-bg">
                  <div class="container">
                      <div class="row">
                          <div class="col-md-12 form-box">
                          	<div class="form-top">
                          		<div class="form-top-left">
                          			<h3>Login to Euphoria</h3>
                              		<p>Enter your username and password to log on:</p>
                          		</div>
                          		<div class="form-top-right">
                          			<i class="fa fa-lock"></i>
                          		</div>
                              </div>
                              <div class="form-bottom">
  			                    <form role="form" action="#" method="post" class="login-form">
  			                    	<div class="form-group">
  			                    		<label class="sr-only" for="form-username">Username</label>
  			                       	<input type="text" v-model="credentials.username" name="form-username" placeholder="Username..." class="form-username form-control" id="form-username">

  			                      </div>
  			                        <div class="form-group">
  			                        	<label class="sr-only" for="form-password">Password</label>
  			                        	<input type="password" name="form-password" v-model="credentials.password" placeholder="Password..." class="form-password form-control" id="form-password">
  			                        </div>

  			                        <button type="button" class="btn btn-outline-primary" v-on:click = "submit">Sign in!</button>
  															<label class="sr-only" for="form-password">
  															</label>
  			                    </form>
  		                    </div>
                          </div>
                      </div>
                  </div>
              </div>

          </div>
</div>
</template>

<script>
import auth from '../auth'
export default {
  name: 'LoginPage',
  data () {
    return {
      credentials: {
        username: '',
        password: ''
      },
      error: ''
    }
  },
  methods: {
    submit () {
      var credentials = {
        username: this.credentials.username,
        password: this.credentials.password
      }
      console.log(credentials)
        // We need to pass the component's this context
        // to properly make use of http in the auth service
      auth.login(this, credentials, 'dashboard')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
