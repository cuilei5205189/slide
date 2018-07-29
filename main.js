var allButtons = $('#buttons > button')
for (let i = 0; i < allButtons.length; i++) {
    $(allButtons[i]).on('click', function (e) {
        var index = $(e.currentTarget).index()
        var n = index * -500
        $('#images').css({
            transform: 'translate(' + n + 'px)'
        })
    })
}



var n = 0
var size = allButtons.length

var timerId = setInterval(() => {
    n += 1
    allButtons.eq(n % size).trigger('click')
        .addClass('red')
        .siblings('.red').removeClass('red')
}, 1000)

$('.window').on('mouseenter', function (e) {
    window.clearInterval(timerId)
    console.log('mouseenter')

})
$('.window').on('mouseleave', function () {
    console.log('mouseleave')
    timerId = setInterval(() => {
        n += 1
        allButtons.eq(n % size).trigger('click')
            .addClass('red')
            .siblings('.red').removeClass('red')
    }, 1000)
})