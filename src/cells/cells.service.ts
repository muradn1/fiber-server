import { Injectable, NotFoundException } from '@nestjs/common';
import { AllocateCellResponse } from 'src/models/allocate-cell-response';
import { ProductsService } from 'src/products/products.service';
import { ArraysUtils } from 'src/shared/arrays.utils';
import { CellType } from 'src/shared/models/enums';
import { Cell } from './models/cell.model';

const ROWS = 10;
const COLUMNS = 10;

@Injectable()
export class CellsService {
    private cells: Cell[][];

    constructor(private readonly productsService: ProductsService,
        private readonly arraysUtils: ArraysUtils) {
        this.initCells();
    }

    private initCells() {
        this.cells = new Array(ROWS).fill(0).map(() =>
            new Array(COLUMNS).fill(0).map(() => new Cell()));

        //init Cooling Cells
        for (let i = 7; i < ROWS; i++) {
            for (let j = 7; j < COLUMNS; j++) {
                const cell: Cell = this.cells[i][j];
                if (cell.cellTypes[0] === CellType.NORMAL) {
                    cell.cellTypes.pop();
                }
                cell.cellTypes.push(CellType.COOLING);
            }
        }

        //init Hazardous Cells
        for (let i = 0; i < ROWS; i++) {
            const cell: Cell = this.cells[i][9];
            if (cell.cellTypes[0] === CellType.NORMAL) {
                cell.cellTypes.pop();
            }
            cell.cellTypes.push(CellType.HAZARDOUS);
        }
    }

    allocate(productId: string, quantity: number) {
        const product = this.productsService.findOne(productId);
        if (!product) {
            throw new NotFoundException("Product Not Found!");
        }

        for (let i = 0; i < ROWS; i++) {
            for (let j = 0; j < COLUMNS; j++){
                const cell = this.cells[i][j];
                if(cell.productId && cell.productId === productId){
                    if(cell.freeSpace() >= quantity){
                        cell.quantity += quantity;
                        return {foundCell:true, cell:`${i},${j}`};
                    }
                }
                else{
                    if(this.arraysUtils.isDeepEqual(cell.cellTypes, product.typesOfCellsNeeded)){
                        if(cell.capacity >= quantity){
                            cell.quantity = quantity;
                            cell.productId = productId;
                            return {foundCell:true, cell:`${i},${j}`};
                        }
                    }
                }
            }
        }

        return {foundCell:false};
    }
}
