<template>
  <div class="index">
    <header class="content-frame">
      <h1 class="site-title">Cifrar</h1>
    </header>

    <main
      class="index__main content-frame"
      :inert="isModalVisible ? 'true' : 'false'"
    >
      <fixed-header>
        <form class="input-form" @submit.prevent>
          <div class="input-form__settings">
            <button
              role="switch"
              class="toggle"
              :class="[toggleClass]"
              :aria-checked="toggleAriaChecked"
              v-on:click="handleToggleSubmit"
            >
              <!-- encode label -->
              <span class="toggle__text toggle__text--encode">encode</span>
              <!-- switch -->
              <span class="toggle__symbol"></span>
              <!-- decode label -->
              <span class="toggle__text toggle__text--decode">decode</span>
            </button>
          </div>

          <!-- Input textarea -->
          <textarea
            class="input-form__textarea"
            :aria-label="textareaLabel"
            :placeholder="textareaPlaceholder"
            v-model="inputStr"
          >
          </textarea>
        </form>
      </fixed-header>
    </main>
  </div>
</template>

<script>
import FixedHeader from "vue-fixed-header";
export default {
  name: "index",
  components: { FixedHeader },
};
</script>
