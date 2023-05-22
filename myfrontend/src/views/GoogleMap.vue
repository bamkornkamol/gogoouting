<template>
    <div>
        <NavbarAll></NavbarAll>
        <br>
        <div class="justify-center content-center items-center flex flex-rows">
            <input id='dest' class="rounded-3xl bg-zinc-200 w-96 h-10 mr-2 p-5" type="text">
            <p>หาที่นี่ในลาดกระบังให้หน่อย !!</p>
        </div>
        <br>
        <div class="justify-center content-center items-center flex flex-col">
            <button @click="place()" class="bg-neutral-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                GO
            </button>
        </div>

        <div class="container h-96 w-4/5 ">'
            <iframe class="h-full w-full" id="map" src="https://maps.google.com/maps?q=&t=&z=15&ie=UTF8&iwloc=&output=embed"
        frameborder="0" allowfullscreen></iframe>
        </div>
        </div>
</template>

<script>
    import NavbarAll from './NavbarAll.vue'

    export default {
        components: {
            NavbarAll
        },
        methods:{
            place(){
                let place = document.getElementById("dest").value;

                document.getElementById('map').src = 'https://maps.google.com/maps?q=' + place + 'ลาดกระบัง' + '&t=&z=15&ie=UTF8&iwloc=&output=embed';
            }
        }
    
    }
</script>