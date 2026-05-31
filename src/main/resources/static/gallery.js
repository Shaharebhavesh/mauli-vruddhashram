
  const images = [

    '/images/walking.png',
    '/images/nurse.png',
    '/images/elder_lady.png',
    '/images/group_photo.png',
    '/images/image1.jpeg',
    '/images/image2.jpeg',
    '/images/image3.jpeg',
    '/images/image4.jpeg',
    '/images/image5.jpeg',
    '/images/gallery10.jpg',
    '/images/gallery11.jpg',
    '/images/gallery12.jpg',
    '/images/gallery13.jpg',
    '/images/gallery14.jpg',
    '/images/gallery15.jpg',
    '/images/gallery16.jpg'

    ];

    let currentPage = 0;

    const imagesPerPage = 8;

    const galleryGrid = document.getElementById('galleryGrid');

    function renderGallery(){

        galleryGrid.innerHTML = '';

        let start = currentPage * imagesPerPage;

        let end = start + imagesPerPage;

        let currentImages = images.slice(start,end);

        currentImages.forEach(img => {

            galleryGrid.innerHTML += `

            <div class="gallery-item">

                <img src="${img}"
                     onclick="openImage('${img}')">

            </div>

            `;
        });
    }

    document.getElementById('nextBtn').addEventListener('click',()=>{

        if((currentPage + 1) * imagesPerPage < images.length){

            currentPage++;

            renderGallery();
        }
    });

    document.getElementById('prevBtn').addEventListener('click',()=>{

        if(currentPage > 0){

            currentPage--;

            renderGallery();
        }
    });

    renderGallery();

 let touchStartX = 0;

    let touchEndX = 0;

    galleryGrid.addEventListener('touchstart', e => {

        touchStartX = e.changedTouches[0].screenX;
    });

    galleryGrid.addEventListener('touchend', e => {

        touchEndX = e.changedTouches[0].screenX;

        if(touchEndX < touchStartX - 50){

            document.getElementById('nextBtn').click();
        }

        if(touchEndX > touchStartX + 50){

            document.getElementById('prevBtn').click();
        }
    });
