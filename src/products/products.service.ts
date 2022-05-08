import { Injectable } from '@nestjs/common';
import { CellType } from 'src/shared/models/enums';
import { IProduct } from './models/product.model';

@Injectable()
export class ProductsService {
    private products :IProduct[] = [
        { id: "milk", typesOfCellsNeeded: [CellType.COOLING] },
        { id: "bamba", typesOfCellsNeeded: [CellType.NORMAL] },
        { id: "apple", typesOfCellsNeeded: [CellType.NORMAL] },
        { id: "stain removal", typesOfCellsNeeded: [CellType.HAZARDOUS] },
        { id: "insulin", typesOfCellsNeeded: [CellType.HAZARDOUS, CellType.COOLING] },
    ];

    findAll(){
        return [...this.products];
    }

    findOne(id:string){
        return this.products.find(product => product.id === id);
    }
}
