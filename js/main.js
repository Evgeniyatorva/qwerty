// fullpage scroll
$('#fullpage').fullpage({
  licenseKey: '1234-2343',
  lazyLoading: true,
  autoScrolling:true,
  scrollHorizontally: true,
  scrollingSpeed: 1000,
  anchors: ['main', 'training', 'price', 'sale', 'about-us', 'about-us-2', 'portfolio', 'contact', 'form'  ],
  menu: '#myMenu',
  responsiveWidth: 1200
});


//video bg
$('#arrow').click(function() {
  fullpage_api.moveSectionDown();
})


// hamburger menu
$(".menu").click(function() {
  $(this).toggleClass("menu-expanded");
});


// popup items service
var items = ['voice', 'drums', 'guitar'];
$(".service-items-link .item").click(function(e) {
  e.preventDefault();
  var contextLink = $(this);  

  $(".service-items-content .service-display").each(function(index, elem) {
    var contextContent = $(elem);

    items.map(function(item) {
      if (contextLink.attr('data-name') === item && contextContent.hasClass(item) ) {
        contextContent.show("slow");
      }
    })
  })
})

$(".popup-close").click(function(e) {
  e.preventDefault();
  $(".service-items-content .service-display").each(function(index, elem) {
    var contextContent = $(elem);
    items.map(function(item) {
      if (contextContent.hasClass(item) ) {
        contextContent.hide("slow");
      }
    })
  })
})
