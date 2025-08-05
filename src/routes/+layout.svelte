<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
  import { onMount } from 'svelte'
	import '../app.css'
  import { browser } from '$app/environment'
  import { goto } from '$app/navigation'
	let { children } = $props();
	onMount(() => {
    if (browser && localStorage.getItem('token') !== 'admin') {
      goto('/login')
    }
  })
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children?.()}
