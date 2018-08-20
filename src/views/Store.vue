<template>
<div id="store">
    <div class="store-top">
        <div class="store-top-title">
            <span>伐木者</span>
        </div>
        <div class="store-top-body">
            <div class="store-top-left">
                <img src="../../public/img/store-woodworker.jpg" alt="woodworker" style="width:100%">
            </div>
            <div class="store-top-right">
                <div>
                    <button @click="setWorker('setWoodWorker',-1)" :disabled="woodWorker<=0">-</button>
                    <span style="padding:0 20px">{{woodWorker}}</span>
                    <button @click="setWorker('setWoodWorker',1)" :disabled="worker>=peopleValue">+</button>
                </div>
                <div>
                    <span>收获时间</span>
                    <span>{{giftTime}}</span>
                </div>
                <div>
                    <span>预计收获</span>
                    <span>{{getWood}}</span>
                </div>
            </div>
        </div>

    </div>

    <div class="store-top" style="margin-top:20px">
        <div class="store-top-title">
            <span>狩猎者</span>
        </div>
        <div class="store-top-body">
            <div class="store-top-left">
                <img src="../../public/img/store-hunter.jpg" alt="woodworker" style="width:100%">
            </div>
            <div class="store-top-right">
                <div>
                    <button @click="setWorker('setHuntWorker',-1)" :disabled="worker>=peopleValue">-</button>
                    <span style="padding:0 20px">{{huntWorker}}</span>
                    <button @click="setWorker('setHuntWorker',1)" :disabled="worker>=peopleValue">+</button>
                </div>
                <div>
                    <span>收获时间</span>
                    <span>{{giftTime}}</span>
                </div>
                <div>
                    <span>预计收获</span>
                    <span>{{getHunt}}</span>
                </div>
            </div>
        </div>
    </div>

    <div class="store-top" style="margin-top:20px">
        <div class="store-top-title">
            <span>工匠师</span>
        </div>
        <div class="store-top-body">
            <div class="store-top-left">
                <img src="../../public/img/store-tool.jpg" alt="woodworker" style="width:100%">
            </div>
            <div class="store-top-right">
                <div>
                    <span>生产能力</span>
                    <span>{{giftTime}}</span>
                </div>
                <div>
                    <span>制作物品</span>
                    <span>num</span>
                </div>
                <div>
                    <button @click="openWorkSpace">工匠所</button>
                </div>
            </div>
        </div>
    </div>
    <!-- <div class="store-top" style="margin-top:20px">
        <div class="store-top-title">
            <span>掘石者</span>
        </div>
        <div class="store-top-body">
            <div class="store-top-left">
                <img src="../../public/img/store-stone.jpg" alt="woodworker" style="width:100%">
            </div>
            <div class="store-top-right">
                <div>
                    <button>-</button>
                    <span style="padding:0 20px">num</span>
                    <button>+</button>
                </div>
                <div>
                    <span>收获时间</span>
                    <span>{{giftTime}}</span>
                </div>
                <div>
                    <span>预计收获</span>
                    <span>num</span>
                </div>
            </div>
        </div>
    </div> -->
    <div style="margin-bottom:70px">
        <!-- 底部占位符 -->
    </div>

    <!-- 遮罩层 -->
    <div v-if="testValue" class="workspace">
        <div class="workspace-title">
            <div class="workspace-title-left" @click="testValue=false">
                <div>
                    <img src="../../public/img/map-turnback.png" alt="back">
                </div>
                <div>
                    <span>返回</span>
                </div>
            </div>
            <div class="workspace-title-center">
                {{divTitle}}
            </div>
            <div class="workspace-title-right"></div>
        </div>

        <div class="workspace-body">

            <div class="store-top" style="margin-top:20px">
                <div class="store-top-body">
                    <div class="store-top-left">
                        <img src="../../public/img/weapon/woodenstick.png" alt="woodworker" style="width:100%">
                    </div>
                    <div class="store-top-right">
                        <div>
                            <span>木棒</span>
                        </div>
                        <div>
                            <span>武器属性</span>
                        </div>
                        <div>
                            <span>攻击力：+1</span>
                        </div>
                        <div>
                            <span>耗费能力</span>
                            <span>5</span>
                        </div>
                        <div>
                            <button @click="makeTool('woodenstick',-1)" :disabled="woodenstick <=0">-</button>
                            <span style="padding:0 20px">{{woodenstick}}</span>
                            <button @click="makeTool('woodenstick',1)">+</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    <!-- 遮罩层 -->
</div>
</template>

<script>
export default {
    data() {
        return {
            giftTime: '10s',
            getWood: 0,
            getHunt: 0,
            testValue: false,
            divTitle: '',
            shopList:[],
            woodenstick:0
        }
    },
    computed: {
        woodWorker: function () {
            return this.$store.state.woodWorker
        },
        huntWorker: function () {
            return this.$store.state.huntWorker
        },
        peopleValue: function () {
            return this.$store.state.peopleValue
        },
        worker: function () {
            let x = 0
            x = this.woodWorker + this.huntWorker
            return x
        }
    },

    methods: {
        setWorker(x, y) {
            this.$store.dispatch(x, y)
            if (x === 'setWoodWorker') {
                if (this.woodWorker === 0) {
                    this.getWood = 0
                } else {
                    this.getWood = this.woodWorker * 5
                }
            } else if (x === 'setHuntWorker') {
                if (this.huntWorker === 0) {
                    this.getHunt = 0
                } else {
                    this.getHunt = this.huntWorker * 5
                }
            }
        },

        openWorkSpace() {
            console.log('into space')
            this.divTitle = '工匠所'
            this.testValue = true
        },

        makeTool(x,y) {
            // console.log(x)
            // console.log(y)
            this.woodenstick = this.woodenstick + y
        }
    }
}
</script>

<style scoped>
#store {
    width: 90%;
    margin: 0 auto;
    padding-top: 20px;
}

.store-top {
    box-shadow: 1px 1px 5px;
}

.store-top-title {
    background-image: url(../../public/img/store-title.jpg);
    background-size: 90% 60px;
    background-position: center;
    background-repeat: no-repeat;
    height: 60px;
}

.store-top-title span {
    line-height: 40px;
}

.store-top-body {
    display: flex;
    display: -webkit-flex;
    flex-flow: row;
    -webkit-flex-flow: row;
}

.store-top-left {
    flex-basis: 40%;
}

.store-top-right {
    flex-basis: 60%;
    padding-top: 20px;
}

.workspace {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: #fff;
    z-index: 10;
}

.workspace-title {
    display: flex;
    display: -webkit-flex;
    flex-flow: row;
    -webkit-flex-flow: row;
    box-shadow: 1px 1px 2px;
}

.workspace-title-left {
    display: flex;
    display: -webkit-flex;
    flex-flow: row;
    -webkit-flex-flow: row;
    flex-basis: 20%;
}

.workspace-title-left img {
    width: 20px;
}

.workspace-title-left span {
    line-height: 20px
}

.workspace-title-center {
    flex-basis: 60%;
}

.workspace-title-right {
    flex-basis: 20%;
}

.workspace-body{
    width: 90%;
    margin: 0 auto;
}
</style>
