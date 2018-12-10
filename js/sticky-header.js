(function() {
  
  var pageHeader = document.querySelector(".page__header");
  var pageHeaderHeight = pageHeader.getBoundingClientRect().bottom + window.pageYOffset;
  
  window.addEventListener("scroll", function() {
    
    if (pageHeader.classList.contains("page__header-sticky") && (window.pageYOffset < pageHeaderHeight)) {
        
      pageHeader.classList.remove("page__header-sticky");
        
    } else if (window.pageYOffset > pageHeaderHeight) {
        
      pageHeader.classList.add("page__header-sticky");
        
    }
    
  }, false);
  
})();