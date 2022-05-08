import { NotFoundException } from "@nestjs/common";
import { Args, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CellsService } from "./cells/cells.service";
import { AllocateCellResponse } from "./models/allocate-cell-response";
import { UserInputError } from "apollo-server-express"


@Resolver()
export class AllocateCellsResolver {
    constructor(
        private readonly cellsService: CellsService,
    ) { }

    @Query(returns => String, { name: 'hello' })
    async getHello() {
        return "Hello World!"
    }

    @Mutation(returns => AllocateCellResponse, { name: 'allocateCell' })
    async allocateCell(
        @Args('productId') productId: string,
        @Args({ name: 'quantity', type: () => Int }) quantity: number) {
        let result: AllocateCellResponse;
        try {
            result = this.cellsService.allocate(productId, quantity);
        }
        catch (error) {
            if( error instanceof NotFoundException){
                throw new UserInputError(error.message);
            }
            throw new Error("allocate cell resolver");
        }

        return result;
    }
}
