import { CellType } from "src/shared/models/enums";

export class Cell{
    productId: string = "";
    cellTypes: CellType[] = [CellType.NORMAL];
    quantity: number = 0;
    capacity: number = 10;

    freeSpace(){
        return this.capacity-this.quantity;
    }
}

