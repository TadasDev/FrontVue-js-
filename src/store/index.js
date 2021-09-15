import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
import router from "@/router";

Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        isLogged: false,
        loginMessage: [],
        registerMessage:[],
        editMessage:[],
        userData: [],
        ListOfRegions: [],
        userLicences: [],
        prices: [],
    },
    mutations: {
        sendMessage(state, data) {
            state.registerMessage = data
        },
        error(state, response) {
            state.error = response
        },
        logoutUser(state, data) {
            state.logged = data
            state.userData = []
        },
        setRegions(state, regions) {
            state.ListOfRegions = regions
        },
        setLicence(state, licences) {
            state.userLicences = licences.data
        },
        SetPriceList(state, prices) {
            state.prices = prices
        },
        setEditMessage(state,message){
            state.editMessage = message
        }
    },
    actions: {
        async login(context, data) {
            await axios.post('http://127.0.0.1:8000/api/login', data)
                .then((response) => {
                    if (response.status === 200) {
                        context.state.userData = response.data.user
                        localStorage.setItem('token', response.data.token)
                        // context.commit('setToken', response.data.token)
                        router.push('/buy-licence')
                        context.state.isLogged = true
                    }
                })
                .catch((error) => {
                    if (error) {
                        console.log(error.response.data.message)
                        context.state.loginMessage.push(error.response.data.message)
                    }
                });
        },
        async logout(context) {

            const token = localStorage.getItem('token')
            const config = {
                headers: {Authorization: `Bearer ${token}`}
            };

            await axios.post('http://127.0.0.1:8000/api/logout', {},
                config)
                .then((response) => {
                    if (response.status === 200) {
                        console.log(response)
                        localStorage.removeItem('token')
                        router.push('/')
                        context.state.isLogged = false
                    }
                })
                .catch((error) => {
                    if (error) {
                        console.log(error.response.data)
                    }
                })
        },
        async getRegions(context) {
            const token = localStorage.getItem('token')
            const config = {
                headers: {Authorization: `Bearer ${token}`}
            };

            await axios.get('http://127.0.0.1:8000/api/list-of-regions', config)
                .then((response) => {
                    if (response.status === 200) {
                        context.commit('setRegions', response.data)
                    }
                })
                .catch((error) => {
                    console.log(error)
                });
        },
        async createLicence(context, data) {

            const token = localStorage.getItem('token')
            const config = {
                headers: {Authorization: `Bearer ${token}`}
            };

            await axios.post('http://127.0.0.1:8000/api/buy-licence', data, config)
                .then((response) => {
                    if (response.status === 200) {
                        context.state.message = response.data.errors
                        router.push('/licence-list')
                        context.state.userLicences.push(data)
                        axios.get('http://127.0.0.1:8000/api/fishing-licence', config)
                            .then((response) => {
                                if (response.status === 200) {
                                    context.commit('setLicence', response.data)
                                    context.state.successMessage = null
                                }
                            })
                            .catch((error) => {
                                console.log(error)
                            });
                    }
                })
                .catch((error) => {
                    console.log(error)
                });
        },
        async getLicence(context) {
            const token = localStorage.getItem('token')
            const config = {
                headers: {Authorization: `Bearer ${token}`}
            };

            await axios.get('http://127.0.0.1:8000/api/fishing-licence', config)
                .then((response) => {
                    if (response.status === 200) {
                        context.commit('setLicence', response.data)
                    }
                })
                .catch((error) => {
                    console.log(error)
                });
        },
        async getPrices(context) {
            const token = localStorage.getItem('token')
            const config = {
                headers: {Authorization: `Bearer ${token}`}
            };

            await axios.get('http://127.0.0.1:8000/api/price-list', config)
                .then((response) => {
                    context.commit('SetPriceList', response.data)
                })
                .catch((error) => {
                    console.log(error)
                });
        },
        async editProfile(context,data) {
            const token = localStorage.getItem('token')
            const config = {
                headers: {Authorization: `Bearer ${token}`}
            };
            await axios.patch('http://127.0.0.1:8000/api/profile/edit',data ,config)
                .then((response) => {
                    if (response.status === 200) {
                        console.log(response)
                        context.commit('setEditMessage', response.data)
                    }
                })
                .catch((error) => {
                    console.log(error)
                });
        }
    },
    modules: {}
})
