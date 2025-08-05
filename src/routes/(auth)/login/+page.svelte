<script>
  import { goto } from '$app/navigation'; 
  import { browser } from '$app/environment';
  import Button from '$lib/components/Button.svelte'

  let login = '';
  let password = '';

  $: isDisabled = !login.trim() || !password.trim()

  async function formSubmit() {
    if (login == 'admin' && password == 'admin') {
      if (browser) {
        localStorage.setItem('token', 'admin');
      }
      await goto('/'); 
    } else {
      alert('Неверные данные!');
    }
  } 
</script>
<div class="form-wrapper">
    <form on:submit|preventDefault={formSubmit} class="form">
        <div class="form-group">
            <h1 class="form-title">Авторизация</h1>
        </div>
        <div class="form-group">
            <input bind:value={login} class="form-input" type="text" name="login" placeholder="Логин">
        </div>
        <div class="form-group">
            <input bind:value={password} class="form-input" type="password" name="password" placeholder="Пароль">
        </div>
        <div class="form-group btn-group">
            <Button disabled={isDisabled}>Войти</Button>
        </div>
        <p class="form-quote">Логин: admin, Пароль: admin (тестовые данные)</p>
    </form>
</div>

<style>
    .form-wrapper {
        background: linear-gradient(180deg, #6ca7dfe3,#28509b7a);
        width: 680px;
        border-radius: 15px;
        padding: 25px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 320px;
        box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.3);
    }
    .form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
        height: 100%;
    }
    .form-title {
        font-weight: 500;
        letter-spacing: 2px;
        color: white;
        text-shadow: 2px 2px 13px black;
    }
    .form-input {
        width: 250px;
        padding: 8px 10px;
        font-size: 18px;
        border-radius: 5px;
        outline: none;
        border: none;
        box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.3);
    }
    .form-quote {
        color: white;
         text-shadow: 2px 2px 13px black;
    }
</style>