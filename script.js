
const books = [
  {title: "The butterfly Garden"},
  {title: "A cabin at the end of the world"},
  {title: "Fantasticland"},
  {title: "The girl next door"},
  {title: "The last policeman"},
  {title: "The library at mount char"},
  {title: "Lolita"},
  {title: "Mr. penumbra"},
  {title: "Six wakes"},
  {title: "Sleeping giants"},
  {title: "Sphere"},
  {title: "The wasp factory"},
  {title: "Version control"},
  {title: "The Anomoly"},
  {title: "Off to be the wizard"},
  {title: "84k"},
  {title: "Guess Who"},
  {title: "The book of m"},
  {title: "The girl with the dragon tattoo"},
  {title: "House of cards"},
  {title: "The lies of locke lamora"},
  {title: "Paradox Bound"},
  {title: "Red dragon"},
  {title: "Semiosis"},
  {title: "Sleeping Giants"},
  {title: "Reincarnation Blues"},
  {title: "Sometimes I Lie"},
  {title: "Maze Master"},
  {title: "Baby Teeth"},
  {title: "Innocents Lost"},
  {title: "The Shining"},
  {title: "Misery"},
  {title: "Pet Semetary"},
  {title: "Night Film"},
  {title: "Snap"},
  {title: "The Bankers Wife"},
]

const bookHtml = document.querySelector(".book");
const randomBook = document.querySelector(".random-book");


randomBook.addEventListener("click", function() {
  let ranNum = Math.floor(Math.random() * books.length) + 1;
  
  books.forEach((item,index) => {
    
    //DYNAMICALLY ADD ID TO OBJECTS
    books[index]["id"] = index + 1
    
    if (item.id === ranNum) {
      let num = 5;
      
      //START A 5 SECOND COUNT DOWN BEFORE BOOK REVEAL

      bookHtml.textContent = "Finding Your Book..."
      const picker = setInterval(() => {
        bookHtml.textContent = num;
        num--
        if(num === -1) {
          bookHtml.textContent = item.title;
          clearInterval(picker)
        }
      }, 1000)
    }
  })
});












