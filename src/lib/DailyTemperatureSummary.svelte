<script lang="ts">
  import ArrowUp from "./ArrowUp.svelte";
  import ArrowDown from "./ArrowDown.svelte";
  export let description: string;
  export let temerature: number;
</script>

<div class="summary">
  {#if (description == "Max")}
    <ArrowUp />
  {:else}
    <ArrowDown />
  {/if}
  <div class="summary_data">
    <span>{description}</span>
    <span>{temerature}º</span>
  </div>
</div>
<style lang="scss">
  .summary {
    display: flex;

    .summary_data {
      display: flex;
      flex-direction: column;
    }
  }
</style>