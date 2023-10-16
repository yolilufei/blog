<template>
<p class="ciu_embed" :data-feature="`mdn-css__properties__${selector}`" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false">
    <span>Data on support for the mdn-css__properties__{{selector}} feature across the major browsers</span>
</p>
</template>
<script src="https://cdn.jsdelivr.net/gh/ireade/caniuse-embed/public/caniuse-embed.min.js"></script>
<script>
export default {
  props: ["selector"]
};
</script>