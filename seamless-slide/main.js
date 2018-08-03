let n
init()

let timer = setInterval(() => {
    makeLeave(getImage(n))
        .one('transitionend', (e) => {
            makeWaiting($(e.currentTarget))
        })
    makeCurrent(getImage(n + 1))
    n += 1
}, 2000)


//切换页面时，轮播暂停
document.addEventListener('visibilitychange', function (e) {
    if (document.hidden) {
        window.clearInterval(timer)
    } else {
        let timer = setInterval(() => {
            makeLeave(getImage(n))
                .one('transitionend', (e) => {
                    makeWaiting($(e.currentTarget))
                })
            makeCurrent(getImage(n + 1))
            n += 1
        }, 2000)
    }
})

function getImage(n) {
    return $(`.images>img:nth-child(${x(n)})`)
}

function x(n) {
    if (n > 3) {
        n = n % 3
        if (n === 0) {
            n = 3
        }
    }
    return n
}

function init() {
    n = 1
    $('.images>img:nth-child(1)').addClass('current')
        .siblings().addClass('waiting')
}

function makeCurrent($node) {
    $node.removeClass('waiting leave').addClass('current')
}

function makeLeave($node) {
    $node.removeClass('waiting current').addClass('leave')
    return $node
}

function makeWaiting($node) {
    $node.removeClass('leave current').addClass('waiting')
}

// setTimeout(() => {
//     $('.images>img:nth-child(1)').addClass('leave').removeClass('current')
//         .one('transitionend', (e) => {
//             $(e.currentTarget).removeClass('leave').addClass('waiting')
//         })
//     $('.images>img:nth-child(2)').addClass('current').removeClass('waiting')
// }, 3000);

// setTimeout(() => {
//     $('.images>img:nth-child(2)').addClass('leave').removeClass('current')
//         .one('transitionend', (e) => {
//             $(e.currentTarget).removeClass('leave').addClass('waiting')
//         })
//     $('.images>img:nth-child(3)').addClass('current').removeClass('waiting')
// }, 6000);

// setTimeout(() => {
//     $('.images>img:nth-child(3)').addClass('leave').removeClass('current')
//         .one('transitionend', (e) => {
//             $(e.currentTarget).removeClass('leave').addClass('waiting')
//         })
//     $('.images>img:nth-child(1)').addClass('current').removeClass('waiting')
// }, 9000);



// setTimeout(() => {
//     $('.images>img:nth-child(1)').css({
//         transform: 'translateX(-100%)'
//     })
//     $('.images>img:nth-child(2)').css({
//         transform: 'translateX(-100%)'
//     })
//     $('.images>img:nth-child(1)').one('transitionend', function (e) {
//         $(e.currentTarget).addClass('right').css({
//             transform: 'none',
//         })
//     })
// }, 6000);


// setTimeout(() => {
//     $('.images>img:nth-child(2)').css({
//         transform: 'translateX(-200%)'
//     })
//     $('.images>img:nth-child(3)').css({
//         transform: 'translateX(-100%)'
//     })
//     $('.images>img:nth-child(2)').one('transitionend', function (e) {
//         $(e.currentTarget).addClass('right').css({
//             transform: 'none',
//             'z-index': -1
//         })
//     })
// }, 12000);

// setTimeout(() => {
//     $('.images>img:nth-child(3)').css({
//         transform: 'translateX(-200%)'
//     })

//     $('.images>img:nth-child(1)').css({
//         transform: 'translateX(-100%)'
//     })
//     $('.images>img:nth-child(3)').one('transitionend', function (e) {
//         $(e.currentTarget).addClass('right').css({
//             transform: 'none',
//             'z-index': -2
//         })
//     })
// }, 18000);