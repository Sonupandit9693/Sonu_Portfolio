export const scrollToSection = (gotTo) =>{
    document.querySelector("#"  + gotTo).scrollIntoView({behavior : "smooth"});
}