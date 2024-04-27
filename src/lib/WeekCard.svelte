<script lang="ts">
  import type { Daily } from "../store";

  export let day: Daily;
  export let index: number;

  let date = new Date(day.time[index]);
  let options: Intl.DateTimeFormatOptions = { weekday: 'short', day: 'numeric', month: 'long' };
  let formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
</script>

<div class="week_card">
  <span>{formattedDate}</span>
  <div class="max_min">
    <h3>Min {day.temperature_2m_max[index]}º</h3>
    <h3>Min {day.temperature_2m_min[index]}º</h3>
  </div>
</div>

<style lang="scss">
  .week_card{
    background-color: #1c489c;
    border-radius: 0.5rem;
    padding: 0.5rem;
    .max_min {
      display: flex;
      gap: 1rem;
    }
  }
</style>
