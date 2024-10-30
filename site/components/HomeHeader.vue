<template>
  <div class="background-container">
      <div class="centered-text">
          <h1>Обирай <br class="title-separator"> Життя</h1>
          <p>Християнський центр <br class="title-separator"> ресоціалізації</p>
      </div>
  </div>
</template>

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

@media (max-width: 700px) {

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
        font-size: 1.3em;
        margin-left: 0;
        margin-right: 0;

        /* TODO: has bug because for some reason <p> in not in the center but some placed right so move it some left */
        padding-right: 15px; 
    }
}

@media (max-width: 900px) {
    .centered-text {
        transform: scale(1.5);
    }
} 

</style>



