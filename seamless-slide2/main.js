let current = 0
makeFakeSlides()
bindEvents()
$(next).on('click', function (e) {
    goToSlide(current + 1)
})

$(pre).on('click', function (e) {
    goToSlide(current - 1)
})

let timer = setInterval(function () {
    goToSlide(current + 1)
}, 4000)

$('.container').on('mouseenter', () => {
    window.clearInterval(timer)
    console.log('enter');
}).on('mouseleave', () => {
    console.log('leave')
    timer = setInterval(() => goToSlide(current + 1), 2000)
})


function makeFakeSlides() {
    let $firstCopy = $('.images>img').eq(0).clone(true)
    let $lastCopy = $('.images>img').eq($('.buttons>button').length - 1).clone(true)
    $('.images').append($firstCopy)
    $('.images').prepend($lastCopy)
}


function bindEvents() {
    $('.buttons').on('mouseenter', 'button', function (e) {
        let $button = $(e.currentTarget)
        let index = $button.index()
        console.log($button.index())
        goToSlide(index)
    })
}

function addBtnColor($button) {
    $button
        .addClass('red')
        .siblings('.red').removeClass('red')
}
// let $button = $('.buttons>button')
// addBtnColor($button.eq(current))

function goToSlide(index) {
    if (index > $('.buttons>button').length - 1) {
        index = 0
    } else if (index < 0) {
        index = $('.buttons>button').length - 1
    }
    // console.log(current, index);
    addBtnColor($('.buttons>button').eq(index))
    if (current === $('.buttons>button').length - 1 && index === 0) {
        //最后一张到第一张
        $('.images').css({
            transform: `translateX(${-($('.buttons>button').length+1)*400}px)`
        }).one('transitionend', function () {
            $('.images').hide().offset()
            $('.images').css({
                transform: `translateX(-400px)`
            }).show()
        })
    } else if (current === 0 && index === $('.buttons>button').length - 1) {
        //第一张到最后一张
        $('.images').css({
            transform: `translateX(0px)`
        }).one('transitionend', function () {
            $('.images').hide().offset()
            $('.images').css({
                transform: `translateX(${-(index+1)*400}px)`
            }).show()
        })
    } else {
        $('.images').css({
            transform: `translateX(${-(index+1) * 400}px)`
        })
    }
    current = index
}

// $('.images').css({
//     transform: 'translateX(-400px)'
// })

// $('button').eq(0).on('click', function (e) {
//     if (current == 2) {
//         console.log('最后到第一张')
// $('.images').css({
//     transform: 'translateX(-1600px)'
// }).one('transitionend', function () {
//     $('.images').hide().offset()
//     $('.images').css({
//         transform: 'translateX(-400px)'
//     }).show()
// })
//     } else {
//         $('.images').css({
//             transform: 'translateX(-400px)'
//         })
//     }
//     current = 0
// })

// $('button').eq(1).on('click', function (e) {
//     $('.images').css({
//         transform: 'translateX(-800px)'
//     })
//     current = 1
// })

// $('button').eq(2).on('click', function (e) {
//     if (current == 0) {
//         console.log('最后到第一张')
//         $('.images').css({
//             transform: 'translateX(0px)'
//         }).one('transitionend', function () {
//             $('.images').hide().offset()
//             $('.images').css({
//                 transform: 'translateX(-1200px)'
//             }).show()
//         })
//     } else {
//         $('.images').css({
//             transform: 'translateX(-1200px)'
//         })
//     }
//     current = 2
// })