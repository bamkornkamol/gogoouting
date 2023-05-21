<template>

    <div>
        <NavbarAll></NavbarAll>
        <br><br>
        <div class="grid grid-cols-3">
            <div class="pl-5 col-span-2">
               
                <div class="container pl-10">
                    <div class="grid grid-cols-3">
                        <div class="col-span-1 w-full justify-center content-center items-center flex space-x-5">
                            <img class="w-96 rounded-3xl" :src="'http://localhost:3000/' + detail[0].image_file_path" alt="">
                        </div>
                        <div class="col-span-2 px-5">
                            <p class="text-6xl">{{detail[0].place_name}}</p>
                            <p class="bg-neutral-200 w-24 text-center p-2 rounded-3xl m-3 mt-5">{{detail[0].name}}</p>
                            <div class="w-9/12 ml-3 mt-5"><p>ที่อยู่ : {{detail[0].place_location}}</p></div>
                        </div>
                    </div> 
                </div>

                <div class="container mt-8 pl-10">
                    <div class="bg-gray-300 rounded-2xl w-11/12 h-80 mt-5">
                        <iframe class="h-full w-full" id="map" :src="'https://maps.google.com/maps?q='+ detail[0].place_location +'&t=&z=15&ie=UTF8&iwloc=&output=embed'"
                frameborder="0" allowfullscreen></iframe>
                    </div>
                </div>
            </div>

            <div class="">
                <p class="text-xl font-black mb-3">แสดงความคิดเห็น</p>
                <form class="border-2 border-neutral-500 rounded-xl p-3 w-11/12">
                    <div class="flex flex-row space-x-2">
                        <p class="ml-1">คะแนน :</p>
                        <input id="ksk" type="radio" name="bank" class="ksk hidden" value="1">
                        <label for="ksk" class="img_ksk opacity-50">
                            1<i class="fa-solid fa-star"></i>
                        </label>

                        <input id="ktb" type="radio" name="bank" class="ktb hidden" value="2">
                        <label for="ktb" class="img_ktb opacity-50">
                            2<i class="fa-solid fa-star"></i>
                        </label>
                        
                        <input id="scb" type="radio" name="bank" class="scb hidden" value="3">
                        <label for="scb" class="img_scb opacity-50">
                            3<i class="fa-solid fa-star"></i>
                        </label>

                        <input id="bkk" type="radio" name="bank" class="bkk hidden" value="4">
                        <label for="bkk" class="img_bkk opacity-50">
                            4<i class="fa-solid fa-star"></i>
                        </label>

                        <input id="bkk2" type="radio" name="bank" class="bkk2 hidden" value="5">
                        <label for="bkk2" class="img_bkk2 opacity-50">
                            5<i class="fa-solid fa-star"></i>
                        </label>
                    </div>
                    <textarea id="rew" class="bg-neutral-200 rounded-xl p-3 w-full h-16 mt-2" placeholder="แสดงความคิดเห็นที่นี่.."></textarea>
                    <button @click="addrv()" class="bg-neutral-800 text-white p-2 w-20 hover:bg-neutral-400 rounded-xl">รีวิว</button>
                </form>
                

                <div v-for="review in reviews" :key="review" >
                    <div class="w-11/12 bg-neutral-200 rounded-xl my-3 p-2 flex flex-row">
                        <div style="width:70px; height:60px" class="rounded-full overflow-hidden mr-4">
                            <img class="w-full" :src="'http://localhost:3000/' + review.image_file_path" alt="">
                        </div>
                        <div class="w-full">
                            <p class="">{{review.review}}</p>
                            <p class="text-sm"><i class="fa-solid fa-star"></i> {{review.rate}}</p>
                            <div class="grid grid-cols-2 w-full">
                                <div class="w-full">
                                    <p class="text-xs text-neutral-400">by {{review.first_name}} {{review.last_name}}</p>
                                </div>
                                
                                <div class="flex flex-row justify-end content-end items-end space-x-3 mr-2">
                                    <button @click="del(review.id)"><i class="fa-solid fa-trash"></i></button>
                                    <!-- <button><i class="fa-solid fa-pen-to-square"></i></button> -->
                                    <button @click="addlike(review.id)"><i class="far fa-heart"></i> {{review.like}} </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>
<style>
    input.ksk:checked~.img_ksk {
        opacity: 100%;
    }

    input.ktb:checked~.img_ktb {
        opacity: 100%;
    }

    input.scb:checked~.img_scb {
        opacity: 100%;
    }

    input.bkk:checked~.img_bkk {
        opacity: 100%;
    }

    input.bkk2:checked~.img_bkk2 {
        opacity: 100%;
    }
</style>
<script>
    import NavbarAll from '../components/NavbarAll.vue'
    // import Swal from 'sweetalert2'
    import axios from "axios";
    export default {
        components: {
            NavbarAll
        },data() {
            return {
                detail:null,
                reviews:null,
                userId:3,
            };
        },
        created(){
            axios.get("http://localhost:3000/place/detail/" + this.$route.params.placeId)
            .then((response) => {
                this.detail = response.data.place_dt
                this.reviews = response.data.review
            })
            .catch((err) => {
                console.log(err)
            })
        },
        methods:{
            test(){
                console.log('del')
            },
            addrv(){
                console.log(document.querySelector('input[name="bank"]:checked').value)
                console.log(document.getElementById('rew').value)
                console.log(this.detail[0].id)
                console.log(this.userId)
                
                let formData = new FormData();
                formData.append('star', document.querySelector('input[name="bank"]:checked').value)
                formData.append('review', document.getElementById('rew').value)

                console.log(formData)

                axios.post("http://localhost:3000/review/"+ this.detail[0].id +"/"+ this.userId, formData ,{
                    headers: {
                    'Content-Type': 'multipart/form-data'
                    }
                })
                .then((response) => {
                    console.log(response)
                }).catch((err) => {
                    console.log(err)
                })
            },
            del(id){
                axios.delete("http://localhost:3000/review/delete/" + id)
                .then((response) => {
                    console.log(response)
                    location.reload()
                })
                .catch((err) => {
                    console.log(err)
                })
            },
            addlike(rwid){
                axios.put("http://localhost:3000/review/addLike/"+rwid)
                .then((response) => {
                    let selectedRw = this.reviews.filter((e) => e.id === rwid)[0];
                    selectedRw.like = response.data.like;
                })
                .catch((err) => {
                    console.log(err);
                });
            }
        }
    }
</script>