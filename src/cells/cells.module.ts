import { Module } from '@nestjs/common';
import { ProductsModule } from 'src/products/products.module';
import { SharedModule } from 'src/shared/shared.module';
import { CellsService } from './cells.service';

@Module({
  imports:[ProductsModule,SharedModule],
  providers: [CellsService],
  exports:[CellsService],
})
export class CellsModule {}
