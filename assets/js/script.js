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



const playBtn = document.querySelector(".our_story-play")
const popup = document.querySelector(".popup")
const close = document.querySelector(".close-btn")

playBtn.addEventListener("click",(e)=>{
    popup.style.display = "flex";
})

close.addEventListener("click", (e) => {
    popup.style.display = "none";
})