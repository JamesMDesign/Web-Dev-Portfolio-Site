
//
// Place any custom JS here
//

// Download CV

document.getElementById('cv-button').addEventListener('click', function() {

const fileURL = '/Download/jm-cv.pdf';

const a = document.createElement('a');

a.href = fileURL;

a.download = 'james-mcdonald-cv.txt';

document.body.appendChild(a);

a.click();

document.body.removeChild(a);

console.log("we clicked");


});

// Create an example popover
document.querySelectorAll('[data-bs-toggle="popover"]')
  .forEach(popover => {
    new bootstrap.Popover(popover)
  })