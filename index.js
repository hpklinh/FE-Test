document.addEventListener("DOMContentLoaded", function(event) {
    const links = document.querySelectorAll(".header__item");
    const pageSection = document.querySelector(".page__section");
    const sections = document.querySelectorAll(".section__item");

    //active tag link when click

        for (const key in links) {
            if (Object.hasOwnProperty.call(links, key)) {
                const element = links[key];
                element.addEventListener("click", () => {
                    links.forEach( item => item.classList.remove("active"))
                    element.classList.add("active");
                    pageSection.scrollTop = sections[key].offsetTop
                });
            }
        }

    //active tag link when acroll

    const sectionWatcherCallback = (section, sectionWatcher) => {
        sections.forEach(() => {
            console.log(section.isIntersecting);
            console.log("watched");
        })
        
    }

    const sectionWatcherOptions = () => {
        
    }

    const sectionWatcher = new IntersectionObserver(sectionWatcherCallback, sectionWatcherOptions);

    sections.forEach( section => {
        sectionWatcher.observe(section);
    })

  });