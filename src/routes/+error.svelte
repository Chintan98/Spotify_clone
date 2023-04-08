<script lang="ts">
	import { page } from '$app/stores';
	import { Button } from '$components';
	import { LogoutButton } from '$components';

	$: $page.data;
</script>

<svelte:head>
	<title>{$page.status}</title>
</svelte:head>

<div class="content">
	<h1>{$page.error?.message}</h1>

	{#if $page.status === 404}
		<p>The page you are trying to access cannot be found.</p>
		<div class="buttons">
			<Button href="/" element="a">Home</Button>
			<Button href="/search" element="a">Search</Button>
		</div>
	{/if}
	{#if $page.status === 401}
		<p>Your current session has expired, please logout and login again.</p>
		<LogoutButton />
	{/if}
</div>

<style lang="scss">
	.content {
		text-align: center;
	}
	h1 {
		font-style: functions.toRem(40);
	}
	p {
		font-size: functions.toRem(20);
	}
	.buttons {
		margin-top: 40px;
		:global(a) {
			margin: 0 5px;
		}
	}
</style>
