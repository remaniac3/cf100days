function createMetaTemplate(pageName) {
    const template = document.createElement('template');

    title_prefix = "";

    switch(pageName) {
        case "mascots":
            title_prefix = "Mascots - "
            break;
        case "rnr":
            title_prefix = "Rules & Regulations - "
            break;
        case "schedule":
            title_prefix = "Schedule - "
            break;
        default:
            break;
    };

    template.id = 'meta-template';
    template.innerHTML = `
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        
        <meta property="og:url"                content="http://100days.comicfiesta.org/" />
        <meta property="og:type"               content="website" />
        <meta property="og:description"        content="Comic Fiesta 100 Days Countdown is back this year with the theme of 'DRIFTING MUSIC FESTIVAL'!" />
        <meta property="og:image"              content="http://100days.comicfiesta.org/img/meta_img.jpg" />

        <script src="./js/popper.min.js"></script>
        <script src="./js/bootstrap.min.js"></script>

        <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css"> 
        <link rel="stylesheet" type="text/css" href="css/style.css">

        <title>${title_prefix}100 Days Countdown / Comic Fiesta 2023</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
    `;

    return template;
}

function loadMeta() {
    const currentPage = document.getElementsByTagName('head')[0].className;
    const template = createMetaTemplate(currentPage);
    const clone = template.content.cloneNode(true);
    document.getElementsByTagName('head')[0].appendChild(clone);
};

document.addEventListener('DOMContentLoaded', loadMeta);
