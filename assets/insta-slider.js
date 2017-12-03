//https://stackoverflow.com/questions/41885659/how-to-detect-when-content-of-an-element-changes
//https://stackoverflow.com/questions/35884752/error-in-slick-js-uncaught-typeerror-cannot-read-property-add-of-null
// select the target node
var target = $("#insta-feed")[0];
 
// create an observer instance
var observer = new MutationObserver(function(mutations) {
    // mutations.forEach(function(mutation) {
    $('.insta-slider').not('.slick-initialized').slick({
      infinite: false,
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [
          {
            breakpoint: 990,
                settings: {
                  slidesToShow: 3
                }
          },
          {
            breakpoint: 540,
                settings: {
                  slidesToShow: 1
                }
          }
       ]
    });
    //console.log("dom changed");
    // });
});
 
// configuration of the observer:
var config = { childList: true}; // ,subtree: true, characterData: true 
 
// pass in the target node, as well as the observer options
observer.observe(target, config);