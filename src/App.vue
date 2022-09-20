<template>
  <h1>Hola mundo</h1>
  <router-view id="app" />
</template>

<style lang="scss">
@import "./assets/css/variables";
@import "./assets/css/normalize.scss";

/* 
  BODY.
  Base body styles including hiding scrollbars when modal is visible.
 */

body {
  padding: 0;
  margin: 0;
  font: normal normal 62.5%/1.2 "Signika", Arial, sans-serif;
  background: $color__background;
  color: $color__text;
}

.body--with-modal {
  overflow: hidden;
}

/*
  .content-frame
  Wraps around all rendered content
  ------------------------------------------------------------------------
 */
.content-frame,
.index .input-form.vue-fixed-header--isFixed {
  display: flex;
  flex-flow: column nowrap;
  margin: 3.2em auto;
  width: 90%;
  min-width: 50em;
  opacity: 1;
}

/*
*/
h1,
h2,
h3,
p,
header,
footer,
.header .footer {
  margin: 0;
  padding: 0;
  a {
    font-size: 1em;
  }
}
</style>
