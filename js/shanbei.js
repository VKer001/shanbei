var play = function(offset) {
    var activeIndex = $('.vker-slide-images').data('active')
    var numberOfImgs = $('.vker-slide-images').data('imgs')
    var i = (activeIndex + offset + numberOfImgs) % numberOfImgs
    // 重新设置 active 下标
    $('.vker-slide-images').data('active', i)

    $('.vker-slide-active').removeClass('vker-slide-active')
    $($('.vker-slide-img')[i]).addClass('vker-slide-active')

    // 指示器
    $('.vker-slide-i-active').removeClass('vker-slide-i-active')
    $($('.vker-slide-i')[i]).addClass('vker-slide-i-active')
}

var playPrev = function() {
    play(-1)
}

var playNext = function() {
    play(1)
}


var bindTurn = function() {
    $('.vker-slide-turn').on('click', function() {
        if ($(this).hasClass('vker-slide-turn-left')) {
            playPrev()
        } else {
            playNext()
        }
    })
}

var _main = function() {
    bindTurn()
}

_main()
