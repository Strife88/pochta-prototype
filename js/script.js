function spoiler() {
    var x = document.getElementById('calc');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}
function spoiler2() {
    var x = document.getElementById('calc2');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}
function modal() {
    var x = document.getElementById('modal-bg');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
    var c = document.getElementById('modal');
    if (c.style.display === 'none') {
        c.style.display = 'block';
    } else {
        c.style.display = 'none';
    }
}
function modal2() {
    var xs = document.getElementById('modal');
    if (c.style.display === 'block') {
        c.style.display = 'none';
    } else {
        c.style.display = 'block';
    }
    var c = document.getElementById('modal');
    if (c.style.display === 'block') {
        c.style.display = 'none';
    } else {
        c.style.display = 'block';
    }
}