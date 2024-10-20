function calculate(operator) {
    var no1 = parseFloat(document.getElementById('no1').value);
    var no2 = parseFloat(document.getElementById('no2').value);
    var hasil;

    switch (operator) {
        case '+':
            hasil = no1 + no2;
            break;
        case '-':
            hasil = no1 - no2;
            break;
        case '*':
            hasil = no1 * no2;
            break;
        case '/':
            hasil = no1 / no2;
            break;
        default:
            hasil = "Angka tidak valid";
    }

    document.getElementById('hasil').value = hasil;
}
