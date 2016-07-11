$(document).ready(function(){
    $('.carousel').owlCarousel({
        loop:true,
        margin: 10,
        nav: true,
        navText: [],
        responsive:{
            0:{
                items:1
            }
        }
    });

    function grid() {
        var $grid = $('.grid').imagesLoaded(function () {
            $grid.masonry({
                itemSelector: '.grid-item',
                columnWidth: '.grid-sizer',
                percentPosition: true,
                gutter: 20
            });
        })
    }

    function search() {
        $('.grid-item').remove();
        var $searchKey = $('.search-fields').val();

        $.ajax({
            url: 'https://pixabay.com/api/?key=2874337-2f4149c7655f3148f045862c0&q=' + $searchKey + '&image_type=photo',
            dataType: 'jsonp',
            success: function (data) {
                var $html = $('#container').html();
                var $content = tmpl($html, data);
                $('.ideas').append($content);
                grid();
            },
            error: function () {
                alert('Error!');
            }
        });
    }

    search();

    $('.search-btn').on('click', function (e) {
        e.preventDefault();
        search();
        $('.search-fields').val('');
    });

    $('.search-fields').keypress(function () {
        if (event.keyCode == 13) {
            search();
            $('.search-fields').val('');
        }
    });
});