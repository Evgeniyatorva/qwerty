// fullpage scroll
$('#fullpage').fullpage({
  licenseKey: '1234-2343',
  lazyLoading: true,
  autoScrolling:true,
  scrollHorizontally: true,
  scrollingSpeed: 1000,
  anchors: ['main', 'training', 'price', 'sale', 'about-us', 'about-us-2', 'portfolio', 'contact', 'form', 'footer'],
  menu: '#myMenu',
  responsiveWidth: 1200,
  easingcss3: 'ease'
});


//arrow on main
$('#arrow').click(function() {
  fullpage_api.moveSectionDown();
})


// hamburger menu
$(".menu").click(function() {
  $(this).toggleClass("menu-expanded");
});


// popup items service
var items = ['voice', 'drums', 'guitar', 'teacher-voice', 'teacher-guitar', 'teacher-drums'];
var serviceBG = $(".popup-items-content");
$(".popup-items .item").click(function(e) {
  e.preventDefault();
  
  var contextLink = $(this);  
  serviceBG.toggleClass("popup-items-content-index");

  $(".popup-items-content .popup-display").each(function(index, elem) {
    var contextContent = $(elem);

    items.map(function(item) {
      if (contextLink.attr('data-name') === item && contextContent.hasClass(item) ) {
        contextContent.show("slow");
      }
    })
  })
})
$(".popup-close").click(function(e) {

  $(".popup-items-content .popup-display").each(function(index, elem) {
    var contextContent = $(elem);
    items.map(function(item) {
      if (contextContent.hasClass(item) ) {
        contextContent.hide("slow"); 
      }    
    })
  })
  setTimeout(function() {
    serviceBG.toggleClass("popup-items-content-index");
  }, 500)
})