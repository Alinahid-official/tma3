// set a cookie
function setCookie(cname, cvalue, exdays) {
    const d = new Date()
    d.setTime(d.getTime() + (exdays*24*60*60*1000))
    let expires = 'expires='+ d.toUTCString()
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/'
}

// retrieve a cookie
function getCookie(cname) {
    let name = cname + '='
    let decodedCookie = decodeURIComponent(document.cookie)
    let ca = decodedCookie.split(';')
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i]
        while (c.charAt(0) == ' ') {
            c = c.substring(1)
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length)
        }
    }
}

//use counter cookie to track number of times visited
function trackVisits () {
    const cookie_counter = getCookie('counter')

    if (cookie_counter) {
        const numVisits = parseInt(cookie_counter) + 1

        document.getElementById('counter').innerText = numVisits
        setCookie('counter', numVisits, 30)  //cookies are set for 30 days
    } else {
        setCookie('counter', 0, 30)
    }
}

// get the ip address of the request
function getIp () {
    $.getJSON('https://api.ipify.org?format=jsonp&callback=?', function(data) {
        document.getElementById('ip').innerText = JSON.parse(JSON.stringify(data, null, 2))['ip'];
    });
}

// get the timezone
function getTimezone () {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone

    document.getElementById('timezone').innerText = timeZone
}

function start() {
    trackVisits()
    getIp()
    getTimezone()
}

window.addEventListener("load", start, false);


