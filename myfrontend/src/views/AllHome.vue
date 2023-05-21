<template>
  <div>
    <NavbarAll></NavbarAll>
    <br>
    <!-- dialog -->

    <!-- Temperature -->
    <div :class="typeof weather.main != 'undefined' && weather.main.temp > 16 ? 'warm' : ''" class="justify-center content-center items-center flex flex-col">

      <div class="bg-sky-500 rounded-2xl w-11/12 h-96">
        <div class="p-4 flex items-center gap-3">
          <i class="fa-solid fa-sun text-2xl text-white"></i>
          <p class="text-2xl text-white ">สภาพอากาศวันนี้</p>
        </div>

        <div class="p-4">
          <input v-model="query" @keypress="fetchWeather" class="bg-white border rounded-lg h-10 w-96 p-4" type="text" placeholder="ค้นหา..."/>
        </div>

        <div class="grid grid-rows-2 text-center" v-if="typeof weather.main != 'undefined'">
          <p>{{ weather.name }}, {{ weather.sys.country }}</p>
          <p>{{ dateBuilder() }}</p>
          <p>{{ Math.round(weather.main.temp) }}°c</p>
          <p>{{ weather.weather[0].main }}</p>
        </div>


      </div>
    </div>

    

    <!-- Category -->
    <h1 class="text-center text-5xl font-semibold m-16">วันนี้ไปไหนดี?</h1>
    <div class="h-20 w-screen">
        <div class="sm:ml-6 sm:block">
          <div class="flex space-x-10 h-15  justify-center content-center items-center flex flex-row">
                <a @click="filter('ทั้งหมด')" class="text-black hover:bg-neutral-800 hover:text-white rounded-md px-3 py-2 text-2sm font-medium">ทั้งหมด</a>
                <a @click="filter('หอพัก')" class="text-black hover:bg-neutral-800 hover:text-white rounded-md px-3 py-2 text-2sm font-medium">หอพัก</a>
                <a @click="filter('คาเฟ่')" class="text-black hover:bg-neutral-800 hover:text-white rounded-md px-3 py-2 text-2sm font-medium">คาเฟ่</a>
                <a @click="filter('ร้านอาหาร')" class="text-black hover:bg-neutral-800 hover:text-white rounded-md px-3 py-2 text-2sm font-medium">ร้านอาหาร</a>
                <a @click="filter('ตลาด')" class="text-black hover:bg-neutral-800 hover:text-white rounded-md px-3 py-2 text-2sm font-medium">ตลาด</a>
                <a @click="filter('สวนสาธารณะ')" class="text-black hover:bg-neutral-800 hover:text-white rounded-md px-3 py-2 text-2sm font-medium">สวนสาธารณะ</a>
          </div>
        </div>
        <hr class="border-t border-solid border-neutral-800">
    </div>
    <div class="container my-6">
      <div class="grid grid-cols-5 place-items-center gap-2">
        <div v-for="(sug_place, index) in sug_place" :key="index">
          <div>
            <div  class="max-w-xs rounded overflow-hidden shadow-lg hover:shadow-xl">
              <button><img  @click="$router.push('/placedetail/' + sug_place.id)" class="w-full" :src="'http://localhost:3000/' + sug_place.image_file_path" alt=""></button>
              
              <div class="px-5 py-4">
                <div class="font-bold text-xl mb-2">{{sug_place.place_name}}</div>
                <p>{{sug_place.name}}</p>
                <!-- <p class="text-gray-700 text-base">
                  {{sug_place.desc}}
                </p> -->
                <div class="icon is-size-4 mt-2 mb-2 z-2 flex justify-end content-end items-end">
                  <!-- star ทึบ -->
                  <!-- <span >
                    <i class="fa-solid fa-heart"></i>
                  </span> -->

                  <!-- star ใส -->
                  <span>
                    <i class="fa-regular fa-heart"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script
  defer
  src="https://use.fontawesome.com/releases/v5.14.0/js/all.js"
></script>
<script>

import NavbarAll from "../components/NavbarAll.vue";
import axios from "axios";

export default {
  name: 'app',
  components: {
    NavbarAll,
  },
  data() {
    return {
      sug_place:null,
      all:"http://localhost:3000/home",
      api_key: '0c5df38307315c580e0d1a06423475b7',
      url_base: 'https://api.openweathermap.org/data/2.5/',
      query: '',
      weather: {}
    };
  },
  created(){
    axios.get(this.all)
    .then((response) => {
      this.sug_place = response.data
      console.log(this.all)
    })
    .catch((err) => {
      console.log(err)
    })
  },
  methods: {

    fetchWeather (e) {
      if (e.key == "Enter") {
        fetch(`${this.url_base}weather?q=${this.query}&units=metric&APPID=${this.api_key}`)
          .then(res => {
            return res.json();
          }).then(this.setResults);
      }
    },
    setResults (results) {
      this.weather = results;
    },
    dateBuilder () {
      let d = new Date();
      let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();

      return `${day} ${date} ${month} ${year}`;
    },





    filter(category){
      if (category == 'ทั้งหมด'){
        this.all = "http://localhost:3000/home"
        axios.get(this.all)
        .then((response) => {
          this.sug_place = response.data
          console.log(this.all)
        })
        .catch((err) => {
          console.log(err)
        })
      }else if (category == 'ร้านอาหาร'){
        this.all = "http://localhost:3000/sugplace/1"
        axios.get(this.all)
        .then((response) => {
          this.sug_place = response.data
          console.log(this.all)
        })
        .catch((err) => {
          console.log(err)
        })
      }else if (category == 'คาเฟ่'){
        this.all = "http://localhost:3000/sugplace/2"
        axios.get(this.all)
        .then((response) => {
          this.sug_place = response.data
          console.log(this.all)
        })
        .catch((err) => {
          console.log(err)
        })
      }else if (category == 'หอพัก'){
        this.all = "http://localhost:3000/sugplace/3"
        axios.get(this.all)
        .then((response) => {
          this.sug_place = response.data
          console.log(this.all)
        })
        .catch((err) => {
          console.log(err)
        })
      }else if (category == 'ตลาด'){
        this.all = "http://localhost:3000/sugplace/4"
        axios.get(this.all)
        .then((response) => {
          this.sug_place = response.data
          console.log(this.all)
        })
        .catch((err) => {
          console.log(err)
        })
      }else if (category == 'สวนสาธารณะ'){
        this.all = "http://localhost:3000/sugplace/5"
        axios.get(this.all)
        .then((response) => {
          this.sug_place = response.data
          console.log(this.all)
        })
        .catch((err) => {
          console.log(err)
        })
      }
    },
  },
};
</script>
