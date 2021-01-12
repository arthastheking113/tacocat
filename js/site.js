function project_popup1(){
  Swal.fire({
    title: 'My Tacocat Site',
    text: 'A very fun mini site',
    imageUrl: 'img//Tacocat.png',
    confirmButtonColor: '#3085d6',
    confirmButtonText: "Let's goooooo!!!"
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.replace("solve.html")
    }
  })
}
function project_popup2(){
  Swal.fire({
    title: 'My Sudoku Solver',
    text: 'See my Sudoku playground!',
    imageUrl: 'img//project-1.jpg',
    confirmButtonColor: '#3085d6',
    confirmButtonText: "Let's goooooo!!!"
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.replace("https://duylanle-sudoku.netlify.app/")
    }
  })
}
function project_popup3(){
  Swal.fire({
    title: 'My Superdog Event',
    text: 'I had a very fun time in here!',
    imageUrl: 'img//superdog.jpg', 
    confirmButtonColor: '#3085d6',  
    confirmButtonText: "Let's goooooo!!!"
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.replace("project_site.html")
    }
  })
}
function project_popup4(){
  Swal.fire({
    title: 'My FizzBuzz Site',
    text: 'A classic algorithm but never be old!',
    imageUrl: 'img//fizzbuzz.jpg',
    confirmButtonColor: '#3085d6', 
    confirmButtonText: "Let's goooooo!!!"
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.replace("project_site.html")
    }
  })
}
function project_popup5(){
  Swal.fire({
    title: 'Sum of All Fear',
    text: 'Curious? Go and have a look at it!',
    imageUrl: 'img//sumofallfear.jpg', 
    confirmButtonColor: '#3085d6',  
    confirmButtonText: "Let's goooooo!!!"
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.replace("project_site.html")
    }
  })
}
function project_popup6(){
  Swal.fire({
    title: 'My Sunset Hills',
    text: "Want to see a beautiful sunset?",
    imageUrl: 'img//sunset.jpg',
    confirmButtonColor: '#3085d6',
    confirmButtonText: "Let's goooooo!!!"
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.replace("project_site.html")
    }
  })
}

