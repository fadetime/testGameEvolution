<template>
<div id="topbar">
    <div class="topbar-top">
        <div class="topbar-img">
            <img src="../../public/img/top-wood.png" alt="woodico">
        </div>
        <div class="topbar-text">
            <span>{{woodValue}}</span>
        </div>

        <div class="topbar-img">
            <img src="../../public/img/top-home.png" alt="homeico">
        </div>
        <div class="topbar-text">
            <span>{{homeValue}}</span>
        </div>

        <div class="topbar-img">
            <img src="../../public/img/top-people.png" alt="peopleico">
        </div>
        <div class="topbar-text">
            <span>{{peopleValue}}</span>
        </div>

        <div class="topbar-img">
            <img src="../../public/img/top-food.png" alt="foodico">
        </div>
        <div class="topbar-text">
            <span>{{meatValue}}</span>
        </div>

        <div class="topbar-img">
            <img src="../../public/img/top-army.png" alt="armyico">
        </div>
        <div class="topbar-text">
            <span>{{peopleValue}}</span>
        </div>
    </div>

</div>
</template>

<script>
export default {
    name: "topBar",
    computed: {
        woodValue: function () {
            return this.$store.state.woodValue
        },
        homeValue: function () {
            return this.$store.state.homeValue
        },
        peopleValue: function () {
            if(this.$store.state.peopleValue < this.$store.state.homeValue*5){
                console.log('into if')
                setTimeout(() => {
                    let item = 1
                    this.$store.dispatch('setPeopleValue', item)
                },2000)
            }//else{
            //     console.log('into else')
            // }
            return this.$store.state.peopleValue
        },
        meatValue: function () {
            return this.$store.state.meatValue
        }
    },
};
</script>

<style scoped>
#topbar{
    box-shadow: 0px 1px 5px;
}

.topbar-top {
    display: flex;
    display: -webkit-flex;
    flex-flow: row;
    -webkit-flex-flow: row;
}

.topbar-img img {
    width: 30px;
}

.topbar-text span {
    line-height: 30px
}
</style>
