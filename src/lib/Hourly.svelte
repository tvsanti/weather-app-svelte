<script lang="ts">
  import HourCard from "./HourCard.svelte";

  export let hourly: {
    apparent_temperature: number[];
    time: string[];
  };

  const today = hourly.apparent_temperature.slice(0, 24);
</script>

<div class="hourly">
  <h2 class="hourlyTitle">Hourly</h2>
  <div class="today">
    {#each today as temerature, index}
      <HourCard temperature={temerature} time={hourly.time} hourIndex={index} />
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
      overflow-y: scroll;
    }
  }
</style>
