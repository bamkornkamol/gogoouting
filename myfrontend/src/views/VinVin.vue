<template>
    <div>
        <NavbarAll></NavbarAll>
        <br><br><br>
        <div class="container">
      <div class="grid grid-cols-3">
        <div class="justify-center content-center items-center flex flex-col">
          <p class="text-7xl text-center m-12 indent-6">มาส่อมเบิ่ง<br>พี่วินกัน!!</p>
          <select name="locations" id="locations"
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
          <br>
          <button id="ttest" @click="test()" class="bg-neutral-500 hover:bg-neutral-700 text-white font-bold py-2 px-4 rounded-full">
            ดูเลย !!
        </button>
        </div>

          <div class="col-span-2 p-12 p grid gap-3 grid-cols-5">
            
            <div v-for="item in people" :key="item">
                <div v-if="item.lo == sta">
                    <div @click="show_modal = !show_modal; show.push(item);" v-if="item.check == true" class="bg-emerald-600 rounded-lg h-32 justify-center content-center items-center flex flex-col"></div>
              <div @click="show_modal = !show_modal; show.push(item);" v-if="item.check == false" class="rounded-lg bg-rose-600 h-32 justify-center content-center items-center flex flex-col"></div>
                </div>
            </div>

          </div>

          <div class="modal" v-bind:class="{'is-active':show_modal}">
            <div class="modal-background" @click="show_modal = !show_modal; show.splice(0);"  ></div>
            <div class="modal-card" style="max-width: 800px;width: 90%;" v-for="val in show" :key="val">
                <header class="modal-card-head">
                    <p v-if="val.check == true" class="modal-card-title bg-emerald-600 w-full h-8"></p>
                    <p v-if="val.check == false" class="modal-card-title bg-rose-600 w-full h-8"></p>
                </header>
                <section class="modal-card-body">
                   <div class="grid grid-cols-2 gap-4">
                    <div class="justify-center content-center items-center flex flex-col">
                      <img class="h-96 rounded-2xl" :src="val.image" alt="Sunset in the mountains">
                    </div>
                    <div>
                      <p>ทะเบียน: {{val.id}}</p>
                      <br>
                      <p>ชื่อ: {{val.firstname}} {{val.last_name}}</p>
                      <br>
                      <p>เบอร์โทรศัพท์: {{val.phone}}</p>
                      <br>
                      <p>มอเตอร์ไซค์: {{val.brand}}</p> <br>
                      <p>ตำแหน่ง: {{val.lo}}</p>
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
    import NavbarAll from '../components/NavbarAll.vue'
    export default {
        components: {
        NavbarAll
    },
    }
</script>