function luu() {
    var hoten = document.getElementById('hoten');
    var vtlv = document.getElementById('vtlv');
    var luong = document.getElementById('luong');
    var gioitinhnam = document.getElementById('gioitinhnam');
    var gioitinhnu = document.getElementById('gioitinhnu');

    var show = document.getElementsByClassName('show');
    var hotenx = document.getElementById('hotenx');
    var vtlvx = document.getElementById('vtlvx');
    var luongx = document.getElementById('luongx');
    var gioitinhx = document.getElementById('gioitinhx');
    if (hoten.value.trim() == '') {
        alert('Họ và tên không được để trống !');
    } else if (hoten.value.trim().length < 8) {
        alert('Họ và tên không nhập ít hơn 8 ký tự');
    } else if (vtlv.value == '') {
        alert('Vị trí làm việc không được để trống');
    } else if (vtlv.value.length > 100) {
        alert('Vị trí làm việc không được nhập quá 100 ký tự');
    } else if (luong.value < 0) {
        alert('lương không để số âm');
    } else if (gioitinhnam.checked == false && gioitinhnu.checked == false) {
        alert('Vui lòng chọn giới tính');
    } else {
        document.getElementsByClassName('container')[0].style.backgroundColor = 'hsl(104, 52%, 92%)';
        show[0].style.display = 'block';
        hotenx.innerHTML = hoten.value;
        vtlvx.innerHTML = vtlv.value;
        luongx.innerHTML = luong.value;
        if (gioitinhnu.checked == false) {
            gioitinhx.innerHTML = gioitinhnam.value;
        } else {
            gioitinhx.innerHTML = gioitinhnu.value;
        }
    }
}