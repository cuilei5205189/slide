var currentIndex = 0

$('.next').on('click', function () {
    currentIndex++
    goTo(currentIndex)
})

$('.pre').on('click', function () {
    currentIndex--
    goTo(currentIndex)
})

function goTo(index) {
    if (index > $('.dots>.dot').length - 1) {
        index = 0
    } else if (index < 0) {
        index = $('.dots>.dot').length - 1
    }
    $('.images').css({
        transform: `translateX(-${400*index}px)`
    })
    addDotsColor(index)
    currentIndex = index
}

$('.window').on('mouseenter', function (e) {
    clearInterval(timer)
})
$('.window').on('mouseleave', function (e) {
    autoPlay()
})

var timer = null

function autoPlay() {
    timer = setInterval(function () {
        currentIndex++
        goTo(currentIndex)
    }, 1500)
}

autoPlay()

function addDotsColor(index) {
    $('.dots>.dot').eq(index).addClass('active').siblings().removeClass('active')
}

for (let i = 0; i < $('.dots>.dot').length; i++) {
    $('.dots>.dot').eq(i).on('mouseenter', function (e) {
        goTo($('.dots>.dot').eq(i).index())
    })
}