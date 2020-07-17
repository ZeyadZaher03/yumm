const navigationOnScrollChange = () => {
    window.addEventListener("scroll",()=>{
        const topNavigation = document.querySelector(".navigation");
        const topNavigationContainer = document.querySelector(".navigation_container");
        const windowPosition = window.scrollY > 0;
        topNavigation.classList.toggle("navigationScroll", windowPosition)
        topNavigationContainer.classList.toggle("navigation_container--active", windowPosition)
    })
}

navigationOnScrollChange()