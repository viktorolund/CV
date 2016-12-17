$(document).ready(function() {

    $('#fullpage').fullpage({
        verticalCentered: false,
        paddingTop: '5em',
        responsiveWidth: 900,
        onLeave: function(index, nextIndex, direction) {
            var sectionIndex = nextIndex > 0 ? nextIndex - 1 : nextIndex;

            $('#bsmenu li.active').removeClass('active');        
            if (!$('#bsmenu li').eq(sectionIndex).hasClass('active')) {
                $('#bsmenu li').eq(sectionIndex).addClass('active');
            }

        }
    });

    $('#bsmenu li').click(function(e) {
        e.preventDefault();

        var menuEnum = {
                about: 1,
                knowledge: 2,
                career: 3
            },
            target;

        $('#bsmenu li.active').removeClass('active');        
        if (!$(this).hasClass('active')) {
            $(this).addClass('active');
        }

        target = $('#bsmenu li.active a').attr('id');

        $.fn.fullpage.moveTo(menuEnum[target]);

    });

});
