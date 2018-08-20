<template>
<div id="home">
    <div class="home-top">
        <img alt="homeimg" src="../../public/img/home-pic.jpg" style="width:100%">
    </div>
    <div class="home-center">
        <button @click="addwood" :class="woodClass">伐木</button>
        <button @click="addhose">盖房</button>
		<button @click="test">test</button>
    </div>
    <div class="bottom-dialog">
        <div v-for="(item,index) in infolog" :key="index">
            {{item}}
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'home',
    data() {
        return {
			infolog: [],
			woodClass:''
        }
    },

    methods: {
        addwood() {
            let addmsg = '木材 + 1'
            this.infolog.push(addmsg)
            let item = 1
            this.$store.dispatch('setWoodValue', item)
        },

        addhose() {

            let item = 1
            let wood = -10
            if (this.$store.state.woodValue < Math.abs(wood)) {
				console.log('into if')
				let addmsg = '必要资源不足'
				this.infolog.unshift(addmsg)
				this.woodClass ='animated tada'
				setTimeout(() => {
					this.woodClass =''
				},1000)
            } else {
                let addmsg = '房屋 + 1'
                this.infolog.unshift(addmsg)
                this.$store.dispatch('setHomeValue', item)
                this.$store.dispatch('setWoodValue', wood)
            }
		},
		
		test(){
			let item =1
			this.$store.dispatch('setPeopleValue', item)
		}
    }
}
</script>

<style scoped>
#home{
    width: 90%;
    margin: 0 auto;
}

.home-top{
    padding-top: 20px;
}

.home-top img {
    box-shadow: 1px 1px 5px;
}

.home-center{
    padding-top: 20px;
}

.bottom-dialog {
    position: fixed;
    bottom: 80px;
    width: 90%;
    height: 110px;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
    color: #fff;
}
</style>
