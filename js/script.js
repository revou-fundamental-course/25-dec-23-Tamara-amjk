// Menginput luas segitiga
function hitungLuas() {
    var alas = parseFloat(document.getElementById('alas').value);
    var tinggi = parseFloat(document.getElementById('tinggi').value);

    if (!isNaN(alas) && !isNaN(tinggi)) {
        var luas = 0.5 * alas * tinggi;

        document.getElementById('output-luas').innerHTML = 'L = 1/2 x a x t' + '<br>';
        document.getElementById('output-luas2').innerHTML = 'L = 1/2 x ' + alas + ' x ' + tinggi;
        document.getElementById('result').innerHTML = 'L = ' + luas.toFixed(2) + 'cm²';


        document.getElementById('hasilLuas').style.display = 'block';
    } else {
        alert("Masukkin dulu angkanya atuh");
    }
}

// Button reset luas segitiga
function resetLuas() {
    document.getElementById('alas').value = '';
    document.getElementById('tinggi').value = '';

    var elemen = document.getElementById('hasilLuas');
    elemen.style.display = 'none';
}

// Menghitung keliling segitiga
function hitungKeliling() {
    var sisi1 = parseFloat(document.getElementById('sisi1').value);
    var sisi2 = parseFloat(document.getElementById('sisi2').value);
    var sisi3 = parseFloat(document.getElementById('sisi3').value);

    if (!isNaN(sisi1) && !isNaN(sisi2) && !isNaN(sisi3)) {
        var keliling = sisi1 + sisi2 + sisi3;

        // Rumus 
        document.getElementById('rumus-keliling').innerHTML = 'K = S1 + S2 + S3';
        document.getElementById('result-keliling').innerHTML = 'K = ' + sisi1 + ' + ' + sisi2 + ' + ' + sisi3 + '<br>' + 'K = ' + keliling.toFixed(2) + 'cm';
        // Output
        document.getElementById('output-keliling').style.display = 'block';
    } else {
        // Angka harus diisi
        alert("Masukkin dulu angkanya atuh");
    }
}

// Validasi input hanya angka
function validateNumericInput(input) {
    input.value = input.value.replace(/[^0-9]/g, '');
}

// Button reset keliling segitiga
function resetKeliling() {
    document.getElementById('sisi1').value = '';
    document.getElementById('sisi2').value = '';
    document.getElementById('sisi3').value = '';

    var elemen = document.getElementById('output-keliling');
    elemen.style.display = 'none';
}