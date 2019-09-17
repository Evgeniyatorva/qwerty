// fullpage scroll

if (window.innerWidth > 1200) {
  $('#fullpage').fullpage({
    licenseKey: '1234-2343',
    lazyLoading: true,
    autoScrolling:true,
    scrollHorizontally: true,
    scrollingSpeed: 1000,
    anchors: ['main', 'training', 'about-us', 'price', 'sale'],
    menu: '#myMenu'
  });

}

//video bg

$('#arrow').click(function() {
  console.log('qwe')
  fullpage_api.moveSectionDown();
})


// hamburger menu
$(".menu").click(function() {
  $(this).toggleClass("menu-expanded");
});


