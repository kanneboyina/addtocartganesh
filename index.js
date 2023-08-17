
    var x = 0;
    var y = 0;
    document.getElementById("sra").innerText = x;
    document.getElementById("gani").innerText = "$" + y.toFixed(2);

    function addtocart() {
        x = x + 1;
    document.getElementById("sra").innerText = x;
    y = y + 10;
    document.getElementById("gani").innerText = "$" + y.toFixed(2);

    }

    function removetocart() {
        if (x > 0) {
        x = x - 1;
    document.getElementById("sra").innerText = x;
    y = y - 10;
    document.getElementById("gani").innerText = "$" + y.toFixed(2);
 }
}
