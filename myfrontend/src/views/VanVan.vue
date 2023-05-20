<template>
  <div>
    <NavbarAll></NavbarAll>
    <br /><br />

    <h1 class="text-8xl text-center">รอบรถตู้วันนี้ !!</h1>
    <br><br>
    <div class="container">
      <div id="app" class="grid grid-cols-3">

        <div class="grid grid-rows-3 justify-center content-center items-center flex flex-center">
          <p class="text-center">วันนี้จะไปไหน ?</p>
          <select class="w-60 bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="locations" name="loca">
            <option value="">กดเพื่อเลือก</option>
            <option value="ฟิวเจอร์">ฟิวเจอร์</option>
            <option value="อนุสาวรีย์">อนุสาวรีย์</option>
            <option value="ซีคอน">ซีคอน</option>
            <option value="มีนบุรี">มีนบุรี</option>
          </select>
          <br> <br>
          <button id="ttest" @click="test()" class="bg-neutral-500 hover:bg-neutral-700 text-white font-bold py-2 px-4 rounded-full">
            ดูเลย !!
          </button> <br><br><br>
          <button id="ttest" @click="test()" class="bg-neutral-500 hover:bg-neutral-700 text-white font-bold py-2 px-4 rounded-3xl">
            รายการจองทั้งหมด
          </button>
        </div>

        <div class="col-span-2 text-center content-center items-center flex flex-col">
          <table class="table-auto">
            <thead>
              <tr>
                <th class="w-96 px-4 py-2 text-3xl">ปลายทาง</th>
                <th class="w-96 px-4 py-2 text-3xl">เวลา</th>
                <th class="w-96 px-4 py-2 text-3xl">ราคา</th>
              </tr>
            </thead>
            <tbody v-for="val in r_van" :key="val">
              <tr v-if="val.place == sta">
                <td class="border px-4 py-2">{{ val.place }}</td>
                <td class="border px-4 py-2">{{ val.time }}</td>
                <td class="border px-4 py-2">{{ val.price }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarAll from "../components/NavbarAll.vue";
export default {
  components: {
    NavbarAll,
  },
  test(){
          var status = document.getElementById('locations').value;
          this.sta = status;
          console.log(this.sta);
        }
};
</script>
