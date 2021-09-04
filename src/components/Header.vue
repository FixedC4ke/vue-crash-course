<template>
    <div class="navbar">
        <div class="container">
            <header class="header">
                <a href="/"><img src="#" alt="Logo"></a>
                <nav class="links">
                    <ul class="nav-links">
                        <li class="nav-item">
                            <a class="nav-link" href="/">Главная страница</a>
                        </li>
                            <li class="nav-item">
                            <a class="nav-link"  href="/login">Войти</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scoped>
    .header{
        display: flex;
        justify-content: space-between;
        height: 50px;
        line-height: 50px;
    }
    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    .nav-item{
        display: inline-block;
        margin: 0 10px;
    }
    .navbar{
        background-color: black;
        color: white;
    }
    a{
        text-decoration: none;
        color: white;
    }
    .nav-link:hover{
        color: grey;
    }
</style>