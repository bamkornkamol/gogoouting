<template>
  <div>
    <NavbarAll></NavbarAll>
    <br /><br />

    <h1 class="text-7xl text-center mb-14">รอบรถตู้วันนี้ !!</h1>

    <div class="container">
      <div id="app" class="grid grid-cols-5">
        <div class="col-span-1content-center items-center flex flex-col">
          <p class="text-center">วันนี้จะไปไหน ?</p>
          <select class="my-3 w-60 bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="locations" name="loca">
            <option value="">กดเพื่อเลือก</option>
            <option value="ฟิวเจอร์">ฟิวเจอร์</option>
            <option value="อนุสาวรีย์">อนุสาวรีย์</option>
            <option value="ซีคอน">ซีคอน</option>
            <option value="มีนบุรี">มีนบุรี</option>
          </select>

          <button
            id="ttest"
            @click="location(test())"
            class="bg-neutral-500 hover:bg-neutral-700 text-white font-bold py-2 px-4 rounded-full mt-3"
          >
            ดูเลย !!
          </button>
          <button id="ttest" @click="show_modal = !show_modal; show.push(mybook);test2()" class="mt-60 bg-orange-400 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-3xl">
            รายการจองทั้งหมด
          </button>
        </div>

        <div class="col-span-3 text-center content-center items-center flex flex-col">
          <table class="table-auto">
            <thead>
              <tr>
                <th class="w-96 px-4 py-2 text-3xl">ปลายทาง</th>
                <th class="w-96 px-4 py-2 text-3xl">เวลา</th>
                <th class="w-96 px-4 py-2 text-3xl">ราคา</th>
                <th class="w-32 px-4 py-2 text-3xl"></th>
              </tr>
            </thead>
            <tbody v-for="val in r_van" :key="val">
              <tr>
                <td class="border px-4 py-2">{{ val.location }}</td>
                <td class="border px-4 py-2">{{ val.time }}</td>
                <td class="border px-4 py-2">{{ val.price }}</td>
                <td class="content-start items-start flex p-2">
                  <button @click="book = true; book_round = val.location; book_price = val.price; book_time = val.time; roundvan=val.round_van_id;" class="w-16 bg-emerald-500 text-white rounded-xl">จอง</button>
                </td>
              </tr>
            </tbody>
          </table>
          
        </div>
        <div class="col-span-1">
          
          <div v-if="book==true" class="ml-8 text-base">
            <img class="w-7/12 mb-2 rounded-xl" src="https://cdn.discordapp.com/attachments/859670322160599051/1109914754698465431/12034CA0-C8FD-4D49-AABC-9E666FD17CE7.jpg" alt="">
            <p class="text-emerald-500 my-2">กำลังจอง..</p>
            <p>ปลายทาง : {{this.book_round}}</p>
            <p>เวลา : {{this.book_time}}</p>
            <p>ราคา: {{this.book_price}} </p>
            <input class="mt-4" type="file" name="file" ref="file" @change="handleFileUpload()">
            <button @click="bookvan(roundvan)" class="w-24 bg-emerald-500 text-white rounded-3xl mt-3">ยืนยัน</button>
            <button @click="book=false" class="ml-2 w-24 bg-rose-500 text-white rounded-3xl mt-3">ยกเลิก</button>
          </div>
        </div>
      </div>

      <div class="modal" v-bind:class="{'is-active':show_modal}">
            <div class="modal-background" @click="show_modal = !show_modal; show.splice(0);"  ></div>
            <div class="modal-card w-54" >
                <header class="modal-card-head">
                    <p class="modal-card-title w-full h-8">รายการจองของฉัน</p>
                </header> 
                <section class="modal-card-body flex flex-col justify-center content-center items-center">
                  <div class="flex flex-row space-x-2" >
                    <table class="table-auto">
                      <tr>
                        <th>ปลายทาง</th>
                        <th>วันที่</th>
                        <th>ราคา</th>
                        <th>เวลาออก</th>
                      </tr>
                      <tbody v-for="val in mybook" :key="val">
                        <tr>
                          <td class=" border border-neutral-500 p-2 px-5">{{val.location}}</td>
                          <td class=" border border-neutral-500 p-2 px-5">{{val.date}}</td>
                          <td class=" border border-neutral-500 p-2 px-5">{{val.price}}</td>
                          <td class=" border border-neutral-500 p-2 px-5">{{val.time}}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import NavbarAll from "./NavbarAll.vue";
import axios from "axios";
import Swal from 'sweetalert2'

export default {
  components: {
    NavbarAll,
  },
  data() {
    return {
      r_van: null,
      show_modal: false,
      show: [],
      userId:this.$route.params.userid,
      file:null,
      roundvan:null,
      book_round:null,
      book_time:null,
      book_price:null,
      book:false,
      mybook:null
    };
  },
  created(){
    axios.get("http://localhost:3000/bookVan/" + this.userId)
    .then((response) => {
      this.mybook = response.data
    })
    .catch((err) => {
      console.log(err)
    })
  },
  methods: {
    test2(){
      console.log(this.show)
    },
    handleFileUpload(){
      this.file = this.$refs.file.files[0];
    },
    bookvan(round){
      let formData = new FormData();
      formData.append('img', this.file)
      formData.append('round_van_id', round)

      axios.post("http://localhost:3000/bookVan/"+ this.userId, formData ,{
                headers: {
                'Content-Type': 'multipart/form-data'
                }
            })
            .then((response) => {
                console.log(response)
                Swal.fire({
                    icon: 'success',
                    title: 'ทำรายการสำเร็จ',
                    showConfirmButton: true,
                    timer: 3000
                }).then(() => {
                  this.book = false
                  axios.get("http://localhost:3000/bookVan/" + this.userId)
                  .then((response) => {
                    this.mybook = response.data
                  })
                  .catch((err) => {
                    console.log(err)
                  })
                })
            }).catch((err) => {
                console.log(err)
            })
    },
    test() {
      console.log( document.getElementById("locations").value)
      return document.getElementById("locations").value;
    },
    location(value){
      if(value == 'ฟิวเจอร์'){
        axios.get("http://localhost:3000/van/" + "Future Park")
        .then((response) => {
          this.r_van = response.data;
          console.log(1)
        })
        .catch((err) => {
          console.log(err);
        });
      }else if(value == 'อนุสาวรีย์'){
        axios.get("http://localhost:3000/van/" + "อนุสาวรีย์")
        .then((response) => {
          this.r_van = response.data;
        })
        .catch((err) => {
          console.log(err);
        });
      }else if(value == 'ซีคอน'){
        axios.get("http://localhost:3000/van/" + "ซีคอนสแควร์")
        .then((response) => {
          this.r_van = response.data;
        })
        .catch((err) => {
          console.log(err);
        });
      }else if(value == 'มีนบุรี'){
        axios.get("http://localhost:3000/van/" + "มีนบุรี")
        .then((response) => {
          this.r_van = response.data;
        })
        .catch((err) => {
          console.log(err);
        });
      }
    }
  },
};
</script>
