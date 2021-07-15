$(function () {
  var waves = function () {
    for (let i = 0; i < 8; i++) {
      var totals = [];
      var card = $(".card").eq(i);
      totals[i] = card.data();
      var cardWaves = [];
      cardWaves[i] = $(`.card span`).eq(i).attr("class");
      $("." + cardWaves[i]).css("top", totals[i].total);
    }
  }; /* スキルによって水の量が変わる処理 */
  waves();

  $(".work-arrow-btn").on("click", function () {
    var noneDis = $(".work-js");
    var indexBtn = $("button.work-arrow-btn").index(this);
    if (noneDis.eq(indexBtn).hasClass("work-click")) {
      noneDis.eq(indexBtn).removeClass("work-click");
    } else {
      noneDis.eq(indexBtn).addClass(`work-click`);
    }
    var rotateArrow = $(".work-arrow-btn");

    if (rotateArrow.eq(indexBtn).hasClass("work-rotate")) {
      rotateArrow.eq(indexBtn).removeClass("work-rotate");
    } else {
      rotateArrow.eq(indexBtn).addClass("work-rotate");
    }


  });/* ギャラリー画面のカード開閉 */

});

// $('.work-arrow-btn1').on('click',function(){

//   if($('.work-js').hasClass('work-none-display1')){
//     $('.work-js').removeClass('work-none-display1');
//     }else{
//       $('.work-js').addClass('work-none-display1');
//     }
// });

// $('.work-arrow-btn').on('click',function(){
//   var noneDis = $('.work-js');
//   var indexBtn = $('button.work-arrow-btn').index(this);
//   // var indexArry = [noneDis,index];

//   noneDis.eq(indexBtn).toggle('work-click');
