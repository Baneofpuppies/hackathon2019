import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userId: null,
    userToken: null

  },
  getters: {
    isAuthenticated: function (state) {
      return state.userToken
    }
  },
  mutations: {

  },
  actions: {
    getusbdevices: function () {
      var filters = [
        { vendorId: 0x0010 },
        { vendorId: 0x0111 },
        { vendorId: 0x0112 },
        { vendorId: 0x0113 },
        { vendorId: 0x0114 },
        { vendorId: 0x0115 },
        { vendorId: 0x0116 },
        { vendorId: 0x0120 },
        { vendorId: 0x0200 },
        { vendorId: 0x0211 },
        { vendorId: 0x0401 },
        { vendorId: 0x0402 },
        { vendorId: 0x0110 },
        { vendorId: 0x0403 },
        { vendorId: 0x0404 },
        { vendorId: 0x0405 },
        { vendorId: 0x0406 },
        { vendorId: 0x0407 },
        { vendorId: 0x0410 }
      ]
      filters = [
        { vendorId: 0x1050 }
      ]
      //filters = []
      var devices = navigator.usb.requestDevice({ filters: filters }).then(res => {
        console.log("the result of calling request devices")
        console.log(res)
      })
      devices = navigator.usb.getDevices()
        .then(res => {
          console.log('the get devices function')
          res.forEach(res => {console.log(res) } )
          console.log(res)
        })
      console.log(devices)
    }

  }
})
