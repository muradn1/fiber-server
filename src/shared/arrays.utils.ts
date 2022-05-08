import { Injectable } from "@nestjs/common";

@Injectable()
export class ArraysUtils{
    isDeepEqual(arr1:any[], arr2:any[]){
        if(arr1.length !== arr2.length){
            return  false;
        }

        for(let i=0; i<arr1.length; i++){
            if(!arr2.find(elemFromArr2 => arr1[i] === elemFromArr2)){
               return false
             }
        }
        
        return true;
    }
}