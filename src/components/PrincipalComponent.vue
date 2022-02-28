<template lang="pug">
  #contenedor
    div
      | {{ msg }}
      br
      div(v-for="i in data.data")
        | {{ i.dat1 }}
        br
      button(@click="get_coms") coms
      button(@click="get_ids") ids
      button(@click="set_masive") masive
</template>

<script>
var Octokat = require('octokat')
import db_fb from '../assets/js/firebase'
import * as data from '../assets/data/json_data.json';
export default {
   
  name: 'Principal',
  data () {
    return {
      msg: 'Proy Daphnis !!',
      data: {},
      other: 2,
      db_fb :{},
      ids:0
    }
  },
  async mounted() {
      await db_fb.inicialice()
      await db_fb.inicialice_query_ca()
      await db_fb.inicialice_query_co()
      await db_fb.inicialice_q()
      this.db_fb = db_fb
    // const octo = new Octokat({
    //   username: process.env.api_us_mk,
    //   password: process.env.api_to_mk
    // })
    // var cb = function (err, val) { console.log(val) }
 
    // octo.zen.read(cb)
    // const repo = octo.repos('muluk-code','dbdaphnis')
    // repo.contents('db.json').read()
    // .then((contents) => {
    //   this.data = JSON.parse(contents)
    //   console.log(this.data.data)
    // });
  },
  methods:{
    get_coms(){
      this.db_fb.data_co = this.db_fb.get_d("comandos")
    },
    get_ids(){
      console.log(Object.keys(this.db_fb.data_co).length)
      this.ids = Object.keys(this.db_fb.data_co).length 
    },
    set_masive(){
      let datos = data.results
      console.log(datos)
      datos = Object.entries(datos).slice(0,338)
      console.log(datos)
      Object.entries(datos).forEach(item =>{
        this.ids = this.ids + 1
        console.log(this.ids)
        this.db_fb.set_d(item,this.ids,"comandos")
      })
    }
  }
}
</script>


<style>
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
