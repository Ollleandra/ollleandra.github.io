$(document).ready(function () {

    $(".mainSlider").on("click",'.nav-button-lr a', function(){
        if ($(".content1").hasClass("active")){
            $(".content1").removeClass("active").addClass("hidden");
        }
        else{
            $(".content1").removeClass("hidden").addClass("active");
        }
        if ($(".content2").hasClass("hidden")){
            $(".content2").removeClass( "hidden" ).addClass( "active" );
        }
        else{
            $(".content2").removeClass("active").addClass("hidden");
        }
    });

    $(window).scroll(function(){
            if ($(window).scrollTop()>200){
                $("nav").css("backgroundColor", "#343434");
            }
        else {
            $("nav").css("backgroundColor", "transparent");
        }
    });

    // $(".clientLogos").on("click","a.rightBtn", function(){
    //     $("figure:first-of-type").css("order","+=6");
    //
    // });


// Slider 7 carousels
//Click to right
    $(document).on('click', ".carousel-button-right",function(){
        var carusel = $(this).parents('.carousel');
        right_carusel(carusel);
        return false;
    });
//Click to left
    $(document).on('click',".carousel-button-left",function(){
        var carusel = $(this).parents('.carousel');
        left_carusel(carusel);
        return false;
    });
    function left_carusel(carusel){
        var block_width = $(carusel).find('.carousel-block').outerWidth();
        $(carusel).find(".carousel-items .carousel-block").eq(-1).clone().prependTo($(carusel).find(".carousel-items"));
        $(carusel).find(".carousel-items").css({"left":"-"+block_width+"px"});
        $(carusel).find(".carousel-items .carousel-block").eq(-1).remove();
        $(carusel).find(".carousel-items").animate({left: "0px"}, 0);

    }
    function right_carusel(carusel){
        var block_width = $(carusel).find('.carousel-block').outerWidth();
        $(carusel).find(".carousel-items").animate({left: "-"+ block_width +"px"}, 0, function(){
            $(carusel).find(".carousel-items .carousel-block").eq(0).clone().appendTo($(carusel).find(".carousel-items"));
            $(carusel).find(".carousel-items .carousel-block").eq(0).remove();
            $(carusel).find(".carousel-items").css({"left":"0px"});
        });
    }

    // $('[data-submenu]').submenupicker();
})
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAkKFwiLm1haW5TbGlkZXJcIikub24oXCJjbGlja1wiLCcubmF2LWJ1dHRvbi1sciBhJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBpZiAoJChcIi5jb250ZW50MVwiKS5oYXNDbGFzcyhcImFjdGl2ZVwiKSl7XHJcbiAgICAgICAgICAgICQoXCIuY29udGVudDFcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIikuYWRkQ2xhc3MoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICQoXCIuY29udGVudDFcIikucmVtb3ZlQ2xhc3MoXCJoaWRkZW5cIikuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgkKFwiLmNvbnRlbnQyXCIpLmhhc0NsYXNzKFwiaGlkZGVuXCIpKXtcclxuICAgICAgICAgICAgJChcIi5jb250ZW50MlwiKS5yZW1vdmVDbGFzcyggXCJoaWRkZW5cIiApLmFkZENsYXNzKCBcImFjdGl2ZVwiICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICQoXCIuY29udGVudDJcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIikuYWRkQ2xhc3MoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBpZiAoJCh3aW5kb3cpLnNjcm9sbFRvcCgpPjIwMCl7XHJcbiAgICAgICAgICAgICAgICAkKFwibmF2XCIpLmNzcyhcImJhY2tncm91bmRDb2xvclwiLCBcIiMzNDM0MzRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgJChcIm5hdlwiKS5jc3MoXCJiYWNrZ3JvdW5kQ29sb3JcIiwgXCJ0cmFuc3BhcmVudFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyAkKFwiLmNsaWVudExvZ29zXCIpLm9uKFwiY2xpY2tcIixcImEucmlnaHRCdG5cIiwgZnVuY3Rpb24oKXtcclxuICAgIC8vICAgICAkKFwiZmlndXJlOmZpcnN0LW9mLXR5cGVcIikuY3NzKFwib3JkZXJcIixcIis9NlwiKTtcclxuICAgIC8vXHJcbiAgICAvLyB9KTtcclxuXHJcblxyXG4vLyBTbGlkZXIgNyBjYXJvdXNlbHNcclxuLy9DbGljayB0byByaWdodFxyXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgXCIuY2Fyb3VzZWwtYnV0dG9uLXJpZ2h0XCIsZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgY2FydXNlbCA9ICQodGhpcykucGFyZW50cygnLmNhcm91c2VsJyk7XHJcbiAgICAgICAgcmlnaHRfY2FydXNlbChjYXJ1c2VsKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuLy9DbGljayB0byBsZWZ0XHJcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLFwiLmNhcm91c2VsLWJ1dHRvbi1sZWZ0XCIsZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgY2FydXNlbCA9ICQodGhpcykucGFyZW50cygnLmNhcm91c2VsJyk7XHJcbiAgICAgICAgbGVmdF9jYXJ1c2VsKGNhcnVzZWwpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG4gICAgZnVuY3Rpb24gbGVmdF9jYXJ1c2VsKGNhcnVzZWwpe1xyXG4gICAgICAgIHZhciBibG9ja193aWR0aCA9ICQoY2FydXNlbCkuZmluZCgnLmNhcm91c2VsLWJsb2NrJykub3V0ZXJXaWR0aCgpO1xyXG4gICAgICAgICQoY2FydXNlbCkuZmluZChcIi5jYXJvdXNlbC1pdGVtcyAuY2Fyb3VzZWwtYmxvY2tcIikuZXEoLTEpLmNsb25lKCkucHJlcGVuZFRvKCQoY2FydXNlbCkuZmluZChcIi5jYXJvdXNlbC1pdGVtc1wiKSk7XHJcbiAgICAgICAgJChjYXJ1c2VsKS5maW5kKFwiLmNhcm91c2VsLWl0ZW1zXCIpLmNzcyh7XCJsZWZ0XCI6XCItXCIrYmxvY2tfd2lkdGgrXCJweFwifSk7XHJcbiAgICAgICAgJChjYXJ1c2VsKS5maW5kKFwiLmNhcm91c2VsLWl0ZW1zIC5jYXJvdXNlbC1ibG9ja1wiKS5lcSgtMSkucmVtb3ZlKCk7XHJcbiAgICAgICAgJChjYXJ1c2VsKS5maW5kKFwiLmNhcm91c2VsLWl0ZW1zXCIpLmFuaW1hdGUoe2xlZnQ6IFwiMHB4XCJ9LCAwKTtcclxuXHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByaWdodF9jYXJ1c2VsKGNhcnVzZWwpe1xyXG4gICAgICAgIHZhciBibG9ja193aWR0aCA9ICQoY2FydXNlbCkuZmluZCgnLmNhcm91c2VsLWJsb2NrJykub3V0ZXJXaWR0aCgpO1xyXG4gICAgICAgICQoY2FydXNlbCkuZmluZChcIi5jYXJvdXNlbC1pdGVtc1wiKS5hbmltYXRlKHtsZWZ0OiBcIi1cIisgYmxvY2tfd2lkdGggK1wicHhcIn0sIDAsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICQoY2FydXNlbCkuZmluZChcIi5jYXJvdXNlbC1pdGVtcyAuY2Fyb3VzZWwtYmxvY2tcIikuZXEoMCkuY2xvbmUoKS5hcHBlbmRUbygkKGNhcnVzZWwpLmZpbmQoXCIuY2Fyb3VzZWwtaXRlbXNcIikpO1xyXG4gICAgICAgICAgICAkKGNhcnVzZWwpLmZpbmQoXCIuY2Fyb3VzZWwtaXRlbXMgLmNhcm91c2VsLWJsb2NrXCIpLmVxKDApLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAkKGNhcnVzZWwpLmZpbmQoXCIuY2Fyb3VzZWwtaXRlbXNcIikuY3NzKHtcImxlZnRcIjpcIjBweFwifSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gJCgnW2RhdGEtc3VibWVudV0nKS5zdWJtZW51cGlja2VyKCk7XHJcbn0pIl0sImZpbGUiOiJtYWluLmpzIn0=
