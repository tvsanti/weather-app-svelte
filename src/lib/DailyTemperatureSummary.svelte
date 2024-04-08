<script lang="ts">
    import ArrowUp from './ArrowUp.svelte'
    import ArrowDown from './ArrowDown.svelte'
    export let description: string;
    export let temerature: number;
</script>
<div class="sumnary">
        <ArrowDown/>
    <div class="sunmary_data">
        <span>{description}</span>
        <span>{temerature}º</span>
    </div>
</div>
<style lang="scss"></style>