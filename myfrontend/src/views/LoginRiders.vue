<template>
    <div>
        <div class="grid grid-cols-2 w-screen">
        <div class="h-screen justify-center content-center items-center flex flex-col p-8">
            <h1 class="text-5xl font-semibold text-center tracking-wide">Welcome to <br> Go Go Outing KMITL !!</h1> <br>
            <h3 class="text-zinc-500">เข้าสู่ระบบพี่วิน</h3>
            <br>
            <div class="justify-center content-center items-center flex flex-col">
                <div>
                    <label class="" for="">เบอร์โทรศัพท์</label> <br>
                    <input v-model="$v.phone.$model" :class="{'border-rose-500 border-solid border': $v.phone.$error}" class="bg-zinc-200 border rounded-xl h-12 w-96 p-4" type="text">
                    <template v-if=" $v.phone.$error">
                        <br>
                        <p class="text-rose-500" v-if="!$v.phone.required">กรุณากรอกเบอร์โทรศัพท์ให้เรียบร้อย</p>
                    </template>
                </div>
                <br>

                <div>
                    <label class="" for="">รหัสผ่าน</label> <br>
                    <input id="passw" v-model="$v.pass.$model" :class="{'border-rose-500 border-solid border': $v.pass.$error}" class="bg-zinc-200 border rounded-xl h-12 w-96 p-4" type="password">
                    <template v-if=" $v.pass.$error">
                        <br>
                        <p class="text-rose-500" v-if="!$v.pass.required">กรุณากรอกรหัสผ่านให้เรียบร้อย</p>
                        <p class="text-rose-500" v-if="!$v.pass.minLength">ต้องมีอย่างน้อย 5 ตัวอักษร</p>
                    </template>
                </div>
            </div>
            <br><br>
            <div class="grid grid-cols-2 flex justify-end">
                <router-link to="/register_riders">
                    <a class="bg-zinc-400 hover:bg-zinc-600 text-white font-bold text-center py-2 px-2 rounded-full left-2">ยังไม่มีบัญชีผู้ใช้?</a>
                </router-link>
                <router-link to="">
                    <a @click="submit" class="bg-orange-400 hover:bg-orange-600 text-white font-bold py-2 px-5 rounded-full ml-6">เข้าสู่ระบบ</a>
                </router-link>
            </div> 
            <br><br>
            <router-link to="/selectadminuser">
                <a class="bg-zinc-200 hover:bg-zinc-600 text-gray font-bold text-center py-2 px-2 rounded-full left-2">กลับสู่หน้าแรก</a>
            </router-link>
        </div>

        <div class="h-screen bg-orange-400">
            
        </div>
    </div>
    </div>
</template>

<script>
    import { required} from 'vuelidate/lib/validators'
    import axios from "axios";
    import Swal from 'sweetalert2'

    function mobile(value) {
        return !!value.match(/0[0-9]{9}/)
    }
    


    export default {
        data() {
            return {
                phone: '',
                pass: '',
                profile:null
            }
        },
        validations: {
            phone: {
                required, mobile: mobile
            },
            pass: {
                required
            }
            
        },
        methods: {
            submit() {
                this.$v.$touch();
                if (!this.$v.$invalid) {
                    let passw = document.getElementById('passw').value
                    let formData = new FormData();
                    formData.append("phone", this.phone);
                    formData.append("password", passw);
                    axios.post("http://localhost:3000/login/vin", formData ,{
                        headers: {
                        'Content-Type': 'multipart/form-data'
                        }
                    })
                    .then((response) => {
                        console.log(response)
                        this.profie = response.data
                        if(this.profie == 'เบอร์โทรศัพท์หรือรหัสผ่านไม่ถูกต้อง'){
                            Swal.fire({
                                position: 'top-end',
                                icon: 'error',
                                title: 'อีเมลหรือรหัสผ่านไม่ถูกต้อง',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }else{
                            this.$router.push('/setqueuevin/'+ this.profie[0].rider_info_id)
                        }
                        
                    }).catch((err) => {
                        console.log(err)
                    })
                }
            }
        }
    }
</script>

