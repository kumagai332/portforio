//スクロールすると上部に固定させるための設定を関数でまとめる
$(function () {
  var pos = $("#header").offset().top;
  var height = $("#header").outerHeight();
  $(window).on("scroll touchstart touchmove touchend", function () {
    console.log("Scroll event fired!");  // この行を追加
    if ($(this).scrollTop() > pos) {
      $("#header").addClass("fixed");
    } else {
      $("#header").removeClass("fixed");
    }
  });
});


//ナビゲーションをクリックした際のスムーススクロール
if (window.matchMedia('(max-width: 767px)').matches) {
  // window width is at less than 767px
  $('#g-navi a[href*="#"]').click(function () {
    var elmHash = $(this).attr('href');
    var pos = $(elmHash).offset().top;
    var headerHeight = $('#header').outerHeight();
    var headerPadding = parseInt($('#header').css('padding-top'));
    $('body,html').animate({ scrollTop: pos - headerHeight - headerPadding }, 500);
    return false;
  });
} else {
  // window width is greater than 767px
  $('#g-navi a[href*="#"]').click(function () {
    var elmHash = $(this).attr('href');
    var pos = $(elmHash).offset().top;
    var headerHeight = $('#header').outerHeight();
    var headerPadding = parseInt($('#header').css('padding-top'));
    var navUlHeight = $('nav ul').height();
    $('body,html').animate({ scrollTop: pos - headerHeight - headerPadding - navUlHeight }, 500);
    return false;
  });
}




//---------------下からスライドイン-------------------------------------------------------------------------------------------------------


// 動きのきっかけとなるアニメーションの名前を定義
function fadeAnime() {

  // ふわっ
  $('.fadeUpTrigger').each(function () { //fadeUpTriggerというクラス名が
    var elemPos = $(this).offset().top - 50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('fadeUp');// 画面内に入ったらfadeUpというクラス名を追記
    } else {
      $(this).removeClass('fadeUp');// 画面外に出たらfadeUpというクラス名を外す
    }
  });
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  fadeAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述


//スマートフォン用 menu
$(".menu-button").click(function () {
  $(this).toggleClass('active');
  $("#g-navi").toggleClass('panelactive');
});

$("#g-navi a").click(function () {//ナビゲーションのリンクがクリックされたら
  $(".menu-button").removeClass('active');//ボタンの activeクラスを除去し
  $("#g-navi").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});






