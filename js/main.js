const burger = document.querySelector(".burger");
const slide_hide = document.querySelectorAll(".slide_hide");
const side_nav = document.querySelector(".side_nav");
const navigation = document.querySelector("nav");
const body =document.querySelector("body");
const navigation_container =document.querySelector(".navigation_section");
const navigation_links = document.querySelectorAll(".nav_links");

const settings_icon= document.querySelectorAll(".settings_icon");
const bg_blur = document.querySelector(".bg_blur");
const settings_section = document.querySelector(".settings_section");
const settings_section_close = document.querySelector(".settings_section ion-icon");

// console.log(settings_icon);
// console.log(scroll_counter);
window.addEventListener("scroll",()=>{
    let scroll_counter = body.getBoundingClientRect().top;
    // console.log(scroll_counter);
    if(scroll_counter >= -100){
        navigation_container.classList.remove("navigation_section_scroll")
    }else{
        navigation_container.classList.add("navigation_section_scroll")
    }
})
function navigationEvents(){
    // --------burger Events
    burger.addEventListener("click",()=>{
        burger.classList.toggle("burger_transform");
        navigation.classList.toggle("active_nav");
        slide_hide.forEach((list)=>{
            list.classList.toggle("hide");
        })
        side_nav.classList.toggle("bgTrans");
        // if(side_nav.style.backgroundColor === "transparent"){
        //     side_nav.style.backgroundColor === ""
        // }
    })
    // --------nav link Event
    navigation_links.forEach((links)=>{
        links.addEventListener("click",function(){
            navigation_links.forEach((links)=>{
                links.classList.remove("nav_links_active")
            })
            this.classList.add("nav_links_active")
        })
    })
}
function backgroungBlur(){
    settings_icon.forEach((setting)=>{
        setting.addEventListener("click",function(){
            settings_section.classList.add("display");
            bg_blur.classList.add("display");
            body.classList.add("body_fixexd")
        })
    });
    // settings_icon.addEventListener("click",()=>{
    //     settings_section.classList.add("display")
    //     bg_blur.classList.add("display")
    // })
    settings_section_close.addEventListener("click",()=>{
        settings_section.classList.remove("display")
        bg_blur.classList.remove("display")
        body.classList.remove("body_fixexd")
    })
}
function all(){
    navigationEvents();
    backgroungBlur();
}
all(); 