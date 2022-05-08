import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CellsService } from './cells/cells.service';
import { AllocateCellInputDto, AllocateCellOutputDto } from './dto/allocate-cell.input';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private readonly cellsService: CellsService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('allocateCell')
  allocateCell(@Body() {productId,quantity}: AllocateCellInputDto): AllocateCellOutputDto{
    return this.cellsService.allocate(productId,quantity);
  }  
}
