AOS.init();


var nama = document.getElementById('nama');
var email = document.getElementById('email');
var subject = document.getElementById('subject');
var pesan = document.getElementById('pesan');

var nama_error = document.getElementById('nama_error');
var email_error = document.getElementById('email_error');
var subject_error = document.getElementById('subject_error');
var pesan_error = document.getElementById('pesan_error');

function validated() {
    if (nama.value.length < 4) {
        nama.style.border = '1px solid red';
        nama_error.style.display = 'block';
        nama.focus();
        return false;
    }
    if (email.value.length < 9) {
        email.style.border = '1px solid red';
        email_error.style.display = 'block';
        email.focus();
        return false;
    }
    if (subject.value.length < 4) {
        subject.style.border = '1px solid red';
        subject_error.style.display = 'block';
        subject.focus();
        return false;
    }
    if (pesan.value.length < 12) {
        pesan.style.border = '1px solid red';
        pesan_error.style.display = 'block';
        pesan.focus();
        return false;
    }
}

function emailVerify() {
    if (email.value.length >= 9) {
        email.style.border = '1px solid silver';
        email_error.style.display = 'none';
        return true;
    }
}

function namaVerify() {
    if (nama.value.length >= 4) {
        nama.style.border = '1px solid silver';
        nama_error.style.display = 'none';
        return true;
    }
}

function subjectVerify() {
    if (subject.value.length >= 4) {
        subject.style.border = '1px solid silver';
        subject_error.style.display = 'none';
        return true;
    }
}

function pesanVerify() {
    if (pesan.value.length >= 12) {
        pesan.style.border = '1px solid silver';
        pesan_error.style.display = 'none';
        return true;
    }
}

email.addEventListener('textInput', emailVerify);
nama.addEventListener('textInput', namaVerify);
subject.addEventListener('textInput', subjectVerify);
pesan.addEventListener('textInput', pesanVerify);