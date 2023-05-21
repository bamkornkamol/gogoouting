<template>
    <div class="grid grid-cols-2 w-screen">
        <div class="h-screen justify-center content-center items-center flex flex-col p-8">
            <h1 class="text-5xl font-semibold text-center tracking-wide">Welcome to <br> Go Go Outing KMITL !!</h1> <br>
            <h3 class="text-zinc-500">เข้าสู่ระบบผู้ใช้</h3>
            <br>
            <div class="justify-center content-center items-center flex flex-col">
                <div>
                    <label class="" for="">อีเมล</label> <br>
                    <input v-model="$v.email.$model" :class="{'border-rose-500 border-solid border': $v.email.$error}" class="bg-zinc-200 border rounded-xl h-12 w-96 p-4" type="text">
                    <template v-if=" $v.email.$error">
                        <br>
                        <p class="text-rose-500" v-if="!$v.email.required">กรุณากรอกอีเมลให้เรียบร้อย</p>
                        <p class="text-rose-500" v-if="!$v.email.email">อีเมลไม่ถูกต้อง</p>
                    </template>
                </div>
                <br>

                <div>
                    <label class="" for="">รหัสผ่าน</label> <br>
                    <input v-model="$v.pass.$model" :class="{'border-rose-500 border-solid border': $v.pass.$error}" class="bg-zinc-200 border rounded-xl h-12 w-96 p-4" type="text">
                    <template v-if=" $v.pass.$error">
                        <br>
                        <p class="text-rose-500" v-if="!$v.pass.required">กรุณากรอกรหัสผ่านให้เรียบร้อย</p>
                        <p class="text-rose-500" v-if="!$v.pass.minLength">ต้องมีอย่างน้อย 5 ตัวอักษร</p>
                    </template>
                </div>
            </div>
            <br><br>
            <div class="grid grid-cols-2 flex justify-end">
                <router-link to="/register_user">
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
</template>

<script>
    import { required, email, minLength} from 'vuelidate/lib/validators'

    function complexPass(value) {
        if (!(value.match(/[a-z]/) && value.match(/[A-Z]/) && value.match(/[0-9]/))) {
            return false
        } else {
            return true
        }
    }

    
    export default {
        data() {
            return {
                email: '',
                pass: '',
                submitStatus: null
            }
        },
        validations: {
            email: {
                required, email
            },
            pass: {
                required, minLength: minLength(5), complex: complexPass
            } 
        },
        methods: {
            submit() {
                this.$v.$touch();
                if (!this.$v.$invalid) {
                    let formData = new FormData();
                    formData.append("email", this.email);
                    formData.append("pass", this.pass);
                }
            }
        }
    }
</script>

