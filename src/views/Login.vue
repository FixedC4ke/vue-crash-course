<template>
    <div class="login-page">
        <div class="container">
            <form v-on:submit.prevent="submitHandler" class="login-form">
                <div class="input-items">
                    <input id="username" name="username" type="text" placeholder="Введите имя пользователя"/>
                    <input id="password" name="password" type="password" placeholder="Введите пароль"/>
                </div>
                <button class="submit-btn" type="submit">Войти</button>
                <div v-if="errorMessage" class="warning">
                    <p>{{errorMessage}}</p>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    methods:{
        submitHandler: function(e){
            let data = new FormData(e.target);
            let username = data.get('username');
            let password = data.get('password');
            if (username!==this.testdata.username && password!==this.testdata.password){
                this.errorMessage = "Неверный логин/пароль";
            }
            else {
                this.errorMessage=null;
                this.$router.push('/');
            }
        }
    },
    data(){
        return {
            testdata: {
                username: 'admin',
                password: 'admin'
            },
            errorMessage: null
        }
    }
}
</script>

<style scoped>
.login-form{
    width: 700px;
    margin: 30px auto;
    padding: 25px;
    border: 0.2rem solid #f7f7f9;
}
.input-items{
    display: flex;
    flex-direction: column;
}

.input-items input{
    margin-bottom: 5px;
    border: 1px solid #ced4da;
    padding: 0.3rem 0.75rem;
    border-radius: 0.3rem;
}
.warning{
    background-color: rgba(214, 19, 19, 0.2);
    padding: 10px;
    border-radius: 0.3rem;
}
.warning p {
    margin: 0;
    padding: 0;
}

.submit-btn{
    margin-bottom: 5px;
}
</style>