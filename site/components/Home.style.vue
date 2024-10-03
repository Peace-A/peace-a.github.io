<template>
  <span></span>
</template>

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
