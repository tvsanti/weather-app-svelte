<script lang="ts">
  import type { Daily } from "../store";

  export let day: Daily;
  export let index: number;

  let date = new Date(day.time[index]);
  let options: Intl.DateTimeFormatOptions = { weekday: 'short', day: 'numeric', month: 'long' };
  let formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
</script>

<div class="week_card">
  <h2>{formattedDate}</h2>
  <h2>Min {day.temperature_2m_max[index]}º</h2>
  <h2>Min {day.temperature_2m_min[index]}º</h2>
</div>

<style lang="scss">
</style>
