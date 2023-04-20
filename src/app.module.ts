import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientesModule } from './clientes/clientes.module';
import { ProductModule } from './product/product.module';
import { PrismaModule } from './prisma/prisma.module';



@Module({
  imports: [ProductModule, ClientesModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
