import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Permission } from './permission.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Permission])],
    exports: [TypeOrmModule],
})
export class PermissionModule {}
