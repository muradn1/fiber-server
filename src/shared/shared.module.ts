import { Module } from '@nestjs/common';
import { ArraysUtils } from './arrays.utils';

@Module({
    providers:[ArraysUtils],
    exports:[ArraysUtils]
})
export class SharedModule {}
