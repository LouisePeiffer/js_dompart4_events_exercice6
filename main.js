let maDiv = document.querySelector('#content')
console.log(maDiv);

// maDiv.addEventListener('click',(e) => {
//     console.log(e);
// } )

maDiv.addEventListener('click',(e) => {
    console.log(e.target);
} )

maDiv.addEventListener('click',(e) => {
    console.log(e.target);
    e.target.style.border = '3px solid red';
} )
