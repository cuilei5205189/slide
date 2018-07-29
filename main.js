var allButtons = $('#buttons > button')
for (let i = 0; i < allButtons.length; i++) {
    $(allButtons[i]).on('click', function (e) {
        var index = $(e.currentTarget).index()
        var p = index * -500
        $('#images').css({
            transform: 'translate(' + p + 'px)'
        })
        n = index
        addBtnColor(allButtons.eq(n))

    })
}

var n = 0
var size = allButtons.length

var timerId = setTimer()

$('.window').on('mouseenter', function (e) {
    window.clearInterval(timerId)
})
$('.window').on('mouseleave', function () {
    timerId = setTimer()
})

function playSlide(index) {
    allButtons.eq(index).trigger('click')
}

function addBtnColor($button) {
    $button
        .addClass('red')
        .siblings('.red').removeClass('red')
}

function setTimer() {
    return setInterval(() => {
        n += 1
        playSlide(n % size)
    }, 1000)
}