<script setup>

import Split from "./Split.vue"

// open page in new tab
function open(link) {
    window.open(link, "_blank")
}

</script>

<template>
  <Split>
      <div class="contacts">
          <h2>Наші контакти</h2>
          <p>Номер телефону: <b>+380969636242</b> Томін Олексій</p>
          <p>Email: <b>life.choose2023@gmail.com</b></p>
          <p>Адрес: <b>Україна, 62014, Харківська обл, Богодухівський р-н, село Пархомівка, вул Малиша Івана, будинок 99</b></p>
      </div>
      <div class="socials">
          <h2>Ми в соціальних мережах</h2>
          <Split class="socials-split">
              <img src="/phone.png" @click="open('https://www.instagram.com/obyraj_zhyttya_')">
              <img src="/laptop.png" @click="open('https://www.facebook.com/people/%D0%9E%D0%B1%D0%B8%D1%80%D0%B0%D0%B9-%D0%96%D0%B8%D1%82%D1%82%D1%8F/pfbid028MSgmNJeeZuGTibMGchTfCeqPKUeDwJ77XTocE91Z3Vsk4kYLQB33iWraWfwRprKl/')" >
          </Split>
      </div>
  </Split>
</template>

<style>

.contacts {
  padding-left: 15px;
  padding-right: 15px;
}

.contacts > p {
    text-align: left;
    margin-top: 10px;
}

.contacts > h2 {
    margin-bottom: 50px;
}

.socials-split {
    padding-left: 100px;
    padding-right: 100px;
}

.socials-split > img {
    width: 50%;
    padding: 20px;
    object-fit: contain;
    transition: ease .1s;
    cursor: pointer;
}

.socials-split > img:hover {
    transform: scale(1.1);
}

.socials-split > img:first-child {
    transform: scale(0.7);
}

.socials-split > img:hover:first-child {
    transform: scale(0.8);
}

@media (max-width: 1500px) {
    .socials-split {
        display: flex;
    }

    .socials-split > img:first-child {
        transform: scale(1);
    }

}

@media (max-width: 600px) {
    .socials-split {
        display: block;
    }

    .socials-split > img {
        width: 100%;
    }

}

</style>

