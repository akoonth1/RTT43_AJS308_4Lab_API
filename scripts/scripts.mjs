// import * as Carousel from "./Carousel.mjs";
// // The breed selection input element.
// const breedSelect = document.getElementById("breedSelect");
// // The information section div element.
// const infoDump = document.getElementById("infoDump");
// // The progress bar div element.
// const progressBar = document.getElementById("progressBar");
// // The get favourites button element.
// const getFavouritesBtn = document.getElementById("getFavouritesBtn");

// const API_KEY =
//   "live_puuEljtc6saT1VlfCIYSs4S9XcRzM4TwntjxGSJAsU4moCDnKt8cIuqtaJdkt4qg";

// //console.log(API_KEY);
// /**
//  * 1. Create an async function "initialLoad" that does the following:
//  * - Retrieve a list of breeds from the cat API using fetch().
//  * - Create new <options> for each of these breeds, and append them to breedSelect.
//  *  - Each option should have a value attribute equal to the id of the breed.
//  *  - Each option should display text equal to the name of the breed.
//  * This function should execute immediately.
//  */

// const headers = new Headers({
//   "Content-Type": "application/json",
//   "x-api-key": API_KEY,
// });

// var requestOptions = {
//   method: "GET",
//   headers: headers,
//   redirect: "follow",
// };



// let result; // Declare the variable outside the try-catch block
// let breeds = [];
// // async function initialLoad() {


// //   try {
// //     const response = await fetch(
// //       "https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=100",
// //       requestOptions
// //     );
// //     result = await response.json();
// //    // console.log(result[1].breeds[0].name);
// //     result.forEach((element) => {
// //     // console.log(element.breeds[0].name);
// //     if (!breeds.includes(element.breeds[0].name)) {
// //         breeds.push(element.breeds[0].name);
// //     }
// //     //   const option = document.createElement("option");
// //     //   option.value = element.breeds[0].id;
// //     //   option.text = element.breeds[0].name;
// //     //   breedSelect.appendChild(option);
// //     });
// //     console.log(breeds);
// //     console.log(breeds.length);
// //     document.getElementById("breedSelect").innerHTML = breeds.map(
// //         (breed) => `<option value="${breed}">${breed}</option>`
// //       );

// //   } catch (error) {
// //     console.log("error", error);

// // }

// //   //console.log(result); // Access the result outside the try-catch block
// //   return result;
// // }

// // //console.log(result);
// // initialLoad();

// document.addEventListener("DOMContentLoaded", () => {
//     const carouselInner = document.querySelector(".carousel-inner");
//     const template = document.getElementById("carouselItemTemplate").content;
  
//     // Clone the template content
//     const clone = document.importNode(template, true);
  
//     // Append the cloned content to the carousel
//     carouselInner.appendChild(clone);
//   });


// //https://api.thecatapi.com/v1/breeds

// let id_table = [];
// let id_object = {};
// let all_data = [];
// async function initialLoad() {
// try {
//     const response = await fetch(
//       //"https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=100",
//         "https://api.thecatapi.com/v1/breeds",
//       requestOptions
//     );
//     result = await response.json();

//    //console.log(result);
//     result.forEach((element) => {
        
//         if (!breeds.includes(element.name)) {
//             breeds.push(element.name);
//             id_object[element.name] = element.id;
  
//             //console.log(element.id,":", element.name);
//            //id_table.push(id_object);
       
//         }

//     });

//         // console.log(breeds);
//         // console.log(breeds.length);
//         // console.log(id_object);
//         // console.log(id_object.length);
//         document.getElementById("breedSelect").innerHTML = breeds.map(
//             (breed) => `<option value="${breed}">${breed}</option>`
//           );
//           all_data = result;
//     }


//    catch (error) {
//     console.log("error", error);

// }

//   //console.log(result); // Access the result outside the try-catch block

//   return result;
// }

// //console.log(result);
// initialLoad();

// //breedSelect = document.getElementById("breedSelect");
// // console.log(breedSelect);
// // console.log(id_table);


//  let cat_pics = [];
// breedSelect.addEventListener("change",  ()=> {
// // console.log(breedSelect.value);
// // console.log(id_object[breedSelect.value]);
// // });
// cat_pics = [];
// async function getBreedInfo() {
//    // breedSelect = document.getElementById("breedSelect");
//     try {
//         const response = await fetch(
//             `https://api.thecatapi.com/v1/images/search?limit=20&breed_ids=${id_object[breedSelect.value]}`,
//             requestOptions
//         );
//         result = await response.json();
//         cat_pics = result;
//         //console.log(cat_pics[1]);

//             // Clear previous images from the carousel
//             const carouselInner = document.getElementById("carouselInner");
//             //carouselInner.innerHTML = '';
//             Carousel.clear();
        
//                 cat_pics.forEach((element, index) =>{ 
//           console.log(element);
//                let cat_inv_pic  = Carousel.createCarouselItem(element.url, "cat", element.id);
//         //   // Get the template
//         //   const template = document.getElementById("carouselItemTemplate").content;
        
//         //   // Clone the template content
//         //   const clone = document.importNode(template, true);
        
//         //   // Insert the picture into the cloned template
//         //   const img = clone.querySelector("img");
//         //   img.src = element.url;
//         //   img.alt = "cat";
        
//         //   // Add 'active' class to the first item
//         //   if (index === 0) {
//         //     clone.querySelector(".carousel-item").classList.add("active");
//         //   }
        
//           // Append the cloned template to the carousel
//           //document.getElementById("carouselInner").appendChild(clone);
//     Carousel.appendCarousel(cat_inv_pic);


//         });
//         // cat_pics.forEach((element) => {
//         //     console.log(element.url);
//         //     const img = document.createElement("img");
//         //     img.src = element.url;
//         //     img.alt = "cat";
//         //     img.style.width = "100%";
//         //     document.getElementById("carouselInner").appendChild(img);
//         // });

//            // Start the carousel
//          Carousel.start();
//         let cata_data = Object.values(cat_info(id_object[breedSelect.value]));
//         console.log(cat_info(id_object[breedSelect.value]));
//         let cat_line = cata_data
//         cat_line.forEach(cat => {
//           console.log(cat);
//         });
//         //infoDump.innerHTML = 
//         infoDump.innerHTML = cat_line.name
        
//       //   map(cat => 
//       //     `Name of cat: ${cat.name}<br>
//       //     Description: ${cat.description}<br>
//       //     Temperament: ${cat.temperament}<br>
//       //     Origin: ${cat.origin}<br>
//       //     Life span: ${cat.life_span}<br>
//       //     Weight: ${cat.weight.metric}<br>
//       //     Adaptability: ${cat.adaptability}<br>
//       //     Affection level: ${cat.affection_level}<br>
//       //     Child friendly: ${cat.child_friendly}<br>
//       //     Dog friendly: ${cat.dog_friendly}<br>
//       //     Energy level: ${cat.energy_level}<br>
//       //     Grooming: ${cat.grooming}<br>
//       //     Health issues: ${cat.health_issues}<br>
//       //     Intelligence: ${cat.intelligence}<br>
//       //     Shedding level: ${cat.shedding_level}<br>
//       //     Social needs: ${cat.social_needs}<br>
//       //     Stranger friendly: ${cat.stranger_friendly}<br>
//       //     Vocalisation: ${cat.vocalisation}<br>
//       //     Wikipedia: <a href="${cat.wikipedia_url}">${cat.wikipedia_url}</a><br>
//       //     Image: <img src="${cat.image.url}" alt="cat image"><br>`
//       // ).join('<br><br>');

        
        
//         //"Name of cate: " +cat_line[2]  + "<br>" + "Description: " + cat_line.description + "<br>" + "Temperament: " + cat_line.temperament + "<br>" + "Origin: " + cat_line.origin + "<br>" + "Life span: " + cat_line.life_span + "<br>" + "Weight: " + cat_line.weight.metric + "<br>" + "Adaptability: " + cat_line.adaptability + "<br>" + "Affection level: " + cat_line.affection_level + "<br>" + "Child friendly: " + cat_line.child_friendly + "<br>" + "Dog friendly: " + cat_line.dog_friendly + "<br>" + "Energy level: " + cat_line.energy_level + "<br>" + "Grooming: " + cat_line.grooming + "<br>" + "Health issues: " + cat_line.health_issues + "<br>" + "Intelligence: " + cat_line.intelligence + "<br>" + "Shedding level: " + cat_line.shedding_level + "<br>" + "Social needs: " + cat_line.social_needs + "<br>" + "Stranger friendly: " + cat_line.stranger_friendly + "<br>" + "Vocalisation: " + cat_line.vocalisation + "<br>" + "Wikipedia: " + cat_line.wikipedia_url + "<br>" + "Image: " + cat_line.image.url;


//         //   console.log(cat_pics);
//         //   console.log(all_data);

//     } catch (error) {
//         console.log("error", error);
//     }
//     return result;

// }
// //console.log(result);

// getBreedInfo() 

// });


// function cat_info(id) {
//     let cat_info = all_data.find((cat) => cat.id === id);
//     //console.log(cat_info);
//     return cat_info;
// }





// // async function initialLoad() {
// //   const response = await fetch(
// //     "https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=2",
// //     requestOptions
// //   )
// //     //const result = await response.json();
// //     .then((response) => response.json())
// //     .then((result) => console.log(result))
// //     .catch((error) => console.log("error", error));
// //    return response;
// // }
// // let entry = initialLoad();

// // console.log(initialLoad());
// // console.log(entry + "entry");
// // // let entry =initialLoad();

// // // //console.log(entry+"entry");


// // // async function main() {
// // //     let entry = await initialLoad();
// // //     console.log(entry + " entry");
// // //   }
  
// // //   main();