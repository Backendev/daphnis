<template lang="pug">
  #contenedor
    div
      | {{ msg }}
      br
      | Datos:
      | {{ data }}
</template>

<script>
var Octokat = require('octokat')
//const { Octokit, App } = require("octokit");
// const octo = new Octokat({
//   token: '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',
//   acceptHeader: 'application/vnd.github.cannonball-preview+json'
// })
export default {
   
  name: 'Principal',
  data () {
    return {
      msg: 'Proy Daphnis',
      data: {}
    }
  },
  mounted() {
    const octo = new Octokat({
      username: "mulukcode@gmail.com",
      password: "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"
    })
    var cb = function (err, val) { console.log(val) }
 
    octo.zen.read(cb)
    const repo = octo.repos('muluk-code','dbdaphnis')
    repo.contents('db.json').read() // Use `.read` to get the raw file.
    .then((contents) => {        // `.fetch` is used for getting JSON
      this.data = contents
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
