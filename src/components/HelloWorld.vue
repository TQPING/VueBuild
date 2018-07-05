<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <a href="#/home">Go Home</a>
    <a href="#/Toggle">Go Toggle</a>
    <h3>
    	<input type="text" v-model="datatxt" />
    	<p>{{datatxt}}</p>
    </h3>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      datatxt:'lulu'
    }
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
