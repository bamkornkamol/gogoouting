<template>
    <div>
        <NavbarAll></NavbarAll>
        <br><br><br>
        <div class="container">
      <div class="grid grid-cols-3">
        <div class="justify-center content-center items-center flex flex-col">
          <p class="text-7xl text-center m-12 indent-6">มาส่อมเบิ่ง<br>พี่วินกัน!!</p>
          <select v-model="$v.myselect.$model" name="locations" id="locations"
            class="w-60 bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
            <option value="">กดเพื่อเลือก</option>
            <option value="RNP">RNP</option>
            <option value="Billian">Billian</option>
            <option value="AJPark">AJ Park</option>
            <option value="เกกี">เกกี</option>
            <option value="ประตูข้างวิศวะ">ประตูข้างวิศวะ</option>
            <option value="3แยกวิศวะ">3 แยกวิศวะ</option>
            <option value="คณะวิทย์">คณะวิทย์</option>
            <option value="FBT">FBT</option>
            <option value="จินดา">จินดา</option>
            <option value="ตลาดนัดสุวรรณภูมิ">ตลาดนัดสุวรรณภูมิ</option>
          </select>
          <template v-if=" $v.myselect.$error">
            <p class="text-rose-500" v-if="!$v.myselect.required">กรุณาเลือกข้อมูลให้ถูกต้อง</p>
          </template>
          <br>
          <button id="ttest" @click="location(test()); check=true" class="bg-neutral-500 hover:bg-neutral-700 text-white font-bold py-2 px-4 rounded-full">
            ดูเลย !!
        </button>
        </div>
        
          <div class="col-span-2 p-12 grid grid-row-2">
            <p v-if="check==true" class="text-3xl mb-5">{{test()}}</p>
            <div class="grid gap-3 grid-cols-5">
              <div v-for="vin in vin" :key="vin">
                    <div @click="show_modal = !show_modal; show.push(vin);" v-if="vin.status == '0'" class="bg-emerald-600 rounded-lg h-36 justify-center content-center items-center flex flex-col">
                      <div class="w-9/12 h-28 overflow-hidden rounded-full">
                        <img class="w-full" :src="'http://localhost:3000/' + vin.image_file_path" alt="">
                      </div>
                    </div>
                    <div @click="show_modal = !show_modal; show.push(vin);" v-if="vin.status == '1'" class="rounded-lg bg-rose-600 h-36 justify-center content-center items-center flex flex-col">
                      <div class="w-9/12 h-28 overflow-hidden rounded-full">
                        <img class="w-full" :src="'http://localhost:3000/' + vin.image_file_path" alt="">
                      </div>
                    </div>
              </div>
            </div>
          </div>

          <div class="modal" v-bind:class="{'is-active':show_modal}">
            <div class="modal-background" @click="show_modal = !show_modal; show.splice(0);"  ></div>
            <div class="modal-card" style="max-width: 800px;width: 90%;" v-for="val in show" :key="val">
                <header class="modal-card-head">
                    <p v-if="val.status == '0'" class="modal-card-title bg-emerald-600 w-full h-8"></p>
                    <p v-if="val.status == '1'" class="modal-card-title bg-rose-600 w-full h-8"></p>
                </header>
                <section class="modal-card-body">
                   <div class="grid grid-cols-2 gap-4">
                    <div class="justify-center content-center items-center flex flex-col">
                      <img class="h-96 rounded-2xl" :src="'http://localhost:3000/' + val.image_file_path" alt="">
                    </div>
                    <div>
                      <p>ทะเบียน: {{val.bike_id}}</p>
                      <br>
                      <p>ชื่อ: {{val.fname}} {{val.lname}}</p>
                      <br>
                      <p>เพศ : {{val.sex}}</p>
                      <br>
                      <p>เบอร์โทรศัพท์: {{val.phone}}</p>
                      <br>
                      <p>มอเตอร์ไซค์: {{val.model}}</p> <br>
                      <p>ตำแหน่ง: {{val.location}}</p>
                    </div>
                   </div>
                   
                </section>
            </div>
          </div>

      </div>
    </div>
    </div>
    
</template>

<script>
    import NavbarAll from './NavbarAll.vue'
    import axios from "axios";
    import { required} from 'vuelidate/lib/validators'

    export default {
        components: {
          NavbarAll
        },
        data() {
          return {
            vin:[],
            show_modal: false,
            show: [],
            check:false,
            myselect: ''
          };
        },
        validations: {
          myselect: {
            required
          }
        },
        create(){
          
        },
        methods:{
          submit(){
            this.$v.$touch();
              if (!this.$v.$invalid) {
                  let formData = new FormData();
                  formData.append("myselect", this.myselect);
          }},
          test(){
            return document.getElementById('locations').value
          },
          location(value) {
            if (value == 'RNP'){
              axios.get("http://localhost:3000/vin/" + 'RNP')
              .then((response) => {
                this.vin = response.data
              })
              .catch((err) => {
                console.log(err)
              })
            }else if (value == 'Billian'){
              axios.get("http://localhost:3000/vin/" + 'Billian')
              .then((response) => {
                this.vin = response.data
              })
              .catch((err) => {
                console.log(err)
              })
            }else if (value == 'AJPark'){
              axios.get("http://localhost:3000/vin/" + 'AJ Park')
              .then((response) => {
                this.vin = response.data
              })
              .catch((err) => {
                console.log(err)
              })
            }else if (value == 'เกกี'){
              axios.get("http://localhost:3000/vin/" + 'เกกี')
              .then((response) => {
                this.vin = response.data
              })
              .catch((err) => {
                console.log(err)
              })
            }else if (value == 'ประตูข้างวิศวะ'){
              axios.get("http://localhost:3000/vin/" + 'ประตูข้างวิศวะ')
              .then((response) => {
                this.vin = response.data
              })
              .catch((err) => {
                console.log(err)
              })
            }else if (value == '3แยกวิศวะ'){
              axios.get("http://localhost:3000/vin/" + '3 แยกวิศวะ')
              .then((response) => {
                this.vin = response.data
              })
              .catch((err) => {
                console.log(err)
              })
            }else if (value == 'คณะวิทย์'){
              axios.get("http://localhost:3000/vin/" + 'คณะวิทย์')
              .then((response) => {
                this.vin = response.data
              })
              .catch((err) => {
                console.log(err)
              })
            }else if (value == 'FBT'){
              axios.get("http://localhost:3000/vin/" + 'FBT')
              .then((response) => {
                this.vin = response.data
              })
              .catch((err) => {
                console.log(err)
              })
            }else if (value == 'จินดา'){
              axios.get("http://localhost:3000/vin/" + 'จินดา')
              .then((response) => {
                this.vin = response.data
              })
              .catch((err) => {
                console.log(err)
              })
            }else if (value == 'ตลาดนัดสุวรรณภูมิ'){
              axios.get("http://localhost:3000/vin/" + 'ตลาดนัดสุวรรณภูมิ')
              .then((response) => {
                this.vin = response.data
              })
              .catch((err) => {
                console.log(err)
              })
            }
          }
        }
    }
</script>