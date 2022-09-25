import { beforeEach, describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import { createTestingPinia } from '@pinia/testing';
import HelloWorld from "../skills.vue";

describe("HelloWorld", () => {
  let wrapper

  beforeEach(() => {
    const pinia = createTestingPinia({
      stubActions: false,
      createSpy: vi.fn,
    })

    wrapper = mount(HelloWorld, {
      global: {
        plugins: [pinia]
      },
      props: { msg: "Hello Vitest" }
    });
  })

  it("renders properly", () => {
    const SkillsComponent = wrapper.findComponent(HelloWorld)
    expect(SkillsComponent.exists()).toBe(true)
  });
});
