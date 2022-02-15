// set client reviews locally

let reviews = [
  {
    id: 1,
    name: 'Peter Parker',
    job: 'SpiderMan',
    img: './img/user-1.jpg',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consectetur, leo at laoreet ullamcorper, lorem libero pharetra enim, vitae condimentum orci velit eu purus. Nullam iaculis mi in libero vulputate, eu semper dolor accumsan. Donec ut iaculis nisi. Vivamus elementum diam et ullamcorper laoreet. Fusce nibh nunc, tempus quis ullamcorper id, malesuada in nisi.',
  },
  {
    id: 2,
    name: 'Jessica Jones',
    job: 'SuperHero',
    img: './img/user-2.jpg',
    review:
      'Maecenas convallis rhoncus nisi ac blandit. Suspendisse eget eros maximus, porttitor orci et, vehicula purus. Donec semper elit nec nulla sollicitudin, et sodales nulla lacinia. Nullam commodo id augue in posuere. Integer et quam ut metus pellentesque suscipit. Praesent accumsan metus purus, in sodales urna consequat ut. Sed placerat nisl vel turpis blandit pretium. Donec et elit lorem.',
  },
  {
    id: 3,
    name: 'Sonic',
    job: 'Hedgehog',
    img: './img/user-3.jpg',
    review:
      'Maecenas convallis rhoncus nisi ac blandit. Suspendisse eget eros maximus, porttitor orci et, vehicula purus. Donec semper elit nec nulla sollicitudin, et sodales nulla lacinia. Nullam commodo id augue in posuere. Integer et quam ut metus pellentesque suscipit. Praesent accumsan metus purus, in sodales urna consequat ut. Sed placerat nisl vel turpis blandit pretium. Donec et elit lorem.',
  },
  {
    id: 4,
    name: 'Xena',
    job: 'Worrior',
    img: './img/user-4.jpg',
    review:
      'Maecenas convallis rhoncus nisi ac blandit. Suspendisse eget eros maximus, porttitor orci et, vehicula purus. Donec semper elit nec nulla sollicitudin, et sodales nulla lacinia. Nullam commodo id augue in posuere. Integer et quam ut metus pellentesque suscipit. Praesent accumsan metus purus, in sodales urna consequat ut. Sed placerat nisl vel turpis blandit pretium. Donec et elit lorem.',
  },
];

// Select elements
const img = document.querySelector('.testimonial__client');
const author = document.querySelector('.testimonial__author');
const job = document.querySelector('.testimonial__job');
const text = document.querySelector('.testimonial__text');

const prevBtn = document.querySelector('.prev-button');
const nextBtn = document.querySelector('.next-button');

// Set initial element
let currentElement = 0;

//Set initial element display on DOM
window.addEventListener('DOMContentLoaded', () => {
  showClient();
});

// Get client info from local user array
function showClient() {
  const element = reviews[currentElement];
  img.src = element.img;
  author.textContent = element.name;
  job.textContent = element.job;
  text.textContent = element.review;
}

// Add functionality to buttons to switch between clients
nextBtn.addEventListener('click', () => {
  currentElement++;
  if (currentElement > reviews.length - 1) {
    currentElement = 0;
  }
  showClient();
});

prevBtn.addEventListener('click', () => {
  currentElement--;
  if (currentElement < 0) {
    currentElement = reviews.length - 1;
  }
  showClient();
});
