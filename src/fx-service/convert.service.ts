import { CrudController } from "../CrudController";

export class ConvertService {
 currencyMap:Map<string,string> = new Map();

 constructor(){
     this.currencyMap.set("USD","US Dollar");
 }

public getDiscription(ticker:string):string{
    if(this.currencyMap.has(ticker)){
        return this.currencyMap.get(ticker);
    }
    else{
        return null;
    }
}
}
  