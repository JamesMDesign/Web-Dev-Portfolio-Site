
//
// Place any custom JS here
//

// Download CV

document.getElementById('cv-button').addEventListener('click', function() {

const fileURL = '/Web-Dev-Portfolio-Site/Download/jm-cv.pdf';

const a = document.createElement('a');

a.href = fileURL;

a.download = 'james-mcdonald-cv.txt';

document.body.appendChild(a);

a.click();

document.body.removeChild(a);

console.log("we clicked");

// https://github.com/JamesMDesign/Web-Dev-Portfolio-Site/blob/main/Download/jm-cv.pdf

});

// Create an example popover
document.querySelectorAll('[data-bs-toggle="popover"]')
  .forEach(popover => {
    new bootstrap.Popover(popover)
  })