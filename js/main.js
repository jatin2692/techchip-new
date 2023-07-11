$(document).ready(function() {
    $('.hamburger').on('click', function(event) {
        if ($('.hamburger').hasClass("is-active")) {
            $('.hamburger').removeClass("is-active");
            $('.hamburger-label').text('Menu');
            $('#navigation').css('top', '-100%').addClass('visible');
            $('body').find('#nav-socials').insertAfter('#navigation').css({
                'position': 'fixed',
                'top': '50%',
                'left': '30px'

            });
        } else {
            $(this).addClass("is-active");
            $('.hamburger-label').text('Close');
            $('#navigation').css({
                'position': 'fixed',
                'top': '0'
            });
            $('body').find('#nav-socials').insertAfter('#navigation ul').css({
                'position': 'relative',
                'top': '0',
                'left': '0'
            });
        }
    });
    $('#navigation ul li a').each(function() {
        $('#navigation ul li a, #logo').on('click', function(event) {
            if ($('.hamburger').hasClass("is-active")) {
                $('.hamburger').removeClass("is-active");
                $('.hamburger-label').text('Menu');
                $('#navigation').css('top', '-100%').addClass('visible');
                $('body').find('#nav-socials').insertAfter('#navigation').css({
                    'position': 'fixed',
                    'top': '50%',
                    'left': '30px'

                });
            }
        });

    });
    $(".opener").click(function(event) {
        if ($('.hamburger').hasClass("is-active")) {
            $('.hamburger').removeClass("is-active");
            $('.hamburger-label').text('Menu');
            $('#navigation').css('top', '-100%').addClass('visible');
            $('body').find('#nav-socials').insertAfter('#navigation').css({
                'position': 'fixed',
                'top': '50%',

            });
        }
        event.preventDefault();

        let link = $(this).attr('title');
        $("html").removeClass('has-scroll-smooth');
        $("body").addClass('overflow-x');
        $(".c-scrollbar").css('visibility', 'hidden');
        $("#dialog").load(link).dialog("open");

    });
});

$(document).ready(function() {
    $(".modal a").not(".dropdown-toggle").on("click", function() {
        $(".modal").modal("hide");
    });
});

(function() {
    var words = [
            'Wordpress',
            'E-commerce',
            'Shopify',
            'Custom',

        ],
        i = 0;
    setInterval(function() {
        $('#changingword').fadeOut(function() {
            $(this).html(words[i = (i + 1) % words.length]).fadeIn();
        });
    }, 3000);
})();

(function() {
    var words = [
            'Website',
            'project',
            'audience',
            'business',
            'audience',
            'goals',
            'marketing',
        ],
        i = 0;
    setInterval(function() {
        $('#ctawords').fadeOut(function() {
            $(this).html(words[i = (i + 1) % words.length]).fadeIn();
        });
    }, 3000);

})();

let viewport = document.querySelector("#viewport");
