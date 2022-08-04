const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const list = document.querySelector(".gallery");


const createImages = (array) =>
images.map((element) => `<li>  <img class="imageStyle"src="${element.url}" alt="${element.alt}"/>`).join("");
const listImages = createImages(images);

list.style.display = "flex";
list.style.listStyleType = 'none';
// img.style.objectFit = "contain";
// gallery.setAttribute("style","height:50px");
console.log(listImages)
// const imgs = listImages.querySelectorAll("img");
list.insertAdjacentHTML("beforeend", listImages);
const imgs = list.querySelectorAll("img");
console.log(imgs);
imgs.forEach(function (img) {
  img.setAttribute("style", "height:200px; border:4px solid red; margin-right:10px");
});
