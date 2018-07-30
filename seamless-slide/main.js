setTimeout(() => {
    $('.images>img:nth-child(1)').css({
        transform: 'translateX(-100%)'
    })
    $('.images>img:nth-child(2)').css({
        transform: 'translateX(-100%)'
    })
    $('.images>img:nth-child(1)').one('transitionend', function (e) {
        $(e.currentTarget).addClass('right').css({
            transform: 'none',
        })
    })
}, 6000);


setTimeout(() => {
    $('.images>img:nth-child(2)').css({
        transform: 'translateX(-200%)'
    })
    $('.images>img:nth-child(3)').css({
        transform: 'translateX(-100%)'
    })
    $('.images>img:nth-child(2)').one('transitionend', function (e) {
        $(e.currentTarget).addClass('right').css({
            transform: 'none',
            'z-index': -1
        })
    })
}, 12000);

setTimeout(() => {
    $('.images>img:nth-child(3)').css({
        transform: 'translateX(-200%)'
    })

    $('.images>img:nth-child(1)').css({
        transform: 'translateX(-100%)'
    })
    $('.images>img:nth-child(3)').one('transitionend', function (e) {
        $(e.currentTarget).addClass('right').css({
            transform: 'none',
            'z-index': -2
        })
    })
}, 18000);