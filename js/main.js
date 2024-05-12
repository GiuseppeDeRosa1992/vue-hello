//creo constante per la funzione vue e gli dico che è uguale alla classe vue
const { createApp } = Vue
//creo funzione che mi ritorna per adesso dei dati e in futuro metodi che contengono funzioni ecc.
createApp({
  data() {
    return {
        welcomeMessage : "Ciao Benvenuto su Vue.js",
        helpMessage : "Da oggi sarò il tuo aiuto principale su Js",
        message : "Oggi aiuterò?",
        firstName : "",
        lastName : "",
        chooseImg : "Scegli la foto che vuoi vedere",
        pathImgOne : "",
        pathImgTwo : "",
        classP2 : "p-2"
    }
  },
  methods: {
    img() {
      this.pathImgOne = "./img/angela-caroll-chief-editor.jpg"
    },
    imgTwo() {
      this.pathImgTwo = "./img/angela-lopez-social-media-manager.jpg"
    }
  }
  //monto o inietto quei dati nel div con id app dove andrò a scrivere tutto il codice html
}).mount('#app')