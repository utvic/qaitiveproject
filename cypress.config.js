const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl : 'http://localhost:4200' // stavljamo url koji zelimo da posetimo 
  },
  chromeWebSecurity:false,
  //retries:2,//zelim da svaki put kad mi padne test se ponovi jos jednom
  env:{
    userCredentials:{
      username:'jela@jela.com',
      email:'jela@jela.com',
      password:'111111'
    }
  }
});
