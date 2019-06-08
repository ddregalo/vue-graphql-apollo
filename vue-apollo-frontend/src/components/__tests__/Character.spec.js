import { shallowMount } from "@vue/test-utils";
import Character from "@/components/Character.vue";
import Vue from 'vue';

Vue.config.ignoredElements = [
  'b-card', 'b-card-text',
];

describe("Character.vue", () => {
  const character = {
    name: "Test Name",
    gender: "male",
    eye_color: "brown",
  };
  it("renders props.character data when passed", () => {
    const wrapper = shallowMount(Character, {
      propsData: { character }
    });
    expect(wrapper.text()).toMatch(character.gender);
    expect(wrapper.text()).toMatch(character.eye_color);
  });

  it("displays the footer in the card", () => {
    const wrapper = shallowMount(Character, {
      propsData: { character }
    });
    expect(wrapper.text()).toMatch("Data From Starwars Api 2019");
  });
});
