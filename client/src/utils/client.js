import axios from "axios";
const baseURL =
    process.env.NODE_ENV === "production"
        ? "https://social-dev.onrender.com/api"
        : "http://localhost:3000";

const client = axios.create({ baseURL });
export default client;
