window.addEventListener('load',function(){
    trackClientVisits()
    getClientIp()
    getTimezone()
})


function setCookie(cname, cvalue, exdays) {
    const d = new Date()
    d.setTime(d.getTime() + (exdays*24*60*60*1000))
    let expires = 'expires='+ d.toUTCString()
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/'
}

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


function trackClientVisits () {
    const counter = getCookie('counter')

    if (counter) {
        const visits = parseInt(counter) + 1

        document.getElementById('counter').innerText = visits
        setCookie('counter', visits, 30)  //cookies are set for 30 days
    } else {
        setCookie('counter', 0, 30)
    }
}


function getClientIp () {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        var res = this.responseText
        res = res.substring(2,res.length-2)
        document.getElementById('ip').innerText = JSON.parse(res).ip
        }
    };
        xhttp.open("GET", "https://api.ipify.org?format=jsonp&callback=?", true);
        xhttp.send();
}

// get the timezone
function getTimezone () {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone

    document.getElementById('timezone').innerText = timeZone
}



