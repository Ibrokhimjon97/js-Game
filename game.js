const biz = document.getElementById('biz');
const akasi = document.getElementById('akasi');
document.addEventListener("keydown", function(event) {
    jump();
});

function jump() {
    if (biz.classList != "jump") {
        biz.classList.add("jump")
    }
    setTimeout(function() {
        biz.classList.remove("jump")
    }, 300)
}
let isAlive = setInterval(function() {
    let bizTop = parseInt(window.getComputedStyle(biz).getPropertyValue("top"));
    let akasiLeft = parseInt(window.getComputedStyle(akasi).getPropertyValue("left"));

    if (akasiLeft < 50 && akasiLeft > 0 && bizTop >= 140) {
        alert("Akasi ushlab oldi!")
    }
}, 10)