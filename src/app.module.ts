import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UsersModule } from "./users/users.module";
import { MongooseModule } from "@nestjs/mongoose";
import { FormsModule } from "./forms/forms.module";
import { CompaniesModule } from "./companies/companies.module";
import { CollectorsModule } from "./collectors/collectors.module";
import { SubmissionsModule } from "./submissions/submissions.module";
import { ReportsModule } from "./reports/reports.module";
import { CsvReportsModule } from "./csv-reports/csv-reports.module";
import { MetaDataModule } from "./meta-data/meta-data.module";
import { AuthenticationMiddleware } from "./common/middleware/authentication.middleware";
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
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
    MetaDataModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthenticationMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
