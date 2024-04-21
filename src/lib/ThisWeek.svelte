<script lang="ts">
  import type { Daily } from "../store";
  import WeekCard from "./WeekCard.svelte";
  export let daily: Daily;
</script>

<div class="this_week">
  <h2>This week</h2>
  <div class="thisweek">
    {#each daily.temperature_2m_max as day, index}
      <WeekCard day={daily} index={index}/>
    {/each}
  </div>
</div>

<style lang="scss">
</style>
