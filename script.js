
const books = [
  {id: 1, title: "The butterfly Garden"},
  {id: 2, title: "A cabin at the end of the world"},
  {id: 3, title: "Fantasticland"},
  {id: 4, title: "The girl next door"},
  {id: 5, title: "The last policeman"},
  {id: 6, title: "The library at mount char"},
  {id: 7, title: "Lolita"},
  {id: 8, title: "Mr. penumbra"},
  {id: 9, title: "Six wakes"},
  {id: 10, title: "Sleeping giants"},
  {id: 11, title: "Sphere"},
  {id: 12, title: "The wasp factory"},
  {id: 13, title: "Version control"},
  {id: 14, title: "The Anomoly"},
  {id: 15, title: "Off to be the wizard"},
  {id: 16, title: "84k"},
  {id: 17, title: "Guess Who"},
  {id: 18, title: "The book of m"},
  {id: 19, title: "The girl with the dragon tattoo"},
  {id: 20, title: "Halcyon"},
  {id: 21, title: "House of cards"},
  {id: 22, title: "The lies of locke lamora"},
  {id: 23, title: "Paradox Bound"},
  {id: 24, title: "Red dragon"},
  {id: 25, title: "Semiosis"},
  {id: 26, title: "Sleeping Giants"},
  {id: 27, title: "Reincarnation Blues"},
  {id: 28, title: "Sometimes I Lie"},
]

const bookHtml = document.querySelector(".book");
const button = document.querySelector("input");

button.addEventListener("click", function() {
  let ranNum = Math.floor(Math.random() * books.length) + 1;
  books.forEach(item => {
    if (item.id === ranNum) {
      let num = 5;
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
})









