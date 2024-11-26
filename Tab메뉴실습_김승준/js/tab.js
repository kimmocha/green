$(function(){
  $(".menu li a").mouseenter(function(){
    $(".sub").stop().css("display","none");

    numStr = $(this).attr("class");
    const num = numStr.substr(3,1);

  $(this).css("color","#000");

    $(".sub"+num).css("display","block").animate({

    },800);
  });
    $(".menu li a").mouseleave(function(){
      $(".sub").stop().css("display","none");
      $(this).css("color","#fff");      
  });

//상단메뉴 끝

$(".menu2 li a").on("click",function(){
  $(".suv").stop().css("display","none");

  numStr = $(this).attr("class");
  const num = numStr.substr(3,1);

  $(this).css("background","#f986bd");
  $(this).css("color","#fff");

  $(".suv"+num).css("display","block").animate({
    
  },800);
});


  $(".menu2 li a").mouseleave(function(){
  $(this).stop().css("background","#fff");
  $(this).css("color","#f986bd");


  // $(".menu2 li a").on("click",function(){
  //   $(".suv").stop().css("display","none");      
});
});



