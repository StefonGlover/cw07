function tileAlert() {
    alert ("You clicked a tile!");
  }

// Toggle between filled
const box = document.querySelectorAll('.box');
box.forEach(function(change){
  change.addEventListener('click', function handleClick(event) {
    change.classList.toggle('filled');
  });
});

function clearFunction() {
  box.forEach(function(change){
    change.classList.remove("filled");
  });
} 