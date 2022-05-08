import { IAllocateCellInput, IAllocateCellOutput } from "src/shared/models/dtos";

export class AllocateCellInputDto implements IAllocateCellInput{
    productId:string;
    quantity:number;
}

export class AllocateCellOutputDto implements IAllocateCellOutput{
    foundCell: boolean;
    cell?: string;
}