function calcular() {
    const homens = parseInt(document.getElementById('homens').value);
    const mulheres = parseInt(document.getElementById('mulheres').value);
    const criancas = parseInt(document.getElementById('criancas').value);
    
    const carne = ((homens * 500) + (mulheres * 300) + (criancas * 200)) / 1000;
    const frango = ((homens * 200) + (mulheres * 200) + (criancas * 100)) / 1000;
    const linguica = ((homens * 200) + (mulheres * 200) + (criancas * 200)) / 1000;
    const refrigerante = ((homens * 300) + (mulheres * 400) + (criancas * 200)) / 1000;
    const cerveja = ((homens * 800) + (mulheres * 500)) / 1000;
    
    document.getElementById('carne').textContent = `Carne bovina: ${carne.toFixed(1)} kg`;
    document.getElementById('frango').textContent = `Frango: ${frango.toFixed(1)} kg`;
    document.getElementById('linguica').textContent = `Linguiça: ${linguica.toFixed(1)} kg`;
    document.getElementById('refrigerante').textContent = `Refrigerante: ${refrigerante.toFixed(1)} L`;
    document.getElementById('cerveja').textContent = `Cerveja: ${cerveja.toFixed(1)} L`;
}
