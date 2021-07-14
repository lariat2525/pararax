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
  };
  waves();

  
});
