import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from '../database/database.module';
import { UserModule } from 'src/modules/user/user.module';
import { TaskModule } from 'src/modules/task/task.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule.forRoot(),
    UserModule,
    TaskModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
