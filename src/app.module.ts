import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { FormsModule } from './forms/forms.module';
import { CompaniesModule } from './companies/companies.module';
import { CollectorsModule } from './collectors/collectors.module';
import { SubmissionsModule } from './submissions/submissions.module';
import { ReportsModule } from './reports/reports.module';
import { CsvReportsModule } from './csv-reports/csv-reports.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://root:root@localhost:27017/data_market_db?authSource=admin&authMechanism=DEFAULT'
    ),
    UsersModule,
    FormsModule,
    CompaniesModule,
    CollectorsModule,
    SubmissionsModule,
    ReportsModule,
    CsvReportsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
