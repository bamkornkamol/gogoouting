<template>
    <div class="justify-center content-center items-center flex flex-col">
        <br><br>
        <div class="mb-20">
            <div @click="swap()" v-if="profiles[0].status == 0" class=" justify-center content-center items-center flex flex-col">
                <button class="block w-72 h-72 border-2 border-solid no-underline text-6xl bg-lime-500 hover:bg-lime-600 text-white font-bold" style="border-radius: 50%;">ว่าง</button>
            </div> 
            <div @click="swap()" v-if="profiles[0].status == 1" class="justify-center content-center items-center flex flex-col">
                <button class="block w-72 h-72 border-2 border-solid no-underline text-6xl bg-rose-500 hover:bg-rose-600 text-white font-bold" style="border-radius: 50%;">ไม่ว่าง</button>
            </div>
        </div>
        <div class="grid grid-cols-2">
            <div class="w-72 h-72 rounded-xl overflow-hidden">
                <img class="w-full" :src="'http://localhost:3000/' + profiles[0].image_file_path" alt="">
            </div>
            
            <div class="p-5">
                <p class="text-lg">ชื่อ: {{ profiles[0].fname }} {{ profiles[0].lname }}</p>
                <p class="text-lg">ทะเบียน: {{profiles[0].bike_id}}</p>
                <p class="text-lg">เพศ: {{profiles[0].sex}}</p>
                <p class="text-lg">เบอร์โทรศัพท์: {{profiles[0].phone}}</p>
                <p class="text-lg">มอเตอร์ไซค์: {{profiles[0].model}}</p>
                <p class="text-lg">ตำแหน่ง: {{profiles[0].location}}</p>
            </div>
        </div>
        
        
        

        <br><br>

        <router-link to="/login_riders">
            <a onclick="" class="bg-rose-400 text-white font-bold py-2 px-5 rounded-full">ออกจากระบบ</a>
        </router-link>
    </div>

</template>

<script defer src="https://use.fontawesome.com/releases/v5.14.0/js/all.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
<script>
import axios from "axios";
    export default {
        data() {
            return {
                profiles:null,
                userId: this.$route.params.userid
            }
        },
        created(){
            axios.get("http://localhost:3000/vin/profile/" + this.userId)
            .then((response) => {
                this.profiles = response.data
            })
            .catch((err) => {
                console.log(err)
            })
        },
        methods: {
            swap(){
                axios.put("http://localhost:3000/setvin/" + this.userId)
                .then((response) => {
                    this.profiles = response.data
                    axios.get("http://localhost:3000/vin/profile/" + this.userId)
                    .then((response) => {
                        this.profiles = response.data
                    })
                    .catch((err) => {
                        console.log(err)
                    })
                })
                .catch((err) => {
                    console.log(err)
                })
            }
        }
    }
</script>