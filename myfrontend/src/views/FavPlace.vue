<template>
  <div>
    <NavbarAll></NavbarAll>
    <br />
    <div id="app" class="container">
      <div class="grid grid-cols-5 gap-8 h-16">
        <a
          @click="filter0()"
          id="all"
          class="rounded-3xl bg-neutral-300 text-center justify-center content-center items-center flex flex-row"
          >ทั้งหมด</a
        >
        <a
          @click="filter1()"
          id="food"
          class="rounded-3xl bg-neutral-300 text-center justify-center content-center items-center flex flex-row"
          >ร้านอาหาร</a
        >
        <a
          @click="filter2()"
          id="cafe"
          class="rounded-3xl bg-neutral-300 text-center justify-center content-center items-center flex flex-row"
          >คาเฟ่</a
        >
        <a
          @click="filter3()"
          id="tra"
          class="rounded-3xl bg-neutral-300 text-center justify-center content-center items-center flex flex-row"
          >สถานที่ท่องเที่ยว</a
        >
        <a
          @click="filter4()"
          id="salon"
          class="rounded-3xl bg-neutral-300 text-center justify-center content-center items-center flex flex-row"
          >คาเฟ่</a
        >
      </div>
      <br />
      <br />

      <div class="grid grid-cols-5 gap-12">
        <div v-for="(val, i) in fav" :key="val">
          <div
            v-if="val.type_all == select || val.type == select"
            class="max-w-xs rounded overflow-hidden shadow-lg hover:shadow-xl"
          >
            <button>
              <img
                @click="
                  show_modal = !show_modal;
                  show.push(val);
                "
                class="w-full"
                :src="val.img"
                alt="Sunset in the mountains"
              />
            </button>
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">{{ val.name }}</div>
              <p class="text-gray-700 text-base">
                {{ val.desc }}
              </p>
              <div class="icon is-size-4 mt-2 mb-2">
                <!-- star ทึบ -->
                <span v-if="val.fav == true" class="icon" key="true">
                  <i class="fa-solid fa-heart" @click="fav.splice(i, 1)"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="modal" v-bind:class="{ 'is-active': show_modal }">
        <div
          class="modal-background"
          @click="
            show_modal = !show_modal;
            show.splice(0);
          "
        ></div>
        <div
          class="modal-card"
          style="max-width: 800px; width: 90%"
          v-for="item in show"
          :key="item"
        >
          <header class="modal-card-head">
            <p class="modal-card-title">{{ item.name }}</p>
            <button
              @click="
                show_modal = !show_modal;
                show.splice(0);
              "
              class="delete"
              aria-label="close"
            ></button>
          </header>
          <section class="modal-card-body">
            <div class="grid grid-cols-2 gap-4">
              <div>
                <img
                  class="w-full rounded-2xl"
                  :src="item.img"
                  alt="Sunset in the mountains"
                />
              </div>
              <div>
                <p>{{ item.desc }}</p>
                <br />
                <p>{{ item.location }}</p>
              </div>
            </div>
          </section>
        </div>
      </div>
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
import NavbarAll from './NavbarAll.vue'
export default {
    components: {
        NavbarAll
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
