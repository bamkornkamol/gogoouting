<template>
    <div>
        <NavbarAll></NavbarAll>
        <br>
        <!-- dialog -->

        <!-- <div class="h-96 w-96 bg-neutral-100 fixed z-1 top-36"></div> -->

        <!-- Temperature -->
        <div class="bg-neutral-400 rounded-2xl text-center w-11/12 h-96 justify-center content-center items-center flex flex-col">
            <h1 class="text-8xl">33°</h1>
        </div>

        <!-- Category -->
    <h1 class="text-center text-7xl font-semibold m-16">วันนี้ไปไหนดี?</h1>

    <div class="container w-4/5">
    <a @click="filter0()" id="all"
        class="text-4xl rounded-xl bg-neutral-300 text-center h-48 justify-center content-center items-center flex flex-col">ทั้งหมด</a>
        <br>
    <div class="grid grid-cols-2 gap-2">
        <a @click="filter1()" id="cuisine"
        class="text-4xl rounded-xl bg-neutral-300 text-center h-48 justify-center content-center items-center flex flex-col">ร้านอาหาร</a>
        <a @click=" filter2()" id="cafe"
        class="text-4xl rounded-xl bg-neutral-300 text-center h-48 justify-center content-center items-center flex flex-col">คาเฟ่</a>
        <a @click="filter3()" id="travel"
        class="text-4xl rounded-xl bg-neutral-300 text-center h-48 justify-center content-center items-center flex flex-col">สถานที่ท่องเที่ยว</a>
        <a @click="filter4()" id="salon"
        class="text-4xl rounded-xl bg-neutral-300 text-center h-48 justify-center content-center items-center flex flex-col">ร้านเสริมสวย</a>
    </div>

    <br>
    <br>

    <div class="grid grid-cols-5 place-items-center gap-2">
    

    <div v-for="(value, index) in sug_place" :key="index">
      <div v-if="value.type_all == select || value.type == select">
        <div  class="max-w-xs rounded overflow-hidden shadow-lg hover:shadow-xl">
          <button><img  @click="show_modal = !show_modal; show.push(value);" class="w-full" :src="value.img" alt="Sunset in the mountains"></button>
          
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{{value.name}}</div>
            <p class="text-gray-700 text-base">
              {{value.desc}}
            </p>
            <div class="icon is-size-4 mt-2 mb-2 z-2">
              <!-- star ทึบ -->
              <span @click="value.fav = false;" v-if="value.fav == true" class="icon" key="true">
                <i class="fa-solid fa-heart"></i>
              </span>

              <!-- star ใส -->
              <span @click="value.fav = true; fav.push(value);" v-if="value.fav == false" key="false">
                <i class="fa-regular fa-heart"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
        
    </div>

    <div class="modal" v-bind:class="{'is-active':show_modal}">
        <div class="modal-background" @click="show_modal = !show_modal; show.splice(0);"  ></div>
        <div class="modal-card" style="max-width: 800px;width: 90%;" v-for="item in show" :key="item">
            <header class="modal-card-head">
                <p class="modal-card-title">{{item.name}}</p>
                <button @click="show_modal = !show_modal; show.splice(0);" class="delete" aria-label="close"></button>
            </header>
            <section class="modal-card-body">
               <div class="grid grid-cols-2 gap-4">
                <div>
                  <img class="w-full rounded-2xl" :src="item.img" alt="Sunset in the mountains">
                  <br>
                  <p>{{item.type}}</p>
                </div>
                <div>
                  <p>{{item.desc}}</p>
                  <br>
                  <p>{{item.location}}</p>
                  
                </div>
               </div>
               
            </section>
        </div>
      </div>
    </div>

    

  </div>
        
    </div>
</template>

<script src="/static/js/sugges_place.js"></script>
<script src="/static/js/fav_place.js"></script>
<script defer src="https://use.fontawesome.com/releases/v5.14.0/js/all.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
<script>
    import NavbarAll from '../components/NavbarAll.vue'

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
            select: "all"
        }
      },
      methods: {
        filter0(){
          this.select = 'all';
          console.log(this.select);
        },
        filter1() {
          this.select = 'cuisine';
          console.log(this.select);
        },
        filter2() {
          this.select = 'cafe';
          console.log(this.select);
        },
        filter3() {
          this.select = 'travel';
          console.log(this.select);
        },
        filter4() {
          this.select = 'salon';
          console.log(this.select);
        }
      }
}
</script>