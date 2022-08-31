



let searchImage = async (API,value) =>{
    // let query = document.getElementById("navbar").value;
    // console.log(query)
    try{
let data = await fetch(`https://api.unsplash.com/search/photos/?query=${value}&per_page=20&client_id=${API}`);

let res = await data.json();
return res.results;
console.log("res",res)

    }
    catch(err){
console.log(err)
    }
}

export {searchImage};




// import { navbar } from "../components/navbar.js";


   
