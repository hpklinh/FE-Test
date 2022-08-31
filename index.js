document.addEventListener("DOMContentLoaded", () => {

    const links = document.querySelectorAll(".header__item");
    const pageSection = document.querySelector(".page__section");
    const sections = document.querySelectorAll(".section__item");

    links[0].classList.add("active");   
    sections[0].classList.add("show__mode");

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

    pageSection.onscroll = ()=> {

        const arrTag = Array.from(sections).map((item, index) => {

            if (item.offsetTop < pageSection.scrollTop + item.offsetHeight/2) {
                return index
            } 

            return -1
        })

        let arrIdxTag = arrTag.filter( idx => idx !== -1 );

        let idxTag = arrIdxTag[arrIdxTag.length - 1];

        links.forEach( (element, idx) => {
            let item = element.classList;
            if(idxTag === idx) {
                item.add("active");
            } else {
                item.remove("active")
            }
        });

        sections.forEach((element, idx) => {
            let item = element.classList;
            if(idxTag === idx) {
                item.add("show__mode");
            }
        });
    };

  });