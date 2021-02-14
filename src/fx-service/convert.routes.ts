import express from "express";
import { convertService } from ".";

export const router = express.Router({
 strict:true
});

router.get("/",(req,res)=>{
    let result;
    // tslint:disable:no-console
    console.log("PARAMS: ",JSON.stringify(req.query));
    if(req.query.ticker){
        result = convertService.getCurrencyDescription(req.query.ticker.toString());
    }
    else{
        result = convertService.getCurrencyDescription("USD");
    }
    res.json(result);
})