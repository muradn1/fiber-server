export interface IAllocateCellInput{
    productId:string;
    quantity:number;
}

export interface IAllocateCellOutput{
    foundCell: boolean;
    cell?: string;
}