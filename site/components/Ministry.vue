<script setup>

import Card from "./Card.vue"

</script>

<template>
  <div class="ministry w-100">
      <img class="ministry-back" src="/back-our-work.jpg">
      <h2 class="c-w">Наше служіння</h2>
      <Card img="/ministry-1.jpg" title="Звістка Євангелії" decription="Наша ціль звістити Божу вістку спасіння у Ісусі Христі." />
      <Card img="/ministry-2.jpg" title="Допомога залежним" decription="Допомога алко-, нарко- залежним та людям з іншими залежностями." />
      <Card img="/ministry-3.jpg" title="Консультація рідних" decription="Допомога алко-, нарко- залежним та людям з іншими залежностями." />
      <Card img="/ministry-4.jpg" title="Дім милосердя" decription="Допомога літнім людям, які потрапили в складні життеві ситуації." />
  </div>
</template>

<style>

.ministry {
    position: relative;
    background-color: rgba(113, 37, 40, 0.9); /* Overlay color with opacity */
    overflow: hidden;
    padding: 60px;
    margin-bottom: 70px;
}

.ministry-back {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -10;
    object-fit: cover;
}

.ministry > h2 {
    margin-bottom: 100px;
}

.card {
    flex-direction: row;
    justify-content: flex-start;
    display: flex;
    margin-bottom: 50px;
}

.card-text > h3, .card-text > h4 {
    color: white;
    text-align: left;
    margin-left: 40px;
    margin-top: 20px;
    line-height: 1;
}

.card-text > h4 {
    margin-top: 40px;
    margin-right: 5%;
    line-height: 1.4;
}

.card > img {
    width: 400px;
    height: 300px;
    object-fit: cover;
    border-radius: 20px;
    box-shadow: 0 0 10px 1px #000;
}

@media (max-width: 900px) {
    .card {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
    .card > img {
        width: 600px;
        margin-bottom: 50px;
    }

    .card-text > h3 {
        font-size: 3em;
        margin: 0;
    }
    
    .card-text > h3, .card-text > h4 {
        text-align: center;
        margin-left: 0;
        margin-right: 0;
    }
}

</style>

