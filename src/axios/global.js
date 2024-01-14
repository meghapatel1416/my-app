//use to pass api globally(more then one page)
import axios  from "axios";
import ListAccounts from "../ListAccounts";
let d = JSON.parse(localStorage.getItem("token"));

axios.defaults.headers.common['Content-Type'] = "application/json";
axios.defaults.headers.common['Authorization']=`bearer ${d?.jwtToken}`

// we can remove header part from ListAccounts(for 5-10 page application)
// token will pass in every API which is wrong