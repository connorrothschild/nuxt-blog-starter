<template>
  <div class="p-4 mb-4 info-box">
    <slot name="info-box"></slot>
  </div>
</template>

<style scoped lang="scss">
// img {
// 	max-width: 30px;
// 	max-height: 30px;
// 	margin-right: 1em;
// }
.info-box {
  display: flex;
  place-items: center;
  border-radius: 10px;
  font-weight: normal;
  background: $secondary;
  box-shadow: 2px 2px 5px 1px $primary;

  p {
    color: $white;
  }
}
</style>
