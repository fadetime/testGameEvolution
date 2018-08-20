import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		woodValue: 0,
		homeValue: 1,
		peopleValue: 0,
		meatValue: 0,
		woodWorker:0,
		huntWorker:0
	},
	mutations: {
		setWoodValue: (state, item) => {
			state.woodValue = state.woodValue + item
		},

		setHomeValue: (state, item) => {
			state.homeValue = state.homeValue + item
		},

		setPeopleValue: (state, item) => {
			state.peopleValue = state.peopleValue + item
		},
		setMeatValue: (state, item) => {
			state.meatValue = state.meatValue + item
		},
		setWoodWorker: (state, item) => {
			state.woodWorker = state.woodWorker + item
		},
		setHuntWorker: (state, item) => {
			state.huntWorker = state.huntWorker + item
		}
	},
	actions: {
		setWoodValue: ({ commit }, item) => {
			commit('setWoodValue', item)
		},
		setHomeValue: ({ commit }, item) => {
			commit('setHomeValue', item)
		},
		setPeopleValue: ({ commit }, item) => {
			commit('setPeopleValue', item)
		},
		setMeatValue: ({ commit }, item) => {
			commit('setMeatValue', item)
		},
		setWoodWorker: ({ commit }, item) => {
			commit('setWoodWorker', item)
		},
		setHuntWorker: ({ commit }, item) => {
			commit('setHuntWorker', item)
		},
	}
})
