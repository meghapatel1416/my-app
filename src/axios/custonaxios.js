import axios from "axios";

let d = JSON.parse(localStorage.getItem("token"));
const fetchauth = axios.create({
    baseURL : "https://real-pear-fly-kilt.cyclic.app/",
    headers : {

        
        'Authorization' : `bearer ${d?.jwtToken}`,
        'Content-Type' : "application/json"
    }
})

export default fetchauth;

// now we can use fetchauth instead of axios (for 50-60 pages)
// do not handle response 