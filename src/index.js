// index.js

// Callbacks


const handleClick = (ramen) => {


  const blockData = document.getElementById("ramen-detail")
  const imgToUpdate =  blockData.querySelector(".detail-image")
  const nameToUpdate = blockData.querySelector(".name")
  const ratingToUpdate= document.querySelector("#rating-display")
  const commentToUpdate = document.querySelector("#comment-display")
  const restuarantName = document.querySelector (".restaurant")
  imgToUpdate.src = ramen.image
  imgToUpdate.alt = ramen.name
  nameToUpdate.innerHTML = ramen.name
  ratingToUpdate.innerHTML = ramen.rating
  commentToUpdate.innerHTML = ramen.comment
  restuarantName.innerHTML = ramen.restaurant



//append picture to the middle of the screen as well as
  //---<img class="detail-image" src="./assets/image-placeholder.jpg" alt="Insert Name Here">
  //---<div id="ramen-detail"> , id='comment-display'>, id='rating-display'
  //---so we grab the info from ramenData
  //---make the grabed info into variables
  //---then update the varbale to appropriate placese

}

 // 1. Click on an image from the `#ramen-menu`div and
  //  -addevent listener target `#ramen-menu`div
  // 2. fire a callback called `handleClick` to see all the info about that
  //??
  // ramen displayed inside the `#ramen-detail` div (where it says
    // -use getElementById ?? <div id="ramen-detail"> , id='comment-display'>, id='rating-display'
  // `insert comment here` and `insert rating here`).
// should be appeneded to its designated area

// };
//
function handleSubmit(){
  // prevented defualt so it doesnt refresh to its defualt state
    event.preventDefault()
 //declared each element which has the new value to be submitted
const newName = document.querySelector("#new-name").value
const newRes = document.querySelector("#new-restaurant").value
const newImage = document.querySelector("#new-image").value 
const newRating = document.querySelector("#new-rating").value
const newComment = document.querySelector("#new-comment").value
// declared new element in which the value will be put in HTML
const newPic = document.createElement("img");
//made 
newPic.src = newImage 
//selects the div ramen-menu and appends the pictures
//declared template where the data is housed
const ramenData = {
  "name": newName,
  "restaurant": newRes,
  "image": newImage,
  "rating": newRating,
  "comment": newComment
}
// selected where to appened new info
document.querySelector("#ramen-menu").append(newPic);
// added event click for the new pic info
newPic.addEventListener("click", () => {handleClick(ramenData);});


  console.log("slicked")

}
const addSubmitListener = () => {
  //add event listener on the submit form h4?
  document.getElementById("new-ramen").addEventListener("submit", handleSubmit)

  // new_ramen.addEventListener("submit", myScript);

  // Attach a submit even listener to the `new-ramen` form using a function called `addSubmitListener`.
    //--use submit event listener on the form  grab new ramen from <form id="new-ramen">
    
  // After the submission, create a new ramen and add it to the`#ramen-menu` div. 
  // ---then take the info for new Ramen form and append it to Name: Restaurant: Image: Rating: Comment:
  //The new ramen does not need to persist; in other words, if you refresh the page, 
  //it's okay that the new ramen is no
  // longer on the page.
}

const displayRamens = () => {
  // we grabbed the API info
fetch("http://localhost:3000/ramens")


// changed it to something usable
.then (repsonse =>repsonse.json())
// used for each on data (ramen) to create a new img tag 
.then (ramen =>{
  ramen.forEach(ramenData => {
    //decalr remen pic which makes img element
    const ramenPic = document.createElement("img");
    // should push ramen info too empty array declared ramenData
    // ramenData.push(element)
    //set src and declares it to ramenPIC
    ramenPic.src = ramenData.image; 
    //selects the div ramen-menu and appends the pictures
    
    document.querySelector("#ramen-menu").append(ramenPic);
    // ramenPic.addEventListener(click', console.log("sdsa"))
    ramenPic.addEventListener("click", () => {handleClick(ramenData);});
   

  })

// console.log(ramenData)
})


}


const main = () => {
  // Invoke displayRamens here
  displayRamens();
  // Invoke addSubmitListener here
  addSubmitListener() 
}

main()

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};