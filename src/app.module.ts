import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsModule } from './cats/cats.module';
import { EventsModule } from './events/events.module';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    //MongooseModule.forRoot('mongodb+srv://username:password@cluster0-nxbix.mongodb.net/test?retryWrites=true&w=majority\n'),
    //CatsModule,
    EventsModule,
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
