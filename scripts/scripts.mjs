const API_KEY =
  "live_puuEljtc6saT1VlfCIYSs4S9XcRzM4TwntjxGSJAsU4moCDnKt8cIuqtaJdkt4qg";

//console.log(API_KEY);
/**
 * 1. Create an async function "initialLoad" that does the following:
 * - Retrieve a list of breeds from the cat API using fetch().
 * - Create new <options> for each of these breeds, and append them to breedSelect.
 *  - Each option should have a value attribute equal to the id of the breed.
 *  - Each option should display text equal to the name of the breed.
 * This function should execute immediately.
 */

const headers = new Headers({
  "Content-Type": "application/json",
  "x-api-key": API_KEY,
});

var requestOptions = {
  method: "GET",
  headers: headers,
  redirect: "follow",
};



let result; // Declare the variable outside the try-catch block
let breeds = [];
async function initialLoad() {


  try {
    const response = await fetch(
      "https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=100",
      requestOptions
    );
    result = await response.json();
   // console.log(result[1].breeds[0].name);
    result.forEach((element) => {
    // console.log(element.breeds[0].name);
    if (!breeds.includes(element.breeds[0].name)) {
        breeds.push(element.breeds[0].name);
    }
    //   const option = document.createElement("option");
    //   option.value = element.breeds[0].id;
    //   option.text = element.breeds[0].name;
    //   breedSelect.appendChild(option);
    });
    console.log(breeds);
    console.log(breeds.length);
    document.getElementById("breedSelect").innerHTML = breeds.map(
        (breed) => `<option value="${breed}">${breed}</option>`
      );

  } catch (error) {
    console.log("error", error);

}

  //console.log(result); // Access the result outside the try-catch block
  return result;
}

//console.log(result);
initialLoad();



// [
//     'Abyssinian',           'American Bobtail',     'Arabian Mau',
//     'Australian Mist',      'Balinese',             'Bengal',
//     'Birman',               'Bombay',               'Burmese',
//     'Burmilla',             'Devon Rex',            'Dragon Li',
//     'Egyptian Mau',         'Exotic Shorthair',     'Himalayan',
//     'American Shorthair',   'Chausie',              'Cheetoh',
//     'Colorpoint Shorthair', 'Japanese Bobtail',     'Javanese',
//     'Korat',                'LaPerm',               'Munchkin',
//     'Nebelung',             'Norwegian Forest Cat', 'Ocicat',
//     'Oriental',             'Persian',              'Pixie-bob',
//     'Ragamuffin',           'Ragdoll',              'Russian Blue',
//     'Savannah',             'Scottish Fold',        'Selkirk Rex',
//     'Siberian',             'Sphynx',               'Tonkinese',
//     'Bambino',              'Chantilly-Tiffany',    'European Burmese',
//     'Maine Coon',           'Siamese',              'Singapura',
//     'Snowshoe',             'Somali',               'Toyger',
//     'Turkish Angora',       'Turkish Van',          'York Chocolate',
//     'Kurilian'
//   ]


// async function initialLoad() {
//   const response = await fetch(
//     "https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=2",
//     requestOptions
//   )
//     //const result = await response.json();
//     .then((response) => response.json())
//     .then((result) => console.log(result))
//     .catch((error) => console.log("error", error));
//    return response;
// }
// let entry = initialLoad();

// console.log(initialLoad());
// console.log(entry + "entry");
// // let entry =initialLoad();

// // //console.log(entry+"entry");


// // async function main() {
// //     let entry = await initialLoad();
// //     console.log(entry + " entry");
// //   }
  
// //   main();