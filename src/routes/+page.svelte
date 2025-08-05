<script>
  import { goto } from "$app/navigation"
  import Button from "$lib/components/Button.svelte"

  async function logout() {
    localStorage.removeItem('token')
    await goto('/login')
  }
 
</script> 

<main>
    <section class="text-section">
        <h1 class="main-title">Добро пожаловать на мой сайт на <span class="orange">Svelte!</span></h1>
        <p class="main-text">Скоро здесь что-нибудь будет. А пока можете пройти авторизацию заново: </p>
        <Button on:click={logout}>Выйти</Button>
    </section>
</main>

<style>
    .text-section {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
    }
    .main-title {
        font-weight: 400;
        font-size: 65px;
        text-shadow: 5px 5px 42px rgba(0, 0, 0, 0.411);
    }
    .orange {
        color: orange;
    }

    .main-text {
        font-size: 35px;
        margin-bottom: 40px;
    }
</style>