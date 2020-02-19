$(function() {
    function scrollTo( target ) {
        $("#arrowD").click(function(){
        if( target.length ) {
            $("html, body").stop().animate( { scrollTop: target.offset().top }, 1500);
        }
    });
    }
    scrollTo( $(".solutions") );
});

