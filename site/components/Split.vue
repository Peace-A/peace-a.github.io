<template>
  <div class="split">
    <slot></slot>
  </div>
</template>

<style>

.split {
    display: flex;
}

.split > * {
    width: 100%;
}

@media (max-width: 1500px) {
    .split {
        display: block;
    }
    
    .split > * {
        width: 100%;
        margin-top: 50px;
    }
}


</style>
