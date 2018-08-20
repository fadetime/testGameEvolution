<template>
<div id="bottombar">

    <div class="bottombar">
        <div class="bottombar-item" @click="routepush('home')">
            <div>
                <img src="../../public/img/bottom-all.png" alt="allicon">
            </div>
            <div>
                总览
            </div>
        </div>

        <div class="bottombar-item" @click="routepush('store')">
            <div>
                <img src="../../public/img/bottom-store.png" alt="allicon">
            </div>
            <div>
                资源
            </div>
        </div>

        <div class="bottombar-item" @click="routepush('mission')">
            <div>
                <img src="../../public/img/bottom-mission.png" alt="allicon">
            </div>
            <div>
                任务
            </div>
        </div>

        <div class="bottombar-item">
            <div>
                <img src="../../public/img/bottom-hero.png" alt="allicon">
            </div>
            <div>
                英雄
            </div>
        </div>
    </div>

</div>
</template>

<script>
export default {
    name: "bottomBar",
    methods: {
        routepush(item) {
            if (item === 'home') {
                this.$router.push('/')
            } else if (item === 'mission') {
                this.$router.push('mission')
            }else if (item === 'store') {
                this.$router.push('store')
            }
        }
    }
};
</script>

<style scoped>
#bottombar {
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #fff;
    box-shadow: 0px -1px 5px
}

.bottombar {
    display: flex;
    display: -webkit-flex;
    flex-flow: row;
    -webkit-flex-flow: row;
}

.bottombar-item {
    flex-basis: 25%
}

.bottombar-item img {
    width: 30px
}
</style>
