var nama = prompt("Hai, nama kamu siapa ya?");
confirm("Oh, Hai " + nama + ", mau bermain game?");

jawaban = confirm("Kita main suit yuk\nKalo aku menang, kamu jadi pacar aku.\nKalo kamu yg menang aku jadi pacar kamu deh");
while (jawaban) {
    var tanya = true;
    while (tanya) {

        // menangkap pilihan player
        var p = prompt('Pilih : gunting, kertas, batu');

        // menangkap pilihan komputer
        // membangkitkan bilangan random
        var comp = Math.random();

        if (comp < 0.34) {
            comp = 'gunting';
        } else if (comp >= 0.34 && comp < 0.67) {
            comp = 'kertas';
        } else {
            comp = 'batu';
        }

        var hasil = '';
        // menentukan rules
        if (p == comp) {
            hasil = 'SERI';
        } else if (p == 'gunting') {
            // if (comp == 'kertas') {
            //     hasil = 'MENANG';
            // } else {
            //     hasil = 'KALAH';
            // }
            hasil = (comp == 'kertas') ? 'MENANG' : 'KALAH';
        } else if (p == 'kertas') {
            hasil = (comp == 'gunting') ? 'KALAH' : 'MENANG';
        } else if (p == 'batu') {
            hasil = (comp == 'kertas') ? 'KALAH' : 'MENANG';
        } else {
            hasil = 'memasukkan pilihan yang salah';
        }

        // tampilkan hasilnya

        alert('Kamu memilih : ' + p + ' dan Aku memilih : ' + comp + '\nMaka hasilnya : Kamu ' + hasil);

        if (hasil === "KALAH") {
            alert("Yeaahhh kamu jadi milikku");
        } else if (hasil === "SERI") {
            alert("Yahh seri. Kita harus berjuang bersama-sama sepertinya");
        } else if (hasil === "memasukkan pilihan yang salah") {
            alert("Isinya batu, gunting atau kertas aja ih. Jangan yg lain");
        } else {
            alert("Okedeh aku jadi milikmu");
        }

        tanya = confirm('mau bermain lagi?');

    }
    jawaban = confirm("yakin ga mau sama aku?");
}