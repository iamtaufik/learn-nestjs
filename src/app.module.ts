import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { RouterModule } from '@nestjs/core';

@Module({
  imports: [
    PrismaModule,
    UserModule,
    RouterModule.register([
      {
        path: 'api',
        module: UserModule,
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
