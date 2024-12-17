export class PriceData {
    ttcPrice;
    taxRate;
    constructor(ttcPrice, taxRate) {
        this.ttcPrice = ttcPrice;
        this.taxRate = taxRate;
    } 
    //calcul prix HT 
 htPrice() {
     return this.ttcPrice / (1 + this.taxRate / 100);
    }
  //calcul montant taxes
 taxAmount() {
    return this.ttcPrice - this.htPrice();
}
};



     



 