import { shallowMount } from "@vue/test-utils";
import Characters from "@/components/Characters.vue";
import Vue from "vue";

Vue.config.ignoredElements = ["b-card-group"];

describe("Characters.vue", () => {
  it("renders the correct html for single charater snapshot", () => {
    const wrapper = shallowMount(Characters);
    wrapper.setData({
      allCharacters: [
        {
          name: "DarkSideOfTheMoon",
          gender: "male",
          eye_color: "brown",
        }
      ]
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
