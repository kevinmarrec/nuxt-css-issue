<template>
  <div>
    <MyComponent />
    <MySpecialComponent />
  </div>
</template>

<script>
export default {
  components: {
    MyComponent: () => import('~/components/MyComponent.vue'),
    MySpecialComponent: () => import('~/components/MySpecialComponent')
  }
}
</script>

<style>
.page-class {
  color: green;
}
</style>
