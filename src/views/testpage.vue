<template>
<div>
    <div class="btn btn-primary" @click="listUsbDevices">List Usb Devices</div>
    <!-- <iframe allowpaymentrequest allow=’usb fullscreen’></iframe> -->
    </div>

</template>

<script>
import { mapMutations } from 'vuex'

navigator.usb.addEventListener('connect', (event)=>{console.log('device connected')})
export default {
  methods: {
    listUsbDevices() {
        this.$store.dispatch('getusbdevices')
    }
  }

  }

</script>

<style>

</style>