function createFooterTemplate() {
    const template = document.createElement('template');

    template.id = 'footer-template';
    template.innerHTML = `
        <div class="container">
            <span class="text-muted">
                All trademarks referenced herein are the properties of their respective owners.
                <br>
                © Comic Fiesta Sdn. Bhd. All rights reserved.
            </span>
        </div>
    `;

    return template;
}

function loadFooter() {
    const template = createFooterTemplate();
    const clone = template.content.cloneNode(true);
    document.getElementsByTagName('footer')[0].appendChild(clone);
};

document.addEventListener('DOMContentLoaded', loadFooter);
