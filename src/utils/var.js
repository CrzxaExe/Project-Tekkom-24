import { ref } from "vue";

export const sidebar = ref(false);

export const toggleHamburger = () => {
  sidebar.value = !sidebar.value;
};
