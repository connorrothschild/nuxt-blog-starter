<template>
  <div class="p-4 mb-4 info-box">
    <slot name="info-box"></slot>
  </div>
</template>

<style scoped lang="scss">
.info-box::before {
  content: "❗";
  font-size: 1.5rem;
  margin-right: 0.5rem;
}

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
