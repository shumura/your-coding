//ハンバーガーメニュー
$(function(){
  $('#js-hamburger').click(function(){
    $('body').toggleClass('is-drawerActive')

    if($(this).attr('aria-expanded') == 'false'){
      $(this).attr('aria-expanded', true);

      $('#js-global-menu').css('visibility', 'visible');
      $('#js-global-menu').attr('area-hidden', 'false');
    }else{
      $(this).attr('aria-expanded', false)
      $('#js-global-menu').css('visibility', 'hidden');
      $('#js-global-menu').attr('area-hidden', 'true');
    }
  })
});

//アコーディオンメニュー
$(function(){
    $('.question').each(function(){
        $(this).on('click', function(){           
            $("+.answer", this).slideToggle();
            return false;
        })
    });
});

//スライダー
var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: true,
    },
    slidesPerView: 1.5,
    centeredSlides: true,
    spaceBetween: 20,
    breakpoints: {
        897: {
            slidesPerView: 3.8,
            centeredSlides: true,
            spaceBetween: 56,
        },
        481: {
            slidesPerView: 3,
            centeredSlides: true,
        },
    },
});

//お問い合わせ
$(document).ready(function () {

    $('#form').submit(function (event) {
      var formData = $('#form').serialize();
      $.ajax({
        url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSe8ZwALQXzfeUpDXYkDcsfj3dfyGwSns7LaNbcTD7OUycFGww/formResponse",
        data: formData,
        type: "POST",
        dataType: "xml",
        statusCode: {
          0: function () {
            $(".end-message").slideDown();
            $(".submit-btn").fadeOut();
            //window.location.href = "thanks.html";
          },
          200: function () {
            $(".false-message").slideDown();
          }
        }
      });
      event.preventDefault();
    });

  });

  //お問い合わせチェック
  $(document).ready(function () {

    const $submitBtn = $('#js-submit')
    $('#form input,#form textarea').on('change', function () {
      if (
        $('#form input[type="text"]').val() !== "" &&
        $('#form input[type="mail"]').val() !== "" &&
        $('#form input[type="checkbox"]').val() !== "" &&
        $('#form #privacyCheck').prop('checked') === true
      ) {
        $submitBtn.prop('disabled', false);
  
      } else {
        $submitBtn.prop('disabled', true);
      }
    });
  
  });

  //スムーススクロール
  $(".btn").click(function(){

    var target = $(".contact").offset().top;

    target -= 100;

    $("html, body").animate({scrollTop: target}, 600)
    return false;
  });
  //アニメーション
  $(function(){
    AOS.init()
  });
 
