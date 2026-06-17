
  const images = [


    '/images/image1.jpeg',
    '/images/image2.jpeg',
    '/images/image3.jpeg',
    '/images/image4.jpeg',
    '/images/image5.jpeg',
    '/images/image6.jpeg',
    '/images/image7.jpeg',
    '/images/image8.jpeg',
    '/images/image9.jpeg',
    '/images/image10.jpeg',
    '/images/image11.jpeg',
    '/images/image12.jpeg',
    '/images/image13.jpeg',
    '/images/image14.jpeg',
    '/images/image15.jpeg',
    '/images/image16.jpeg',
    '/images/image17.jpeg',
    '/images/image18.jpeg',
    '/images/image19.jpeg',
    '/images/image20.jpeg',
    '/images/image21.jpeg',
    '/images/image22.jpeg',
    '/images/image23.jpeg',
    '/images/image24.jpeg',
    '/images/image25.jpeg',
    '/images/image29.jpeg',
    '/images/image30.jpeg',
    '/images/image31.jpeg',
    '/images/image32.jpeg',
     '/images/image34.jpeg',
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
