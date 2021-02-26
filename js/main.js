$(function()
  {
       
    'use strict';
    
    // adjust slider height
    var windH = $(window).height(),
    
    upperH = $('.upper-bar').innerHeight(),
    
    navH = $('.navbar').innerHeight();
    
    $('.slider,.carousel-item').height(windH-(upperH + navH));
    
    
    // featured work shuffle
    
    $('.featured-work ul li').on('click', function()
    {
      $(this).addClass('active').siblings().removeClass('active');
      
      if($(this).data('class') ==='all')
      {
        $('.shuffle-imgs .col-md').hide();
      }
      
    });
    
  });