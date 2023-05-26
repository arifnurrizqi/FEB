var startGame = document.getElementById('startGame');
startGame.onclick = function(){

    alert("Selamat datang di penghitung Faktor Persekutuan Terbesar (FEB)"); 
    let ulang = true;
    while(ulang){

    function hitungFPB(a, b) {
        if (b === 0)
            return a;
        else
            return hitungFPB(b, a % b);
    }
      // Meminta pengguna memasukkan dua bilangan
        var bilangan1 = parseInt(prompt("Masukkan bilangan pertama:"));
        var bilangan2 = parseInt(prompt("Masukkan bilangan kedua:"));

      // Menghitung FPB dari dua bilangan
        var fpb = hitungFPB(bilangan1, bilangan2);

      // Menampilkan hasil FPB
        alert("FPB dari " + bilangan1 + " dan " + bilangan2 + " adalah " + fpb);
        ulang=confirm("lagi ?");
    }
    alert("Terima kasih Sudah Menggunakan Tools ini 🗿");
}