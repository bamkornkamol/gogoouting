<template>
  <div>
    <NavbarAll></NavbarAll>
    <br>
    <!-- dialog -->

    <!-- Temperature -->
    <div class="justify-center content-center items-center flex flex-col">
      <div class="bg-neutral-400 rounded-2xl text-center w-11/12 h-96 justify-center content-center items-center flex flex-col">
        <h1 class="text-6xl">33°</h1>
      </div>
    </div>

    <!-- Category -->
    <h1 class="text-center text-5xl font-semibold m-16">วันนี้ไปไหนดี?</h1>
    <div class="h-20 w-screen">
        <div class="sm:ml-6 sm:block">
          <div class="flex space-x-10 h-20 justify-center content-center items-center flex flex-row">
                <a class="text-black hover:bg-gray-300 hover:text-white rounded-md px-3 py-2 text-2sm font-medium">หอพัก</a>
                <a class="text-black hover:bg-gray-300 hover:text-white rounded-md px-3 py-2 text-2sm font-medium">คาเฟ่</a>
                <a class="text-black hover:bg-gray-300 hover:text-white rounded-md px-3 py-2 text-2sm font-medium">ร้านอาหาร</a>
                <a class="text-black hover:bg-gray-300 hover:text-white rounded-md px-3 py-2 text-2sm font-medium">ตลาด</a>
                <a class="text-black hover:bg-gray-300 hover:text-white rounded-md px-3 py-2 text-2sm font-medium">สวนสาธารณะ</a>
          </div>
        </div>
        <div class="border-2 border-neutral-400	"></div>
    </div>
  </div>
</template>

<script src="/static/js/sugges_place.js"></script>
<script src="/static/js/fav_place.js"></script>
<script
  defer
  src="https://use.fontawesome.com/releases/v5.14.0/js/all.js"
></script>
<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
<script>
import NavbarAll from "../components/NavbarAll.vue";

export default {
  components: {
    NavbarAll,
  },
  data() {
    return {
      sug_place: sugges_place,
      fav: fav,
      show_modal: false,
      show: [],
      select: "all",
    };
  },
  methods: {
    filter0() {
      this.select = "all";
      console.log(this.select);
    },
    filter1() {
      this.select = "cuisine";
      console.log(this.select);
    },
    filter2() {
      this.select = "cafe";
      console.log(this.select);
    },
    filter3() {
      this.select = "travel";
      console.log(this.select);
    },
    filter4() {
      this.select = "salon";
      console.log(this.select);
    },
  },
};
</script>
