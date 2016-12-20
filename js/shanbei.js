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

// 左右 turn 事件
var bindTurn = function() {
    $('.vker-slide-turn').on('click', function() {
        if ($(this).hasClass('vker-slide-turn-left')) {
            playPrev()
        } else {
            playNext()
        }
    })
}

// 指示器 事件
var bindIndicators = function() {
    $('.vker-slide-i').on('click mouseover', function() {
        var i = $(this).index()
        console.log(i);
        $('.vker-slide-active').removeClass('vker-slide-active')
        $($('.vker-slide-img')[i]).addClass('vker-slide-active')

        $('.vker-slide-i-active').removeClass('vker-slide-i-active')
        $($('.vker-slide-i')[i]).addClass('vker-slide-i-active')
    })
}

// 轮播延时设置
var timeTurn = function() {
    var main = $('.vker-slide-img')
    var timeId = setInterval(playNext, 2000)
    main.data('timeId', timeId)
 
    main.on('mouseover', function() {
        var timeId = main.data('timeId')
        clearInterval(timeId)
    })
    main.on('mouseout', function() {
        var timeId = setInterval(playNext, 2000)
        main.data('timeId', timeId)
    })
}

var _main = function() {
    bindTurn()
    bindIndicators()
    timeTurn()
}

_main()
