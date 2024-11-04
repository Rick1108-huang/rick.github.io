$(document).ready(function() {
    // 平滑滾動到指定區塊
    $('.btn').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800);
        }
    });

    // 菜單項目彈出效果
    $('#menu .menu-item').hide().each(function(index) {
        $(this).delay(index * 200).fadeIn(600);
    });

    // 菜單項目懸停效果
    $('.menu-item').hover(
        function() {
            $(this).css({
                'box-shadow': '0 8px 16px rgba(0, 0, 0, 0.3)',
                'transform': 'scale(1.05)',
                'transition': 'all 0.3s ease'
            });
        },
        function() {
            $(this).css({
                'box-shadow': '0 4px 8px rgba(0, 0, 0, 0.2)',
                'transform': 'scale(1)',
                'transition': 'all 0.3s ease'
            });
        }
    );
     // 1. 平滑滾動效果
     $('a[data-scroll]').click(function(event) {
        event.preventDefault();
        let target = $(this).attr('data-scroll');
        $('html, body').animate({
            scrollTop: $('#' + target).offset().top
        }, 800);
    });

    // 2. 滾動顯示效果
    $(window).scroll(function() {
        $('.menu-item, .about-item').each(function() {
            let position = $(this).offset().top;
            let scroll = $(window).scrollTop();
            let windowHeight = $(window).height();
            if (scroll > position - windowHeight + 100) {
                $(this).animate({ 'opacity': '1', 'margin-top': '0px' }, 600);
            }
        });
    });

    // 初始化項目為隱藏和偏移狀態
    $('.menu-item, .about-item').css({
        'opacity': '0',
        'margin-top': '50px'
    });

    // 3. 返回頂部按鈕顯示與隱藏
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });

    // 返回頂部功能
    $('#back-to-top').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 800);
    });
});
