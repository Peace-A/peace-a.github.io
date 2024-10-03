<template>
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
</template>

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

