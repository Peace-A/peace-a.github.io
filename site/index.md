---
# https://vitepress.dev/reference/default-theme-home-page
layout: page
---

<script setup>

import Card from "./components/Card.vue"

// open page in new tab
function open(link) {
    window.open(link, "_blank")
}

</script>

<style>

/* --- */
/* restyle header of main page of website */

.VPNav {
    position: absolute !important;
}

.VPNavBar {
    background-color: transparent !important;
    border-top-color: transparent !important;
}
.VPNavBar .container {
    max-width: 100% !important;
}

.VPNavBar > .divider, .VPNavBarAppearance, .VPSocialLinks, .VPNavBarTitle span, .VPNavBarExtra, .VPNavBarHamburger {
    display: none !important;
}

/* --- */

/* backgraund always white even in dark mode */
body {
    background-color: white;
}

/* fix bug with horizontal scrolling */
#app {
    overflow-x: hidden;
}

/* --- */
/* font styles */

/* awesome color for fonts */
p, h1, h2, h3, h4, cite, blockquote {
    color: #2c3e50;
}

h1 {
    font-size: 3em; /* Adjust font size as needed */
    text-align: center;
    font-weight: bold; /* Optional: makes the text bold */
    font-family: "Yong Serif";
    line-height: 1;
}

h2, h3, h4 {
    font-size: 3em; /* Adjust font size as needed */
    text-align: center;
    font-weight: bold; /* Optional: makes the text bold */
    line-height: 1;
}

h3 {
    font-size: 2.5em;
}

h4 {
    font-size: 1.5em;
    font-weight: normal;
}

p {
    text-align: center;
    margin-top: 40px;
    margin-left: 10px;
    margin-right: 10px;
    font-size: 1.5em;
    text-indent: 20px;
    line-height: 1.3;
}

cite, blockquote {
    margin: 40px;
    font-size: 1.5em;
}

blockquote {
    color: gray;
    border-left: 3px solid gray;
    padding: 5px;
}

b {
    border: 1px solid black;
    border-radius: 3px;
    padding: 2px;
    line-height: 1.7;
}

@media (max-width: 1500px) {
    cite, blockquote {
        font-size: 2em;
        line-height: 1.5;
    }

}

@media (max-width: 600px) {
    h2 {
        font-size: 2.5em;
    }

    p {
        font-size: 1.4em;
    }
}

/* --- */

/* --- */
/* API styles */

.w-100 {
    width: 100%;
}

.c-w {
    color: white;
}

.split {
    display: flex;
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

/* --- */

</style>

<!-- Header screen -->

<style>

.background-container {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    transform: translateY(-100px);
    width: 100%;
    height: 100vh; /* Adjust height as needed */
    background-image: url('/home.jpg');
    background-position: center;
    background-size: cover; /* Adjust as needed */
    background-color: rgba(255, 255, 255, 0.6); /* Overlay color with opacity */
    background-blend-mode: lighten; /* Adjust blend mode as needed */
}

.centered-text {
    transform: scale(2);
}

.centered-text .title-separator {
    display: none;
}

.centered-text > p {
    font-family: M;
    margin-top: 10px;
    text-align: center;
    font-size: 1.3em;
}

@media (max-width: 600px) {

    .centered-text {
        transform: scale(1);
    }

    .centered-text .title-separator {
        display: block;
    }

    .centered-text > h1 {
        font-size: 3em;
    }

    .centered-text > p {
        font-size: 1.2em;
        margin-left: 0;
        margin-right: 0;

        /* BUG: for some reason <p> in not in the center but some placed right so move it some left */
        padding-right: 15px; 
    }
}

@media (max-width: 900px) {
    .centered-text {
        transform: scale(1.5);
    }
} 

</style>

<div class="background-container">
    <div class="centered-text">
        <h1>Обирай <br class="title-separator"> Життя</h1>
        <p>Християнський центр ресоціалізації</p>
    </div>
</div>

<!-- About us -->

<style>

.about-us > p {
    margin-right: 100px;
    margin-left: 100px;
}


.about-us {
    margin-bottom: 100px;
}

@media (max-width: 600px) {
    .about-us > p {
        margin-right: 10px;
        margin-left: 10px;
    }
}

</style>

<div class="about-us">
    <h2>Про нас</h2>
    <p>Ми - Християни. Починаючи з 2017 року ми служимо для нарко- та алко- залежним, щоб Сам Бог - Ісус Христос звільнив від тяжких залежностей. Курс реабілітації - безкоштовний, під час якого ви зможете дізнитися про Бога і побудувати з ним відносини. Це найкраща дорога, щоб отримати свободу від наркотиків, алкоголю, тютюну і інших залежностей. В центр ресоціалізації приймаємо кожного, хто хоче стати вільним і розірвати коло залежності. Свобода може настати лише, під проявом вашого особистого рішення прийняти допомогу Бога. </p>
</div>

<!-- Ministry description -->

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

<div class="ministry w-100">
    <img class="ministry-back" src="/back-our-work.jpg">
    <h2 class="c-w">Наше служіння</h2>
    <Card img="/chooselife/ministry-1.jpg" title="Звістка Євангелії" decription="Наша ціль звістити Божу вістку спасіння у Ісусі Христі." />
    <Card img="/chooselife/ministry-2.jpg" title="Допомога залежним" decription="Допомога алко-, нарко- залежним та людям з іншими залежностями." />
    <Card img="/chooselife/ministry-3.jpg" title="Консультація рідних" decription="Допомога алко-, нарко- залежним та людям з іншими залежностями." />
    <Card img="/chooselife/ministry-4.jpg" title="Дім милосердя" decription="Допомога літнім людям, які потрапили в складні життеві ситуації." />
</div>

<!-- Contact and Socials blocks -->

<style>

.contacts, .socials {
    width: 50%;
}

.contacts > p {
    text-align: left;
    margin-top: 10px;
}

.contacts > h2 {
    margin-bottom: 50px;
}

.socials > .split {
    padding-left: 100px;
    padding-right: 100px;
}

.socials > .split > img {
    width: 50%;
    padding: 20px;
    object-fit: contain;
    transition: ease .1s;
    cursor: pointer;
}

.socials > .split > img:hover {
    transform: scale(1.1);
}

.socials > .split > img:first-child {
    transform: scale(0.7);
}

.socials > .split > img:hover:first-child {
    transform: scale(0.8);
}

@media (max-width: 1500px) {
    .socials > .split {
        display: flex;
    }

    .socials > .split > img:first-child {
        transform: scale(1);
    }

}

@media (max-width: 600px) {
    .socials > .split {
        display: block;
    }

    .socials > .split > img {
        width: 100%;
    }

}

</style>

<div class="split">
    <div class="contacts">
        <h2>Наші контакти</h2>
        <p>Номер телефону: <b>+380969636242</b> Томін Олексій</p>
        <p>Email: <b>life.choose2023@gmail.com</b></p>
        <p>Адрес: <b>Україна, 62014, Харківська обл, Богодухівський р-н, село Пархомівка, вул Малиша Івана, будинок 99</b></p>
    </div>
    <div class="socials">
        <h2>Ми в соціальних мережах</h2>
        <div class="split">
            <img src="/phone.png" @click="open('https://www.instagram.com/obyraj_zhyttya_')">
            <img src="/laptop.png" @click="open('https://www.facebook.com/people/%D0%9E%D0%B1%D0%B8%D1%80%D0%B0%D0%B9-%D0%96%D0%B8%D1%82%D1%82%D1%8F/pfbid028MSgmNJeeZuGTibMGchTfCeqPKUeDwJ77XTocE91Z3Vsk4kYLQB33iWraWfwRprKl/')" >
        </div>
    </div>
</div>

<!-- Donation blocks -->

<style>

.help > .split > div {
    width: 50%;
    padding: 10px;
}

.help > .split > div:first-child {
    padding-left: 50px;
    padding-top: 50px;
    padding-right: 50px;
}

.bank p {
    margin: 10px;
    text-align: left;
}

@media (max-width: 1500px) {
    .help > .split > div {
        width: 100%;
    }

    .help > .split > div:first-child {
        padding-left: 150px;
        padding-right: 150px;
        padding-top: 10px;
        padding-bottom: 10px;
    }

}

@media (max-width: 600px) {
    .help > .split > div:first-child {
        padding-left: 20px;
        padding-right: 10px;
        padding-bottom: 10px;
        margin-top: 0;
    }

    .bank > p {
        font-size: 1.3em;
    }

} 

</style>

<div class="help">
    <h2>Підтримати нас</h2>
    <p>Станьте частинкою нашого служіння</p>
    <br>
    <div class="split">
        <div>
            <br>
            <cite>Але збирайте собі скарби на небі, де ні моль, ні іржа не винищують, і де злодії не підкопують і не крадуть, бо де скарб ваш, там буде і серце ваше…</cite>
            <blockquote>Св. Євангеліє від Матвія, 6:20-21</blockquote>
        </div>
        <div class="bank">
            <br>
            <h3>Банківські дані</h3>
            <br>
            <p>IBAN: <b>UA353518230000026009300926860</b></p>
            <p>ЕГРПОУ: <b>44951349</b></p>
            <p>МФО: <b>351823</b></p>
        </div>
    </div>
</div>

<!-- Footer -->

<style>

footer {
    background-color: #add8e6;
    padding: 3%;
}

footer > h3 {
    font-size: 2em;
}

</style>

<br>

<footer>
    <h3>Обирай Життя 2024</h3>
</footer>
