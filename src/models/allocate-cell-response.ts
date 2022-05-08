import { Field, ObjectType } from "@nestjs/graphql";
import { IAllocateCellOutput } from "src/shared/models/dtos";

@ObjectType()
export class AllocateCellResponse implements IAllocateCellOutput {

    @Field()
    foundCell: boolean;

    @Field({nullable:true})
    cell?: string;
}

