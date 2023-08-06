
document.addEventListener("DOMContentLoaded", function(){
    // Get all navigation items
    const navItems = document.querySelectorAll("nav ul li a");
    // Get the current URL
    const currentUrl = window.location.href.split("/")[window.location.href.split("/").length-1];
    // Iterate over the navigation items
    navItems.forEach(function(navItem){
        // If the href of the navigation item is the same as the current URL...
        if (navItem.getAttribute("href") === currentUrl){
            // ...add the 'current' class to its parent
            navItem.parentElement.classList.add("current");
        } else {
            // ...otherwise, remove the 'current' class
            navItem.parentElement.classList.remove("current");

        }

    });
    
});

