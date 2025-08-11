function createNavbarTemplate(pageName) {
    const template = document.createElement('template');

    const nav_item = "<li class=\"nav-item\">";
    const nav_item_active = "<li class=\"nav-item active\">";
    const span_current = "<span class=\"sr-only\">(current)</span>";

    function resetAllTags() {
        li_class_index = nav_item;
        li_class_mascots = nav_item;
        li_class_rnr = nav_item;
        li_class_schedule = nav_item;

        li_class_current_index = "";
        li_class_current_mascots = "";
        li_class_current_rnr = "";
        li_class_current_schedule = "";
    };

    resetAllTags();

    switch(pageName) {
        case "index":
            li_class_index = nav_item_active;
            li_class_current_index = span_current;
            break;
        case "mascots":
            li_class_mascots = nav_item_active;
            li_class_current_mascots = span_current;
            break;
        case "rnr":
            li_class_rnr = nav_item_active;
            li_class_current_rnr = span_current;
            break;
        case "schedule":
            li_class_schedule = nav_item_active;
            li_class_current_schedule = span_current;
            break;
        default:
            break;
    };

    template.id = 'navbar-template';
    template.innerHTML = `
        <nav class="navbar navbar-default navbar-dark bg-dark navbar-expand-md sticky-top">
            <a class="navbar-brand" href="./index.html"><img src="img/logo_cf.png" alt="COMIC FIESTA" style="width: 100px; height: 60px;"></a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul class="navbar-nav ml-auto">
                    ${li_class_index}
                        <a class="nav-link" href="./index.html" alt="Home Page">HOME${li_class_current_index}</a>
                    </li>
                    ${li_class_mascots}
                        <a class="nav-link" href="./mascots.html" alt="Comic Fiesta Mascots">MASCOTS${li_class_current_mascots}</a>
                    </li>
                    ${li_class_rnr}
                        <a class="nav-link" href="./rnr.html" alt="Rules and Regulations">RULES & REGULATIONS${li_class_current_rnr}</a>
                    </li>
                    ${li_class_schedule}
                        <a class="nav-link" href="./schedule.html" alt="100 Days Countdown Schedule">SCHEDULE${li_class_current_schedule}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/archives.html" alt="100 Days Countdown Archives">ARCHIVES</a>
                    </li>
                </ul>
            </div>
        </nav>
    `;

    return template;
}

function loadNavigation() {
    const currentPage = document.getElementById('navigation-bar').className;
    const template = createNavbarTemplate(currentPage);
    const clone = template.content.cloneNode(true);
    document.getElementById('navigation-bar').appendChild(clone);
};

document.addEventListener('DOMContentLoaded', loadNavigation);
