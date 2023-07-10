function convert(type) {
    if (type === 'celsius') {
        var celsius = parseFloat(document.getElementById('celsius').value);
        var fahrenheit = (celsius * 9 / 5) + 32;
        document.getElementById('fahrenheit').value = isNaN(fahrenheit) ? '' : fahrenheit;
    } else if (type === 'fahrenheit') {
        var fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
        var celsius = (fahrenheit - 32) * 5 / 9;
        document.getElementById('celsius').value = isNaN(celsius) ? '' : celsius;
    }
}
