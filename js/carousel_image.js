function createCarouselImageTemplate() {
    const template = document.createElement('template');

    template.id = 'footer-template';
    template.innerHTML = `
        <div class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="img/banner_others.webp" class="d-block w-100" alt="Comic Fiesta 100 Days Countdown">
                </div>
            </div>
        </div>
    `;

    return template;
}

function loadCarouselImage() {
    const template = createCarouselImageTemplate();
    const clone = template.content.cloneNode(true);
    document.getElementById('carousel-image').appendChild(clone);
};

document.addEventListener('DOMContentLoaded', loadCarouselImage);
