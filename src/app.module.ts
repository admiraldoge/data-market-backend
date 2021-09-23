import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { FormsModule } from './forms/forms.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://root:root@localhost/data_market_db?authSource=admin&w=1'
    ),
    UsersModule,
    FormsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
