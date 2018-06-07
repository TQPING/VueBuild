<template>
	<div>
		<h1>{{msg}}</h1>
		<ul class="list-group">
			<li class="list-group-item" id="copyTxt" v-for="items in data">
				<span class="badge" v-on:click="copyTxt()">复制</span>
				<div class="addresNm">{{items.title}}</div>
			</li>
		</ul>
	</div>
</template>
<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'This is Home ! Welcome to home',
      data:[
      {
      	id:1,
      	iscopy:true,
      	title:"免费 Window 空间托管免费 Window 空间托管免费 Window 空间托管免费 Window 空间托管免费 Window 空间托管免费 Window 空间托管免费 Window 空间托管免费 Window 空间托管"},
      {
      	id:2,
      	iscopy:false,
      	title:"每年更新成本每年更新成本每年更新成本每年更新成本每年更新成本"},
      	{
      	id:3,
      	iscopy:true,
      	title:"折扣优惠折扣优惠折扣优惠折扣优惠折扣优惠折扣优惠折扣优惠折扣优惠折扣优惠折扣优惠折扣优惠折扣优惠折扣优惠折扣优惠折扣优惠折扣优惠折扣优惠"}
      ]
    }
  },
  methods:{
  	copyTxt:function () {
        var Input = document.querySelector('.addresNm');
         console.log(Input)                                                   
                                                           
 	}
  }
}
</script>