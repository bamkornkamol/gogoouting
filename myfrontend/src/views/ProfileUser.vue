<template>
    <div>
        <NavbarAll></NavbarAll>
        <div class="container text-center flex flex-col justify-center content-center items-center w-screen">
            <div class="w-80 h-80 overflow-hidden rounded-full my-8">
                <img class="w-full" :src="'http://localhost:3000/' + profiles[0].image_file_path" alt="">
            </div>
            <!-- <p class="p-8 text-center tracking-widest text-2xl text-gray-400">Bio...</p> -->
            <button @click="show_modal = !show_modal; show.push(profiles[0]);" class="tracking-widest bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Edit Profile</button>
            <!-- Details -->
            <div class="p-2 grid grid-cols-2 mt-2 w-full">
                <div @click="swap = true" class="justify-center content-center items-center flex flex-col hover:bg-neutral-200 p-3 rounded-xl">
                    <img style="width: 40px; height:40px;" src="https://cdn.discordapp.com/attachments/859670322160599051/1080815752917045288/user_2.png" alt="">
                </div>
                <div @click="swap = false" class="justify-center content-center items-center flex flex-col hover:bg-neutral-200 p-3 rounded-xl">
                    <img style="width: 40px; height:40px;" src="https://cdn.discordapp.com/attachments/859670322160599051/1080815706641272852/heart.png" alt="">
                </div>
            </div>
            <div v-if="this.swap == true"  class="p-8 bg-gray-300 text-left w-full mt-2 rounded-xl">
                <div v-for="profiles in profiles" :key="profiles">
                    <p class="tracking-widest">ชื่อ-นามสกุล : {{profiles.first_name}} {{profiles.last_name}}</p>
                    <p class="tracking-widest">อีเมล : {{profiles.email}}</p>
                </div>
            </div>
            <div v-if="this.swap == false" class="container mt-3">
                <div class="grid grid-cols-5 place-items-center gap-2">
                    <div v-for="(favplaces, index) in favplaces" :key="index">
                    <div>
                        <div  class="max-w-xs rounded overflow-hidden shadow-lg hover:shadow-xl">
                        <button><img  @click="$router.push('/placedetail/' + favplaces.id)" class="w-full" :src="'http://localhost:3000/' + favplaces.image_file_path" alt=""></button>
                        
                        <div class="px-5 py-4">
                            <div class="font-bold text-xl mb-2">{{favplaces.place_name}}</div>
                            <p>{{favplaces.name}}</p>
                            <!-- <p class="text-gray-700 text-base">
                            {{favplaces.desc}}
                            </p> -->
                            <div class="icon is-size-4 mt-2 mb-2 z-2 flex justify-end content-end items-end">
                            <!-- star ทึบ -->
                            <span >
                                <i class="fa-solid fa-heart"></i>
                            </span>

                            <!-- star ใส -->
                            <!-- <span>
                                <i class="fa-regular fa-heart"></i>
                            </span> -->
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
            <div class="modal-card w-60" v-for="val in show" :key="val">
                <header class="modal-card-head">
                    <p class="modal-card-title w-full h-8">Edit Profile</p>
                </header> 
                <section class="modal-card-body">
                    <form class="flex flex-col w-full justify-center content-center items-center space-y-3">
                        <input class="w-8/12 p-2 border border-gray-300 border-solid rounded-lg" type="text" id="edit_fname" :value="val.first_name">
                        <input class="w-8/12 p-2 border border-gray-300 border-solid rounded-lg" type="text" id="edit_lname" :value="val.last_name">
                        <input class="w-8/12 p-2 border border-gray-300 border-solid rounded-lg" type="text" id="edit_email" :value="val.email">
                        <button class="bg-emerald-500 text-white p-2 w-20 hover:bg-emerald-700 rounded-xl">save</button>
                    </form>
                   
                </section>
            </div>
          </div>
    </div>
</template>

<script>
import NavbarAll from '../components/NavbarAll.vue'
import axios from "axios";

export default {
    components: {
        NavbarAll
    },
    data() {
        return {
            profiles:null,
            favplaces:null,
            userId:3,
            show_modal: false,
            show: [],
            swap: true,
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
        }
    }
}
</script>