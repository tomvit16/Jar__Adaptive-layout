const tabs = () => {
    let tabName

    const tabNav = document.querySelectorAll('.about__toggle');
    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav)
    });


    function selectTabNav (e) {
        e.preventDefault();
        tabNav.forEach( item => {
            item.classList.remove('isActive')
        });
        this.classList.add('isActive');
        tabName = this.getAttribute('id');
        selectTabContent(tabName);
    };

    function selectTabContent(tabName) {
    tabContent.forEach( item => {
        item.classList.contains(tabName) ? item.classList.add('isActive') : item.classList.remove('isActive');
    })
}

    const tabContent = document.querySelectorAll('.about-content__item');   

};
tabs();


const scrollWindow = () => {
    const btnArrow = document.querySelectorAll('.link-circle__inner');
    btnArrow.forEach( item => {
        item.addEventListener('click', scrollTo);
    });
    
    function scrollTo() {
        window.scrollTo({
            top: 1100,
            behavior: 'smooth'    
        });
    }
}
scrollWindow();







