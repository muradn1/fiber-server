import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AllocateCellsResolver } from './app.resolver';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CellsModule } from './cells/cells.module';
import { ProductsModule } from './products/products.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: true
    }),
    CellsModule,
    ProductsModule,
    SharedModule,
  ],
  controllers: [AppController],
  providers: [AppService, AllocateCellsResolver],
})
export class AppModule {}
