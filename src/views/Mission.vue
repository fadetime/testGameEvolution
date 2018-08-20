<template>
<div id="mission">
    <div class="mission-center" @click="openmap('hunt')">
        <div class="mission-center-img">
            <img src="../../public/img/hunt.jpg" alt="hunt">
        </div>
        <div class="mission-center-text">
            <span>狩 猎</span>
        </div>
    </div>

    <!-- 地图 -->
    <div :class="mapdiv">

        <div class="map-top">
            <div class="map-top-left" @click="turnback">
                <div class="map-top-left-img">
                    <img src="../../public/img/map-turnback.png" alt="back">
                </div>
                <div class="map-top-left-text">
                    <span>返回</span>
                </div>
            </div>
            <div class="map-top-center">
                {{maptitle}}
            </div>
            <div class="map-top-right">

            </div>
        </div>

        <div class="map-center">
            <div class="map-center-body">
                <div v-for="(item,index) in maparr" :key="index" class="map-center-body-item" @click="mapclick(item)" :ref="'div'+index">
                    <div class="map-center-body-shadow" v-if="item.shadow"></div>
                    <img src="../../public/img/myhome.png" alt="home" v-else-if="item.myhome" style="width:90%">
                    <div v-else>
                        <div v-if="item.monster === 0">
                            <img src="../../public/img/map-chicken.png" alt="chicken" style="width:50%">
                        </div>
                        <span>{{index}}</span>
                    </div>

                </div>
            </div>

        </div>

        <div class="map-bottom">
            <div>
                {{mapmsg}}
            </div>
            <div v-if="showbuttom">
                <button @click="buttonno">{{buttomno}}</button>
                <button @click="buttonyes">{{buttomyes}}</button>
            </div>
        </div>
    </div>
    <!-- 地图 -->

    <!-- 战斗 -->
    <div :class="fightdiv">
        <div class="fight-top">
            <div style="padding-top:100px">
                <img :class="monsterclass" src="../../public/img/fight-chicken.png" alt="chicken" style="height:100px">
            </div>
        </div>

        <div class="fight-center">
            <div>
                {{fightmsg}}
            </div>
            <div>
                <button @click="attack">攻击</button>
                <button @click="testwin">技能</button>
                <button>道具</button>
                <button @click="fightback">逃跑</button>
            </div>

        </div>
    </div>
    <!-- 战斗 -->
</div>
</template>

<script>
import mapinfo from '../assets/js/map.js'
import fightprize from '../assets/js/prize.js'
export default {
    data() {
        return {
            maptitle: '',
            mapdiv: 'mapdiv',
            fightdiv: 'fightdiv',
            maparr: [],
            divHeight: 0,
            mapmsg: '',
            fightmsg: '',
            buttomno: '否',
            buttomyes: '是',
            showbuttom: false,
            monsterclass: ''
        }
    },
    mounted() {
        let item = JSON.parse(localStorage.getItem('maparr'))
        if (item === null) {
            console.log('load new map')
            this.maparr = mapinfo.mapfirst
        } else {
            this.maparr = item
        }
    },
    methods: {
        openmap(item) {
            setTimeout(() => {
                this.$refs.div0.forEach((x) => {
                    this.divHeight = x.getBoundingClientRect().width
                    // console.log(this.divHeight)
                })
            }, 100)

            if (item === 'hunt') {
                this.showmap = true
                this.maptitle = '狩猎地图'
                this.mapdiv = 'mapdiv animated slideInRight'
            } else {
                console.log('ok')
            }
        },
        turnback() {
            localStorage.setItem('maparr', JSON.stringify(this.maparr))
            this.mapdiv = 'mapdiv animated slideOutRight'
        },
        mapclick(item) {
            console.log(item)
            item.shadow = false
            if (item.monster === 0) {
                this.mapmsg = '路上碰上了小鸡，也许他是不错的食物'
                this.buttomno = '置之不理'
                this.buttomyes = '进行战斗'
                this.showbuttom = true
            }
        },
        buttonno() {
            this.mapmsg = '你继续走自己的路，小鸡消失在树林中'
            this.showbuttom = false
        },
        buttonyes() {
            console.log('this is fight window')
            this.fightdiv = 'fightdiv animated slideInRight'
        },
        attack() {
            this.fightmsg = '小鸡被攻击了'
            this.monsterclass = 'animated flash'
            setTimeout(() => {
                this.monsterclass = ''
            }, 1000);
        },
        testwin() {
            this.fightmsg = '小鸡被击败了'
            this.monsterclass = 'animated fadeOut'
            let temp = []
            let tempnum =Math.random()
            if(tempnum<fightprize.monster0.prize1.chance){
                temp.push(fightprize.monster0.prize1)
            }
            if(tempnum<fightprize.monster0.prize2.chance){
                temp.push(fightprize.monster0.prize2)
            }
            if(tempnum<fightprize.monster0.prize3.chance){
                temp.push(fightprize.monster0.prize3)
            }
            console.log(temp)
            temp.forEach(element => {
                if(element.meat){
                    this.$store.dispatch('setMeatValue', element.meat)
                }
            });
        },
        fightback() {
            
            this.fightdiv = 'fightdiv animated slideOutRight'
            setTimeout(() => {
                this.fightmsg = '小鸡看起来跃跃欲试'
                this.monsterclass = ''
            }, 1000);

        },
    }
}
</script>

<style scoped>
#mission {
    width: 90%;
    margin: 0 auto;
}

.mission-center-img img {
    width: 100%;
    box-shadow: 1px 1px 2px;
}

.mission-center-text {
    position: relative;
    top: -120px;
    background-color: rgba(0, 0, 0, 0.5)
}

.mission-center-text span {
    color: rgba(255, 255, 255, 0.8);
    font-size: 30px
}

.mapdiv {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    z-index: 10;
}

.fightdiv {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    z-index: 11;
}

.map-top {
    display: flex;
    display: -webkit-flex;
    flex-flow: row;
    -webkit-flex-flow: row;
    box-shadow: 1px 1px 2px;
}

.map-top-left {
    display: flex;
    display: -webkit-flex;
    flex-flow: row;
    -webkit-flex-flow: row;
    flex-basis: 20%;
}

.map-top-left-img img {
    width: 20px;
}

.map-top-left-text span {
    line-height: 20px
}

.map-top-center {
    flex-basis: 60%;
}

.map-top-right {
    flex-basis: 20%;
}

.map-center-body {
    width: 90%;
    display: flex;
    display: -webkit-flex;
    flex-flow: row wrap;
    -webkit-flex-flow: row wrap;
    margin: 0 auto;
    background-image: url(../../public/img/map-hunt.jpg)
}

.map-center-body-shadow {
    background-color: rgba(0, 0, 0, 0.7);
    height: 100%;
}

.map-center-body-item {
    flex-basis: 20%;
    /* background-color: #707070; */
    /* width: 60px; */
    height: 67.5px;
}

.fight-top {
    background-image: url(../../public/img/fight-1.jpg);
    height: 210px;
    background-size: 100%;
    background-repeat: no-repeat;
}
</style>
