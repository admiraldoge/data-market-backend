import { PartialType } from '@nestjs/swagger';
import { CreateMetaDatumDto } from './create-meta-datum.dto';

export class UpdateMetaDatumDto extends PartialType(CreateMetaDatumDto) {}
