$(function () {
  
  var waves = function () {/* スキルによって水の量が変わる処理 */
    for (let i = 0; i < 8; i++) {
      var totals = [];
      var cardWaves = [];
      var card = $(".card").eq(i);/* カードの番地取得 */
      var w = $(window).width();　/* ウィンドウ幅 */

    /* スマホ対応の際、data-totalが高いとスキル熟練度が見えなくなる問題のため、IF追記 */
      if (w <= 350) { 
        totals[i] = card.data();

        if(totals[i].total >= 170){/* data170以上の場合 */
        cardWaves[i] = $(`.card span`).eq(i).attr("class");
        $("." + cardWaves[i]).css("top", "143px");}
        else{/* data170以下の場合 */
          cardWaves[i] = $(`.card span`).eq(i).attr("class");
        $("." + cardWaves[i]).css("top", totals[i].total);}

      } else {
        totals[i] = card.data();
        cardWaves[i] = $(`.card span`).eq(i).attr("class");
        $("." + cardWaves[i]).css("top", totals[i].total);
      }
    }
  }; 
  waves();　/* 実行 */
  

/* ギャラリー画面のカード開閉 */
  $(".work-arrow-btn").on("click", function () {
    var noneDis = $(".work-js");
    var indexBtn = $("button.work-arrow-btn").index(this);　/* 開閉 */
    if (noneDis.eq(indexBtn).hasClass("work-click")) {
      noneDis.eq(indexBtn).removeClass("work-click");
    } else {
      noneDis.eq(indexBtn).addClass(`work-click`);
    }
    var rotateArrow = $(".work-arrow-btn");　/* 矢印回転 */

    if (rotateArrow.eq(indexBtn).hasClass("work-rotate")) {
      rotateArrow.eq(indexBtn).removeClass("work-rotate");
    } else {
      rotateArrow.eq(indexBtn).addClass("work-rotate");
    }
  }); 

  $(".toggle_btn").on("click", function () {

    if($("#header").hasClass("open")){

      $("#header").removeClass("open");

    }else{

      $("#header").addClass("open");
    }
    
    $('#mask').on('click', function() {
      // openクラスを削除して、メニューを閉じる
      $('#header').removeClass('open');
    });
    
  
  });

  $('a[href^="#"]').on("click",function(){/* スムーズスクロール */

    let href= $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top;
    $("html, body").animate({scrollTop:position}, 600, "swing");

    $('#header').removeClass('open');/* ハンバーメニューでスクロールした際のマスクが残ってしまうのをここで解決 */
  });

});

