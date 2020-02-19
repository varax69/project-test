$(function() {
    $('.links a').click(function(e){
        e.preventDefault()
        var $a = $(this)
        var $li = $a.parent()

        if($li.hasClass('active')){
        return false;
        }

        var $target = $($a.attr('href'))
        $li.siblings('.active').removeClass('active')
        $li.addClass('active')

        $target.siblings().fadeOut(010, function(){
        $target.fadeIn(100)
        })
    });
});