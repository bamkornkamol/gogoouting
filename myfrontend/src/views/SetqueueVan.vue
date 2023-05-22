<template>
    <div class="grid grid-cols-3 h-screen">
        <div class=" justify-center content-center items-center flex flex-col">
            <div>
                <label class="" for="">สถานที่ปลายทาง : </label>
                <select
                    class="w-60 bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="place">
                    <option value="">กดเพื่อเลือก</option>
                    <option value="Future Park">ฟิวเจอร์</option>
                    <option value="อนุสาวรีย์">อนุสาวรีย์</option>
                    <option value="ซีคอนสแควร์">ซีคอน</option>
                    <option value="มีนบุรี">มีนบุรี</option>
                </select>
            </div>
            <br>
            <div>
                <label class="" for="">เวลาไป : </label>
                <input id="time" class="w-48 px-3 py-2 border border-slate-600 rounded-xl focus:outline-0" type="time" placeholder="">
            </div>
            <br>
            <div>
                <label class="" for="">ราคา : </label>
                <input id="price" class="w-48 px-3 py-2 border border-slate-600 rounded-xl focus:outline-0" type="text" placeholder="">
            </div>
            <br>
            <div>
                <label class="" for="">จำนวนผู้โดยสาร : </label>
                <input id="seat" class="w-32 px-3 py-2 border border-slate-600 rounded-xl focus:outline-0" type="number" placeholder="">
            </div>
            <br>
            <div>
                <label class="" for="">ทะเบียนรถ : </label>
                <input id="van_id" class="w-32 px-3 py-2 border border-slate-600 rounded-xl focus:outline-0" type="text" placeholder="">
            </div>
            <br>
            <a @click="addRound();" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">ยืนยันการเพิ่ม</a>
        </div>

        <div  class="col-span-2 p-5 justify-center content-center items-center flex flex-col">
            <table class="table-auto">
              <thead>
                <tr>
                  <th class="w-96 px-4 py-2 text-3xl">ปลายทาง</th>
                  <th class="w-96 px-4 py-2 text-3xl">เวลา</th>
                  <th class="w-96 px-4 py-2 text-3xl">ราคา</th>
                  <th class="w-96 px-4 py-2 text-3xl">ที่นั่ง</th>
                  <th class="w-96 px-4 py-2 text-3xl">ทะเบียน</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody v-for="val in r_van" :key="val">
                <tr>
                  <td class="border px-4 py-2">{{val.location}}</td>
                  <td class="border px-4 py-2">{{val.time}}</td>
                  <td class="border px-4 py-2">{{val.price}}</td>
                  <td class="border px-4 py-2">{{val.seat}}</td>
                  <td class="border px-4 py-2">{{val.van_id}}</td>
                  <td class="border px-4 py-2">
                    <i @click="show_modal = !show_modal; show.push(val);" class="fa-solid fa-pen-to-square"></i>
                  </td>
                  <td class="border px-4 py-2">
                    <i @click="del(val.round_van_id)" class="fa-solid fa-trash"></i>
                  </td>
                </tr>
              </tbody>
            </table>
            <br><br><br>
            <router-link to="/login_van">
                <a onclick="" class="bg-rose-400 text-white font-bold py-2 px-5 rounded-full ml-6">ออกจากระบบ</a>
            </router-link>
        </div>
        <div class="modal" v-bind:class="{'is-active':show_modal}">
            <div class="modal-background" @click="show_modal = !show_modal; show.splice(0);"  ></div>
            <div class="modal-card w-54" v-for="val in show" :key="val">
                <header class="modal-card-head">
                    <p class="modal-card-title w-full h-8">Edit Profile</p>
                </header> 
                <section class="modal-card-body flex flex-col justify-center content-center items-center">
                    <form class="flex flex-col w-full justify-start content-start items-start space-y-3">
                        <label for="edit_fname">ปลายทาง</label>
                        <select
                            class="w-60 bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="e_place"  :value="val.location">
                            <option value="">กดเพื่อเลือก</option>
                            <option value="Future Park">ฟิวเจอร์</option>
                            <option value="อนุสาวรีย์">อนุสาวรีย์</option>
                            <option value="ซีคอนสแควร์">ซีคอน</option>
                            <option value="มีนบุรี">มีนบุรี</option>
                        </select>
                        <label for="edit_lname">เวลา</label>
                        <input class="w-full p-2 border border-gray-300 border-solid rounded-lg" type="time" id="e_time"  :value="val.time">
                        <label for="edit_email">ราคา</label>
                        <input class="w-full p-2 border border-gray-300 border-solid rounded-lg" type="text" id="e_price"  :value="val.price">
                        <label for="edit_email">ที่นั่ง</label>
                        <input class="w-full p-2 border border-gray-300 border-solid rounded-lg" type="text" id="e_seat"  :value="val.seat">
                        <label for="edit_email">ทะเบียน</label>
                        <input class="w-full p-2 border border-gray-300 border-solid rounded-lg" type="text" id="e_van_id"  :value="val.van_id">
                        <div class="flex flex-row space-x-5 mt-3">
                            <button @click="editround(val.round_van_id)" class="bg-emerald-500 text-white p-2 w-20 hover:bg-emerald-700 rounded-xl">save</button>
                            <button @click="show_modal = !show_modal" class="bg-rose-500 text-white p-2 w-20 hover:bg-rose-700 rounded-xl">cancle</button>
                        </div>
                    </form>
                   
                </section>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
    import Swal from 'sweetalert2'
    export default {
        data() {
            return {
                userId:this.$route.params.userid,
                r_van:null,
                show_modal: false,
                show: [],
            }
        },
        created(){
            axios.get("http://localhost:3000/van/round/" + this.userId)
            .then((response) => {
                this.r_van = response.data
            })
            .catch((err) => {
                console.log(err)
            })
        },
        methods: {
            addRound(){
                let formData = new FormData();
                formData.append('time', document.getElementById('time').value)
                formData.append('location',document.getElementById('place').value)
                formData.append('price',document.getElementById('price').value)
                formData.append('seat', document.getElementById('seat').value)
                formData.append('van_id', document.getElementById('van_id').value)
                axios.post("http://localhost:3000/setround/"+this.userId, formData ,{
                        headers: {
                        'Content-Type': 'multipart/form-data'
                        }
                    })
                    .then((response) => {
                        console.log(response)
                        Swal.fire({
                            position: 'top-start',
                            icon: 'success',
                            title: 'เพิ่งรอบรถสำเร็จ',
                            showConfirmButton: false,
                            timer: 1500
                        }).then(() => {
                            axios.get("http://localhost:3000/van/round/" + this.userId)
                            .then((response) => {
                                this.r_van = response.data
                            })
                            .catch((err) => {
                                console.log(err)
                            })
                        })
                    }).catch((err) => {
                        console.log(err)
                    })
            },
            editround(round){
                let formData = new FormData();
                formData.append('time', document.getElementById('e_time').value)
                formData.append('location',document.getElementById('e_place').value)
                formData.append('price',document.getElementById('e_price').value)
                formData.append('seat', document.getElementById('e_seat').value)
                formData.append('van_id', document.getElementById('e_van_id').value)
                axios.put("http://localhost:3000/round/edit/" + round, formData ,{
                        headers: {
                        'Content-Type': 'multipart/form-data'
                        }
                    })
                    .then((response) => {
                        console.log(response)
                        Swal.fire({
                            position: 'top-start',
                            icon: 'success',
                            title: 'แก้ไขสำเร็จ',
                            showConfirmButton: false,
                            timer: 1500
                        }).then(() => {
                            axios.get("http://localhost:3000/van/round/" + this.userId)
                            .then((response) => {
                                this.r_van = response.data
                            })
                            .catch((err) => {
                                console.log(err)
                            })
                        })
                    }).catch((err) => {
                        console.log(err)
                    })
            },
            del(round){
                axios.delete("http://localhost:3000/round/delete/" + round)
                .then((response) => {
                    console.log(response)
                    location.reload()
                })
                .catch((err) => {
                    console.log(err)
                })
            }
        },
    }
</script>