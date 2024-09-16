<script setup lang="ts">
interface Props {
  text: string
  href?: string
  onClick?: void
}

const props = withDefaults(defineProps<Props>(), {})

const onClick = () => {
  if (props.onClick) {
    props.onClick()
    return
  }
  if(props.href) {

    window['lenis'].scrollTo(props.href)
    window.location.href = `${window.location.origin}${props.href}`
    return
  }
}
</script>

<template>
  <button type="button" :text="text" @click="onClick">
    {{ text }}
  </button>
</template>

<style scoped>
button {
  background: none;
  border: none;
  font-family: var(--ff-body);
  font-weight: 200;
  text-transform: uppercase;
  position: relative;
  padding-inline: 32px;
  padding-block: 16px;
  cursor: pointer;
  color: theme('colors.light');
}

button:before {
  content: "";
  border: 1px solid white;
  height: 46px;
  width: 46px;
  border-radius: 23px;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0);
  transition: all .35s ease-in-out;
  opacity: .25;
}

button:hover:before {
  background-color: rgba(255, 255, 255, .25);
  width: 100%;
}
</style>