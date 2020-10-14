import axios from "axios";

const instance = axios.create({
    baseURL: "https://react-my-burger-f4065.firebaseio.com/"
});

 export default instance;