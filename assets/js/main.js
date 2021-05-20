function scroll_to(get_id) {
    let id = get_id.replace("#", "")
    const el = document.getElementById(id)
    el.scrollIntoView({behavior: "smooth", inline: "nearest"})
    history.pushState(null, null, `#${id}`)
}

window.addEventListener('scroll', function () {
    // Hide the arrow button when scrolling down the page
    var scrollPosition = window.scrollY
    var logoContainer = document.getElementsByClassName('arrow')[0]
    if (scrollPosition >= 100) logoContainer.classList.add('arrow--scrolled')
    else logoContainer.classList.remove('arrow--scrolled')
})

document.addEventListener('DOMContentLoaded', function () {
    // Load time since I coded
    var years_since = new Date("2016-03-01").getTime()
    var today = new Date().getTime()

    var ms = today - years_since
    var m = Math.floor(ms / 60_000)
    var h = Math.floor(m / 60)
    var d = Math.floor(h / 24)
    var y = Math.floor(d / 365)

    document.getElementById("years-of-coding").innerText = y + " years"
})