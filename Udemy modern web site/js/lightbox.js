const images = document.querySelectorAll('.img-galeria');
const imagesLight = document.querySelector('.agregar-imagen');
const containerLight = document.querySelector('.imagen-light');
const hamburguer1 = document.querySelector('.hamburguer');


images.forEach(image => {
  image.addEventListener('click', () => {
    aparecerImagen(image.getAttribute('src'))

  })
})


containerLight.addEventListener('click', (e) => {
  if(e.target !== imagesLight) {
    containerLight.classList.toggle('show')
    imagesLight.classList.toggle('showImage')
    hamburguer1.style.opacity = '1'
  }
})


const aparecerImagen = (image) => {
  imagesLight.src = image;
  containerLight.classList.toggle('show')
  imagesLight.classList.toggle('showImage')
  hamburguer1.style.opacity = '0'
}
