$(document).ready(function() {
  $(".disclosure_inside").hover(function(){
    $(this).children(".header__submenu").addClass("open_menu_h");
  },function(){
    $(this).children(".header__submenu").removeClass("open_menu_h");
  });
});
$(document).ready(function() {
  var an_1 = $("#shopify-section-announcement-bar").height();
  if ( an_1 > 0 ) {
    $("#menu-drawer").attr("style","top:-"+an_1+"px");
  }
  else {
    $("#menu-drawer").attr("style","top:0px");
  }
  $(".icon_close_11 svg").click(function(){
    $(".menu-drawer-container .header__icon span").click();
  });
  //  menu open close
//   $(".header__menu-item_11").hover(function(){
//     $(".mega_menu_details_shop",this).show();
//   },function(){
//     $(".mega_menu_details_shop",this).hide();
//   });
  $("button.eset_pp_pk.bg-black.text-white").click(function(){
    $(".dropdown_x_ra_99").fadeToggle();
  });
  $(".menu-drawer-container").click(function(){
    $("body").toggleClass("body_fixed");
  });
  $(".icon_close_11 svg").click(function(){
    $(".menu-drawer-container").click();    
  });
  $(".pills-tab_kk .nav-item:first-child .nav-link").click();

  $(".plus_btn_2").click(function(){
    $(".plus_btn_1").click();
  });
  $(".minus_btn_2").click(function(){
    $(".minus_btn_1").click();
  });
  $(".submit_click_2").click(function(){
    $(".submit_click_1").click();
  });
  $(".submit_click_2").click(function(){
    var value_1 = $(".botom_part_add_cart .quantity__input").val();
    for(var i = 0; i < value_1; i++) {
      $('.minus_btn_2').click();
    }
  });

});