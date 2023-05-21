<template>
  <div>
    <NavbarAll></NavbarAll>
    <br /><br />

    <h1 class="text-8xl text-center">รอบรถตู้วันนี้ !!</h1>
    <br /><br />
    <div class="container">
      <div id="app" class="grid grid-cols-3">
        <div
          class="grid grid-rows-3 justify-center content-center items-center flex flex-center"
        >
          <p class="text-center">วันนี้จะไปไหน ?</p>
          <select
            class="w-60 bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="locations"
            name="loca"
          >
            <option value="">กดเพื่อเลือก</option>
            <option value="ฟิวเจอร์">ฟิวเจอร์</option>
            <option value="อนุสาวรีย์">อนุสาวรีย์</option>
            <option value="ซีคอน">ซีคอน</option>
            <option value="มีนบุรี">มีนบุรี</option>
          </select>
          <br />
          <br />
          <button
            id="ttest"
            @click="location(test())"
            class="bg-neutral-500 hover:bg-neutral-700 text-white font-bold py-2 px-4 rounded-full"
          >
            ดูเลย !!
          </button>
          <br /><br /><br />
          <button
            id="ttest"
            @click="test()"
            class="bg-neutral-500 hover:bg-neutral-700 text-white font-bold py-2 px-4 rounded-3xl"
          >
            รายการจองทั้งหมด
          </button>
        </div>

        <div
          class="col-span-2 text-center content-center items-center flex flex-col"
        >
          <table class="table-auto">
            <thead>
              <tr>
                <th class="w-96 px-4 py-2 text-3xl">ปลายทาง</th>
                <th class="w-96 px-4 py-2 text-3xl">เวลา</th>
                <th class="w-96 px-4 py-2 text-3xl">ราคา</th>
                <th class="w-96 px-4 py-2 text-3xl"></th>
              </tr>
            </thead>
            <tbody v-for="val in r_van" :key="val">
              <tr>
                <td class="border px-4 py-2">{{ val.location }}</td>
                <td class="border px-4 py-2">{{ val.time }}</td>
                <td class="border px-4 py-2">{{ val.price }}</td>
                <td class="content-start items-start flex p-2">
                  <button @click="show_modal = !show_modal; show.push(val);" class="w-16 bg-emerald-500 text-white rounded-xl">จอง</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="modal" v-bind:class="{'is-active':show_modal}">
            <div class="modal-background" @click="show_modal = !show_modal; show.splice(0);"  ></div>
            <div class="modal-card w-60" v-for="val in show" :key="val">
                <header class="modal-card-head">
                    <p class="modal-card-title w-full h-8">ชำระเงิน</p>
                </header> 
                <section class="modal-card-body">
                  <div class="grid grid-cols-2">
                    <img class="w-96" src="https://cdn.discordapp.com/attachments/859670322160599051/1109914754698465431/12034CA0-C8FD-4D49-AABC-9E666FD17CE7.jpg" alt="">
                    <form class="space-y-3 p-5">
                        <p>{{val.location}}</p>
                        <p>{{val.time}}</p>
                        <p>{{val.price}}</p>
                        <p>หลักฐานการขำระเงิน</p>
                        <div @click="bookvan(val.round_van_id)" class="bg-emerald-500 text-white p-2 w-20 hover:bg-emerald-700 rounded-3xl mt-5">ยืนยัน</div>
                    </form>
                  </div>
                </section>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarAll from "../components/NavbarAll.vue";
import axios from "axios";
// import Swal from 'sweetalert2'

export default {
  components: {
    NavbarAll,
  },
  data() {
    return {
      r_van: null,
      show_modal: false,
      show: [],
      userId:3,
      file:null
    };
  },
  methods: {
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
