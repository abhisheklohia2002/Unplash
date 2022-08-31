// link :-https://api.unsplash.com/search/photos/query=${value}&per_page=20client_id=5pi9C0kaeqZ0X0TTf_SxUrG9pFuw1_YT2mg5q3JvD9U

//https://api.unsplash.com/search/photos?page=20&query=${}client_id=5pi9C0kaeqZ0X0TTf_SxUrG9pFuw1_YT2mg5q3JvD9U




//correct api = https://api.unsplash.com/search/photos/?query=thor&per_page=20&client_id=5pi9C0kaeqZ0X0TTf_SxUrG9pFuw1_YT2mg5q3JvD9U

import {searchImage} from "./fetch.js"
import { navbar } from "../components/navbar.js";








  









let nav = document.getElementById("navbar_div");
let API = "5pi9C0kaeqZ0X0TTf_SxUrG9pFuw1_YT2mg5q3JvD9U"
nav.innerHTML= navbar();


let search =async (elem) =>{
    if(elem.key === "Enter"){
        let value = document.getElementById("navbar").value;
      let data =  await searchImage(API,value);
      console.log(data,"data")
console.log(data.likes)
      append(data);
    

    }
}
document.getElementById("navbar").addEventListener("keydown",search);





let append = (elem)=>{
  console.log(elem,"Info");
  likeAndDislike(elem)
  var main_box = document.getElementById("main-box");
  main_box.innerHTML = null;


  elem.forEach((el)=>{

    var div = document.createElement("div");
    div.setAttribute("id","div1");
    var img = document.createElement("img");
    var like = document.createElement("div");
    like.setAttribute("id","like")
  img.setAttribute("id","img")
  img.src = el.urls.regular;
  like.innerHTML = "Likes" +" "+ el.likes
  // console.log(like)
  div.append(img,like);

main_box.append(div);

 

  })
}



let likeAndDislike = (elem)=>{
var arr = [];

  elem.forEach((el)=>{

    var like = el.likes;
arr.push(like);
// console.log(like)

   
  

  })

  // // console.log("arr",arr);
  
 function High(){
  document.getElementById("high").addEventListener("onchange",myFunction())
  function myFunction(){
    for(var i = 0; i<arr.length; i++){
      for(var j = 0; j<arr.length-i-1; j++){
        if(arr[j].likes < arr[j+1].likes){
         let temp = arr[j]
         arr[j] = arr[j+1];
         arr[j+1] = temp
        }
      }
    }
    console.log("high",arr)
    append(arr)
  }
 }
const Low = ()=> {
  low()
}
function low(){
  document.getElementById("low").addEventListener("onchange",MYFunction())
}
  

  function MYFunction(){
        for(var i = 0; i<arr.length; i++){
      for(var j = 0; j<arr.length-i-1; j++){
        if(arr[j].likes > arr[j+1].likes){
         let temp = arr[j]
         arr[j] = arr[j+1];
         arr[j+1] = temp
        }
      }
    }
    console.log("low",arr)
    append(arr)
  }
  
  //   for(var i = 0; i<arr.length; i++){
  //     for(var j = 0; j<arr.length-i-1; j++){
  //       if(arr[j].likes > arr[j+1].likes){
  //        let temp = arr[j]
  //        arr[j] = arr[j+1];
  //        arr[j+1] = temp
  //       }
  //     }
  //   }
  //   console.log("low",arr)
  //   append(arr)
  // });


// function low(arr){
 
// }

 

// function high(arr){
 
  
}
 

// }






var x = document.getElementById("nature");
 
//  if(x){
 
 
 
   x.addEventListener("click",async()=>{
  
 
     let value = "Nature";
   let API = "5pi9C0kaeqZ0X0TTf_SxUrG9pFuw1_YT2mg5q3JvD9U";
   
   let data = await searchImage(API,value);
  append(data)
   console.log(1)
   
   
 
  
 })





 
var y = document.getElementById("car");
 
//  if(x){
 
 
 
   y.addEventListener("click",async()=>{
  
 
     let value = "car";
   let API = "5pi9C0kaeqZ0X0TTf_SxUrG9pFuw1_YT2mg5q3JvD9U";
   
   let data = await searchImage(API,value);
  append(data)
  //  console.log(1)
   
   
 
  
 })





 
var z = document.getElementById("music");
 
//  if(x){
 
 
 
   z.addEventListener("click",async()=>{
  
 
     let value = "Music";
   let API = "5pi9C0kaeqZ0X0TTf_SxUrG9pFuw1_YT2mg5q3JvD9U";
   
   let data = await searchImage(API,value);
  append(data)
  //  console.log(1)
   
   
 
  
 })




 
var a = document.getElementById("cartoon");
 
//  if(x){
 
 
 
   a.addEventListener("click",async()=>{
  
 
     let value = "Cartoon";
   let API = "5pi9C0kaeqZ0X0TTf_SxUrG9pFuw1_YT2mg5q3JvD9U";
   
   let data = await searchImage(API,value);
  append(data)
  //  console.log(1)
   
   
 
  
 })




 
var b = document.getElementById("tech");
 
//  if(x){
 
 
 
   b.addEventListener("click",async()=>{
  
 
     let value = "Technology";
   let API = "5pi9C0kaeqZ0X0TTf_SxUrG9pFuw1_YT2mg5q3JvD9U";
   
   let data = await searchImage(API,value);
  append(data)
  //  console.log(1)
   
   
 
  
 })




 
var c = document.getElementById("marvel");
 
//  if(x){
 
 
 
   c.addEventListener("click",async()=>{
  
 
     let value = "Marvel";
   let API = "5pi9C0kaeqZ0X0TTf_SxUrG9pFuw1_YT2mg5q3JvD9U";
   
   let data = await searchImage(API,value);
  append(data)
  //  console.log(1)
   
   
 
  
 })





// import {searchImage} from "./fetch.js";


