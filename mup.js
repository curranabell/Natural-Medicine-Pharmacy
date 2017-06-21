module.exports = {
  servers: {
    one: {
      host: '198.199.100.117',
      username: 'root',
      // pem: '/home/user/.ssh/id_rsa',
      password: 'eba73503c1496441',
      // or leave blank to authenticate using ssh-agent
      opts: {
        port: 22,
      },
    }
  },

  meteor: {
    name: 'reaction-nmp',
    path: '/Users/curran/projects/reaction-development',
    // lets you add docker volumes (optional)
    volumes: {
      // passed as '-v /host/path:/container/path' to the docker run command
      '/host/path': '/container/path',
      '/second/host/path': '/second/container/path'
    },
    docker: {
      // Change the image to 'kadirahq/meteord' if you
      // are using Meteor 1.3 or older
      image: 'reactioncommerce/base:latest' , // (optional)
      //imagePort: 80, // (optional, default: 80)


     // list of servers to deploy, from the 'servers' list
    servers: {
      one: {},
    },

    buildOptions: {
      // skip building mobile apps, but still build the web.cordova architecture
      serverOnly: true,
      debug: false,
      cleanAfterBuild: true, // default
      buildLocation: '/Users/curran/projects/reaction-development', // defaults to /tmp/<uuid>

      // set serverOnly: false if want to build mobile apps when deploying

      // Remove this property for mobileSettings to use your settings.json
      // (optional)
      mobileSettings: {
        yourMobileSetting: 'setting value'
      },
      server: 'https://naturalmedicinepharmacy.com', // your app url for mobile app access (optional)
       // adds --allow-incompatible-updates arg to build command (optional)
      allowIncompatibleUpdates: true,
    },
    env: {
      // PORT: 8000, // useful when deploying multiple instances (optional)
      ROOT_URL: 'https://naturalmedicinepharmacy.com', // If you are using ssl, this needs to start with https
      MONGO_URL: 'mongodb://curranabell:drz400sm@ds030500.mlab.com:30500/reaction-nmp-mongo'
    },
    ssl: {
      // Enables let's encrypt (optional)
      autogenerate: {
        email: 'email.address@domain.com',
        domains: 'website.com,www.website.com' // comma seperated list of domains
      }
    },
    deployCheckWaitTime: 60, // default 10
    // lets you define which port to check after the deploy process, if it
    // differs from the meteor port you are serving
    // (like meteor behind a proxy/firewall) (optional)
    deployCheckPort: 80,

    // Shows progress bar while uploading bundle to server (optional)
    // You might need to disable it on CI servers
    enableUploadProgressBar: true // default false.
  },
