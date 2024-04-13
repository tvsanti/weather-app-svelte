<script lang="ts">
  import HourCard from "./HourCard.svelte";

  export let hourly: {
    apparent_temperature: number[];
    time: string[];
  };
</script>

<div class="hourly">
  <h2 class="hourlyTitle">Hourly</h2>
  <div class="today">
    {#each hourly.apparent_temperature as temerature, index}
      <HourCard temperature={temerature} time={hourly.time} hourIndex={index}/>
    {/each}
  </div>
</div>

<style lang="scss">
  .hourly {
    display: flex;
    flex-direction: column;
    .today {
      display: flex;
      gap: 1rem;
    }
  }
</style>
