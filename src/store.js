import Vue from "vue";
import Vuex from "vuex";
import { inputSamples } from "./global/variables";

Vue.use(Vuex);

const randomizedSampleIndex = Math.floor(Math.random() * inputSamples.length);

export default new Vuex.Store({
  state: {
    isModalVisible: false,
    isEncoding: true,
    inputStr: inputSamples[randomizedSampleIndex],
  },
  mutations: {
    setInputStr(state, inputStr) {
      state.inputStr = inputStr;
    },
    setIsEncoding(state, isEncoding) {
      state.isEncoding = isEncoding;
    },
    toggleIsEncoding(state) {
      state.isEncoding = !state.isEncoding;
    },
    setIsModalVisible(state, isModalVisible) {
      state.isModalVisible = isModalVisible;
    },
  },
});