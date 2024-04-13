<script lang="ts">
  export let hourIndex: number;
  export let temperature: number;
  export let time: string[];
  const hour = new Date(time[hourIndex]).getHours();
</script>

<div class="hour_card">
  <span class="date">
    {hour}
    <span>{hour <= 12 ? "AM" : "PM"}</span></span
  >
  <span>{temperature}º</span>
</div>

<style lang="scss">
  .date {
    display: flex;
    gap: 0.2rem;
  }
</style>
