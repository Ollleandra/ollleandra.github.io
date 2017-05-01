$(document).ready(function () {

    $(".slider").on("click",'.nav-button-lr a', function(){
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
    })

    $('[data-submenu]').submenupicker();
})
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAkKFwiLnNsaWRlclwiKS5vbihcImNsaWNrXCIsJy5uYXYtYnV0dG9uLWxyIGEnLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmICgkKFwiLmNvbnRlbnQxXCIpLmhhc0NsYXNzKFwiYWN0aXZlXCIpKXtcclxuICAgICAgICAgICAgJChcIi5jb250ZW50MVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKS5hZGRDbGFzcyhcImhpZGRlblwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgJChcIi5jb250ZW50MVwiKS5yZW1vdmVDbGFzcyhcImhpZGRlblwiKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCQoXCIuY29udGVudDJcIikuaGFzQ2xhc3MoXCJoaWRkZW5cIikpe1xyXG4gICAgICAgICAgICAkKFwiLmNvbnRlbnQyXCIpLnJlbW92ZUNsYXNzKCBcImhpZGRlblwiICkuYWRkQ2xhc3MoIFwiYWN0aXZlXCIgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgJChcIi5jb250ZW50MlwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKS5hZGRDbGFzcyhcImhpZGRlblwiKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgICQoJ1tkYXRhLXN1Ym1lbnVdJykuc3VibWVudXBpY2tlcigpO1xyXG59KSJdLCJmaWxlIjoibWFpbi5qcyJ9
