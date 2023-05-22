<template>
    <div>
        <NavbarAll></NavbarAll>
        <div class="container text-center flex flex-col justify-center content-center items-center w-screen">
            <div class="w-80 h-80 overflow-hidden rounded-full my-8">
                <img class="w-full" :src="'http://localhost:3000/' + profiles[0].image_file_path" alt="">
            </div>
            <!-- <p class="p-8 text-center tracking-widest text-2xl text-gray-400">Bio...</p> -->
            <div class="space-x-2 space-y-2 w-full">
                <button @click="changimg = !changimg" class="tracking-widest bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Change Image</button>
                <button @click="show_modal = !show_modal; show.push(profiles[0]);" class="tracking-widest bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Edit Profile</button>

                <form v-if="changimg==true" class="mt-4 space-x-2">
                    <input type="file" name="file" ref="file" @change="handleFileUpload()">
                    <button @click="editimg()" class="bg-neutral-800 text-white p-2 w-20 hover:bg-neutral-600 rounded-3xl">change</button>
                    <button @click="changimg=false" class="bg-rose-500 text-white p-2 w-20 hover:bg-rose-600 rounded-3xl">cancle</button>
                </form>
                
            </div>
            <!-- Details -->
            <div class="p-2 grid grid-cols-2 mt-3 w-full">
                <div @click="swap = true"  class="justify-center content-center items-center flex flex-col hover:bg-neutral-200 p-3 ">
                    <img style="width: 40px; height:40px;" src="https://cdn.discordapp.com/attachments/859670322160599051/1080815752917045288/user_2.png" alt="">
                </div>
                <div @click="swap = false" class="justify-center content-center items-center flex flex-col hover:bg-neutral-200 p-3 ">
                    <img style="width: 40px; height:40px;" src="https://cdn.discordapp.com/attachments/859670322160599051/1080815706641272852/heart.png" alt="">
                </div>
            </div>

            <hr class="border-t border-neutral-200 border-solid w-full -mt-2">

            <div v-if="this.swap == true"  class="p-8 bg-gray-300 text-left w-full mt-2 rounded-xl">
                <div v-for="profiles in profiles" :key="profiles">
                    <p class="tracking-widest">ชื่อ-นามสกุล : {{profiles.first_name}} {{profiles.last_name}}</p>
                    <p class="tracking-widest">อีเมล : {{profiles.email}}</p>
                </div>
            </div>
            <div v-if="this.swap == false" class="container mt-3">
                <!-- <div class="mb-5">
                    <div class="flex space-x-10 h-15  justify-center content-center items-center flex flex-row">
                        <a id="all" @click="filter('ทั้งหมด')" class="text-black bg-neutral-200 hover:bg-neutral-800 hover:text-white rounded-3xl px-3 py-2 text-2sm font-medium">ทั้งหมด</a>
                        <a id="apart" @click="filter('หอพัก')" class="text-black bg-neutral-200 hover:bg-neutral-800 hover:text-white rounded-3xl px-3 py-2 text-2sm font-medium">หอพัก</a>
                        <a id="cafe" @click="filter('คาเฟ่')" class="text-black bg-neutral-200 hover:bg-neutral-800 hover:text-white rounded-3xl px-3 py-2 text-2sm font-medium">คาเฟ่</a>
                        <a id="rest" @click="filter('ร้านอาหาร')" class="text-black bg-neutral-200 hover:bg-neutral-800 hover:text-white rounded-3xl px-3 py-2 text-2sm font-medium">ร้านอาหาร</a>
                        <a id="market" @click="filter('ตลาด')" class="text-black bg-neutral-200 hover:bg-neutral-800 hover:text-white rounded-3xl px-3 py-2 text-2sm font-medium">ตลาด</a>
                        <a id="public" @click="filter('สวนสาธารณะ')" class="text-black bg-neutral-200 hover:bg-neutral-800 hover:text-white rounded-3xl px-3 py-2 text-2sm font-medium">สวนสาธารณะ</a>
                    </div>
                </div> -->
                <div class="grid grid-cols-5 place-items-center gap-2">
                    <div v-for="(favplaces, index) in favplaces" :key="index">
                    <div>
                        <div  class="max-w-xs rounded overflow-hidden shadow-lg hover:shadow-xl">
                        <button><img  @click="$router.push('/placedetail/' + favplaces.id)" class="w-full" :src="'http://localhost:3000/' + favplaces.image_file_path" alt=""></button>
                        
                        <div class="px-5 py-4">
                            <div class="font-bold text-xl mb-2">{{favplaces.place_name}}</div>
                            <p>{{favplaces.name}}</p>
                            <div class="icon is-size-4 mt-2 mb-2 z-2 flex justify-end content-end items-end">
                            <!-- star ทึบ -->
                            <span >
                                <i class="fa-solid fa-heart" @click="delfav(favplaces.fav_id)"></i>
                            </span>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal" v-bind:class="{'is-active':show_modal}">
            <div class="modal-background" @click="show_modal = !show_modal; show.splice(0);"  ></div>
            <div class="modal-card w-54" v-for="val in show" :key="val">
                <header class="modal-card-head">
                    <p class="modal-card-title w-full h-8">Edit Profile</p>
                </header> 
                <section class="modal-card-body flex flex-col justify-center content-center items-center">
                    <form class="flex flex-col w-full justify-start content-start items-start space-y-3">
                        <label for="edit_fname">First Name</label>
                        <input class="w-full p-2 border border-gray-300 border-solid rounded-lg" type="text" id="edit_fname"  :value="val.first_name">
                        <label for="edit_lname">Last Name</label>
                        <input class="w-full p-2 border border-gray-300 border-solid rounded-lg" type="text" id="edit_lname"  :value="val.last_name">
                        <label for="edit_email">Email</label>
                        <input class="w-full p-2 border border-gray-300 border-solid rounded-lg" type="text" id="edit_email"  :value="val.email">
                        <div class="flex flex-row space-x-5 mt-3">
                            <button @click="editprofile()" class="bg-emerald-500 text-white p-2 w-20 hover:bg-emerald-700 rounded-xl">save</button>
                            <button @click="show_modal = !show_modal" class="bg-rose-500 text-white p-2 w-20 hover:bg-rose-700 rounded-xl">cancle</button>
                        </div>
                    </form>
                   
                </section>
            </div>
        </div>
        
    </div>
</template>

<script>
import NavbarAll from './NavbarAll.vue'
import axios from "axios";
import Swal from 'sweetalert2'

export default {
    components: {
        NavbarAll
    },
    data() {
        return {
            profiles:null,
            favplaces:null,
            userId: this.$route.params.userid,
            show_modal: false,
            show: [],
            swap: true,
            file:null,
            fname:'',
            lnam:'',
            email:'',
            changimg:false,
            category:''
        };
    },
    created(){
        axios.get("http://localhost:3000/profile/" + this.userId)
            .then((response) => {
                this.profiles = response.data.profile
                this.favplaces = response.data.favplace
            })
            .catch((err) => {
                console.log(err)
            })
    },
    methods: {
        test(){
            var fname = this.profiles[0].first_name
            document.getElementById('edit_fname').value = fname;
            console.log(fname)
        },
        handleFileUpload(){
            this.file = this.$refs.file.files[0];
        },
        editimg(){
            let formData = new FormData();
            formData.append('img', this.file)

            axios.put("http://localhost:3000/profile/editimg/"+ this.userId, formData ,{
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
                  this.changimg = false
                })
            }).catch((err) => {
                console.log(err)
            })
        },
        editprofile(){
            let formData = new FormData();
            formData.append('fname', document.getElementById('edit_fname').value)
            formData.append('lname', document.getElementById('edit_lname').value)
            formData.append('email', document.getElementById('edit_email').value)

            axios.put("http://localhost:3000/profile/edit/"+ this.userId, formData ,{
                headers: {
                'Content-Type': 'multipart/form-data'
                }
            })
            .then((response) => {
                console.log(response)
                Swal.fire({
                    icon: 'success',
                    title: 'แก้ไข้สำเร็จ',
                    showConfirmButton: false,
                    timer: 3000
                })
            }).catch((err) => {
                console.log(err)
            })
        },
        delfav(id){
            axios.delete("http://localhost:3000/unfav/" + id)
            .then((response) => {
                console.log(response)
                axios.get("http://localhost:3000/profile/" + this.userId)
                .then((response) => {
                    this.profiles = response.data.profile
                    this.favplaces = response.data.favplace
                })
                .catch((err) => {
                    console.log(err)
                })
            })
            .catch((err) => {
                console.log(err)
            })
        }
        // filter(category){
        //     if (category == 'ทั้งหมด'){
        //         this.category = 'ร้านอาหาร'
        //     }else if (category == 'ร้านอาหาร'){
        //         this.category = 'ร้านอาหาร'
        //     }else if (category == 'คาเฟ่'){
        //         this.category = 'คาเฟ่'
        //     }else if (category == 'หอพัก'){
        //         this.category = 'หอพัก'
        //     }else if (category == 'ตลาด'){
        //         this.category = 'ตลาด'
        //     }else if (category == 'สวนสาธารณะ'){
        //         this.category = 'สวนสาธาระณะ'
        //     }
        // }
    }
}
</script>