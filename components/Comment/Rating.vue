<template>
  <client-only>
    <star-rating
      :rating="value"
      :increment="0.01"
      :read-only="true"
      :max-rating="maxRating"
      :star-size="size"
      :padding="padding"
      inactive-color="#DDDDDD"
      active-color="#FFBF31"
      :show-rating="false"
    />
  </client-only>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 0
    },
    maxRating: {
      type: Number,
      default: 5
    },
    size: {
      type: Number,
      default: 24
    },
    padding: {
      type: Number,
      default: 8
    }
  },
  name: "Rating"
}
</script>

<style lang="scss" scoped>

</style>
