<script>
  import { createEventDispatcher } from "svelte"

    const dispatch = createEventDispatcher()
</script>

<button class="main-btn" on:click={() => dispatch('click')}>
    <slot></slot>
</button>

<style>
    .main-btn {
        width: 110px;
        height: 40px;
        padding: 8px 0;
        border-radius: 5px;
        border: 1px solid white;
        color: white;
        background-color: var(--secondary);
        cursor: pointer;
    }

    .main-btn:disabled {
        background: rgb(73, 73, 73);
    }
</style>