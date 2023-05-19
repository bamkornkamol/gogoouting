<template>
    <div class="grid grid-cols-3 h-screen">
        <div class=" justify-center content-center items-center flex flex-col">
            <div>
                <label class="" for="">สถานที่ปลายทาง :</label>
                <select
                    class="w-60 bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="place">
                    <option value="">กดเพื่อเลือก</option>
                    <option value="ฟิวเจอร์">ฟิวเจอร์</option>
                    <option value="อนุสาวรีย์">อนุสาวรีย์</option>
                    <option value="ซีคอน">ซีคอน</option>
                    <option value="มีนบุรี">มีนบุรี</option>
                </select>
            </div>
            <br>
            <div>
                <label class="" for="">เวลาไป :</label>
                <input id="time" class="w-48 px-3 py-2 border border-slate-600 rounded-xl focus:outline-0" type="text" placeholder="">
            </div>
            <br>
            <div>
                <label class="" for="">ราคา :</label>
                <input id="price" class="w-48 px-3 py-2 border border-slate-600 rounded-xl focus:outline-0" type="text" placeholder="">
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
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(val,i) in r_van" :key="val">
                  <td class="border px-4 py-2">{{val.place}}</td>
                  <td class="border px-4 py-2">{{val.time}}</td>
                  <td class="border px-4 py-2">{{val.price}}</td>
                  <td class="border px-4 py-2">
                    <i @click="r_van.splice(i,1)"  class="fa-solid fa-trash"></i>
                  </td>
                </tr>
                <tr v-for="(new_r,i) in add_r" :key="new_r">
                    <td class="border px-4 py-2">{{new_r.place}}</td>
                    <td class="border px-4 py-2">{{new_r.time}}</td>
                    <td class="border px-4 py-2">{{new_r.price}}</td>
                    <td class="border px-4 py-2">
                        <i @click="add_r.splice(i,1)" class="fa-solid fa-trash"></i>
                    </td>
                </tr>
              </tbody>
            </table>
            <br><br><br>
            <a href="/templates/login_van.html" onclick="" class="bg-rose-400 text-white font-bold py-2 px-5 rounded-full ml-6">ออกจากระบบ</a>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                r_van: '',
                place: '',
                time: '',
                price: ''
            }
        },
        methods: {
            addRound(){
                var ntime = document.getElementById('time').value;
                var nprice = document.getElementById('price').value;
                var nplace = document.getElementById('place').value;
                this.ary.place = nplace;
                this.ary.time = ntime;
                this.ary.price = nprice;

                this.r_van.push(this.ary); 

                console.log(this.add_r);
            },

        },
    }
</script>