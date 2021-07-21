import apiAxiosCalls from "./httpmethods.api";

export default {
  getUserPublicAddress: () => {
    try {
      return apiAxiosCalls({
        url: "https://ipapi.co/json/",
        method: "GET",
      });
    } catch (error) {
      console.log(error);
    }
  },
};
