
export class ConvertService {
 private currencyMap:Map<string,string> = new Map();

 constructor(){
     this.currencyMap.set("USD","US Dollar");
     this.currencyMap.set("INR","Indian Rupees");
     this.currencyMap.set("CAD","Canadian Dollar");
 }

public getCurrencyDescription(ticker:string):string{
    if(this.currencyMap.has(ticker)){
        return this.currencyMap.get(ticker);
    }
    else{
        return null;
    }
}
}
