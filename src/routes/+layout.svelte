<script lang="ts">
    import "modern-normalize/modern-normalize.css";
    import "../styles/main.scss"; 
    import type {LayoutData} from "./$types";
    import {LogoutButton} from "$components";
    export let data: LayoutData; 

    $: user = data.user;
</script>

{data.user?.display_name}

{#if data.user}
    <p>Hello {user?.display_name}</p>
    <LogoutButton />
{/if}

<slot/>