let current = 0
let $firstCopy = $('.images>img').eq(0).clone(true)
let $lastCopy = $('.images>img').eq(2).clone(true)

$('.images').append($firstCopy)
$('.images').prepend($lastCopy)

$('.images').css({
    transform: 'translateX(-400px)'
})

$('button').eq(0).on('click', function (e) {
    if (current == 2) {
        console.log('最后到第一张')
        $('.images').css({
            transform: 'translateX(-1600px)'
        }).one('transitionend', function () {
            $('.images').hide().offset()
            $('.images').css({
                transform: 'translateX(-400px)'
            }).show()
        })
    } else {
        $('.images').css({
            transform: 'translateX(-400px)'
        })
    }
    current = 0
})

$('button').eq(1).on('click', function (e) {
    $('.images').css({
        transform: 'translateX(-800px)'
    })
    current = 1
})

$('button').eq(2).on('click', function (e) {
    if (current == 0) {
        console.log('最后到第一张')
        $('.images').css({
            transform: 'translateX(0px)'
        }).one('transitionend', function () {
            $('.images').hide().offset()
            $('.images').css({
                transform: 'translateX(-1200px)'
            }).show()
        })
    } else {
        $('.images').css({
            transform: 'translateX(-1200px)'
        })
    }
    current = 2
})