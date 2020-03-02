<script>
	import FullPageNav from '../components/Navigation/FullPageNav.svelte';
	import PrimaryNav from '../components/Navigation/PrimaryNav.svelte';
	import { primaryNavLinks } from '../constants.js';
	export let segment;

	const indexRoute = '/';
</script>

<style>
	:global(#app-root) {
		display: flex;
  		min-height: 100vh;
  		flex-direction: column;
	}

	main {
		/* 1. Forces main to fill remaining space */
		flex: 1; /* 1. */
		display: grid;
        column-gap: 1rem;
        grid-template-columns: repeat(6, 1fr);
	}
</style>

{#if segment}
	<PrimaryNav
		{indexRoute}
		links={primaryNavLinks}
		page={segment}
	/>

	<main>
		<slot></slot>
	</main>
{:else}
	<FullPageNav links={primaryNavLinks} />
{/if}