let angka = "2 39 76 50 9 7 41 2 24 1 16";
angka = angka.split(" ");

angka.forEach(x => {
    let kalimat = "Infinity";
    if (isFinite(x) === true) {
        kalimat = "Not infinity"
    }

    console.log("Angka", x, kalimat);
});
