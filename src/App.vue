<template>
<div id="app">
    <top-bar></top-bar>
    <router-view/>
    <bottom-bar></bottom-bar>
</div>
</template>

<script>
import topBar from './components/topBar'
import bottomBar from './components/bottomBar'
import '../node_modules/animate.css/animate.min.css'
export default {
    components: {
        topBar,
        bottomBar
	},
	data() {
		return {
			timer:{}
		}
	},
    computed: {
        woodWorker: function () {
            return this.$store.state.woodWorker
		},
		huntWorker: function () {
            return this.$store.state.huntWorker
        },
    },
    watch: {
        woodWorker() {
            if (this.woodWorker > 0) {
                clearInterval(this.timer['time1'])
                let goodTime = 10
                this.timer['time1'] = setInterval(() => {
                    if (goodTime > 0) {
                        --goodTime
                    } else {
						goodTime = 10
						let item = this.woodWorker * 5
						this.$store.dispatch('setWoodValue', item)
                    }
                }, 1000)
            } else {
                clearInterval(this.timer['time1'])
            }
		},
		huntWorker() {
			if (this.huntWorker > 0) {
                clearInterval(this.timer['time2'])
                let goodTime = 10
                this.timer['time2'] = setInterval(() => {
                    if (goodTime > 0) {
                        --goodTime
                    } else {
						goodTime = 10
						let item = this.huntWorker * 5
						this.$store.dispatch('setMeatValue', item)
                    }
                }, 1000)
            } else {
                clearInterval(this.timer['time2'])
            }
		}
    },
}
</script>

<style lang="scss">
body {
    margin: 0;
}

#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
