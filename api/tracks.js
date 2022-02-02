import Axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const instance = Axios.create({
  baseURL: "http://7771-110-226-11-230.ngrok.io",
});

instance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (err) => {
    console.log("err");
  }
);

export default instance;
