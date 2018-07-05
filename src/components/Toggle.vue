<template>
	<div>
		<h2 v-on:click="copyTxt()">测试点击展开</h2>
		<ul class="list-group" id="ul-box">
			<li class="list-group-item">免费域名注册</li>
			<li class="list-group-item">免费 Window 空间托管</li>
			<li class="list-group-item">图像的数量</li>
			<li class="list-group-item">24*7 支持</li>
			<li class="list-group-item">每年更新成本</li>
		</ul>
	</div>
</template>

<script>
export default {
  name: 'Toggle',
  data () {
    return {
      msg: '',
      data:''
    }
  },
  methods:{
  	ajaxNew:function(){
  		// GET /someUrl
        this.$http.get('http://localhost:3000').then(response => {
             
            // get body data
            // this.someData = response.body;
			this.data = response.data.data;
			console.log(this.data);
        }, response => {
            console.log("error");
        });
  	},
  	copyTxt:function () {
        $("#ul-box").slideToggle("slow");                               
 	}
  },
  created:function(){
  	this.ajaxNew();
  }
}
</script>

<style scoped>
#ul-box{
	display: none;
}
</style>