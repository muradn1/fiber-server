import { CellType } from "src/shared/models/enums";

export interface IProduct{
    id:string,
    typesOfCellsNeeded: CellType[]
  }