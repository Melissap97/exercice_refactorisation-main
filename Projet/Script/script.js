import { PriceData } from "./PriceData.js";
import { DataPrice } from "./DataPrice.js";

document.getElementById('tva-form').addEventListener('submit', function() {
   
    const priceTTC = parseFloat(document.getElementById('p').value);
    const taxRate = parseFloat(document.getElementById('t').value);
    const resultsSection = document.getElementById('results');
    const priceData = new PriceData(priceTTC, taxRate);
    const DataP = new DataPrice(priceTTC, taxRate);

    //alerte si un champ invalide est rentré
    if (isNaN(priceTTC) || isNaN(taxRate) || priceTTC <= 0 || taxRate < 0) {
        alert('Veuillez entrer des valeurs valides.');
        return;
    } else { 
    //affiche les resultats dans la section results
    
    resultsSection.innerHTML = `
        <p>Prix HT : ${priceData.htPrice} €</p>
        <p>Part TVA : ${DataP.taxAmount} €</p>
        <p>Prix TTC :${priceData.ttcPrice}€</p>
    `;}

   
});