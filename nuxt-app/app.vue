<script lang="ts" setup>
import {onMounted} from "#imports";

const handleLowercaseEvent = (ev: CustomEvent) => {
  console.log("lowercase event fired from @ syntax:")
  console.log(ev)
}
const handleCamelCaseEvent = (ev: CustomEvent) => {
  console.log("camelCase event fired from @ syntax:")
  console.log(ev)
}
onMounted(() => {
  document.getElementById("component-with-events").addEventListener("camelCaseEvent", (ev: CustomEvent) => {
    console.log("camelCase event fired from vanilla event listener:")
    console.log(ev);
  })
})
</script>
<template>
  <div>
    <h1>events:</h1>
    <component-with-events
        id="component-with-events"
        @lowercaseevent="handleLowercaseEvent"
        @camelCaseEvent="handleCamelCaseEvent"
    />
    <h1>dummy component:</h1>
    <component-with-shadow-dom>
      <div slot="inner">slotted content</div>
    </component-with-shadow-dom>
  </div>
</template>
