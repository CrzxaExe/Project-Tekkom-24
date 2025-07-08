import { ref } from "vue";

export const getRoute = () => {
  const location = window.location.pathname;

  return location;
};

export const screenName = ref("Dashboard");

export const setScreenName = (name) => {
  screenName.value = name;
};
