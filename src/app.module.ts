import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagingController } from './messaging/messaging.controller';
import { MessagingService } from './messaging/messaging.service';
import { MessagingModule } from './messaging/messaging.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    // ConfigModule.forRoot({
    //   envFilePath: '.env',
    //   isGlobal: true,
    // }),
    // //connect to mongodb
    // MongooseModule.forRoot(process.env.MONGO_UI),
    // MessagingModule
  ],
  controllers: [AppController, MessagingController],
  providers: [AppService, MessagingService],
})
export class AppModule {}
