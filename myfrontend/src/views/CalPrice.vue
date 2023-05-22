<template>
<div>
    <NavbarAll></NavbarAll>
    <div class="container w-11/12 mt-5">
        <h1 class="text-4xl">คำนวณค่าโดยสาร</h1> <br>
        <div class="grid grid-cols-2 gap-6">
            <div class="bg-neutral-400 justify-center content-center items-center flex flex-col p-20 rounded-2xl">
                <p class="text-8xl mb-12">TAXI</p>
                <br>
                <div class="justify-center content-center items-center flex flex-row">
                    <input id='dest' class="rounded-3xl bg-zinc-200 w-64 h-9 p-6 mr-2" type="text">
                    <p class="mr-3 text-xl">ไป</p>
                    <input id='dest' class="rounded-3xl bg-zinc-200 w-64 h-9 p-6 mr-2" type="text">
                </div>
                <br>
                <button onclick="" class="bg-neutral-500 hover:bg-neutral-700 text-white font-bold py-2 px-4 rounded-full">
                    คิดเลย
                </button>
                <br>
                <p class="text-6xl">100 บาท</p>
            </div>
            <div class="bg-neutral-500 justify-center content-center items-center flex flex-col p-20 rounded-2xl">
                <p class="text-8xl mb-12">BIKE</p>
                <br>
                <div class="justify-center content-center items-center flex flex-row">
                    <input id='dest' class="rounded-3xl bg-zinc-200 w-64 h-9 p-6 mr-2" type="text">
                    <p class="mr-3 text-xl">ไป</p>
                    <input id='dest' class="rounded-3xl bg-zinc-200 w-64 h-9 p-6 mr-2" type="text">
                </div>
                <br>
                <button onclick="" class="bg-neutral-400 hover:bg-neutral-700 text-white font-bold py-2 px-4 rounded-full">
                    คิดเลย
                </button>
                <br>
                <p class="text-6xl">100 บาท</p>
            </div>
        </div> <br><br>

    </div>
</div>
</template>

<script>
import NavbarAll from '../components/NavbarAll.vue'

export default {
    components: {
        NavbarAll
    }
}
</script>