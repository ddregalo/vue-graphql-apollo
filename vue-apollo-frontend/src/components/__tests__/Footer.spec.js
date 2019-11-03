import { shallowMount } from "@vue/test-utils";
import Footer from "@/components/Footer.vue";
import Vue from "vue";

Vue.config.ignoredElements = [];

describe("Footer.vue", () => {
  it("has name and year text", () => {
    const wrapper = shallowMount(Footer);
    const year = new Date().getFullYear().toString();

    expect(wrapper.text()).toMatch("Daniel Campos");
    expect(wrapper.text()).toMatch(year);
  });
});
