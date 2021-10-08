import { Controller, Get, Post, Body, Patch, Param, Delete, Req } from "@nestjs/common";
import { CollectorsService } from './collectors.service';
import { CreateCollectorDto } from './dto/create-collector.dto';
import { UpdateCollectorDto } from './dto/update-collector.dto';
import newBaseResponse from "../statics/baseResponse";

@Controller('collectors')
export class CollectorsController {
  constructor(private readonly collectorsService: CollectorsService) {}

  @Post()
  async create(@Body() createCollectorDto: CreateCollectorDto) {
    const baseResponse = newBaseResponse();
    try {
      baseResponse.data = await this.collectorsService.create(
        createCollectorDto,
      );
    } catch (error) {
      baseResponse.data = null;
      baseResponse.success = false;
      baseResponse.message = error.message;
    } finally {
      return baseResponse;
    }
  }

  @Get()
  findAll() {
    return this.collectorsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Req() req) {
    const baseResponse = newBaseResponse();
    try {
      baseResponse.data = await this.collectorsService.findOne(id, req.cookies.authToken);
    } catch (error) {
      baseResponse.data = null;
      baseResponse.success = false;
      baseResponse.message = error.message;
    } finally {
      return baseResponse;
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCollectorDto: UpdateCollectorDto) {
    return this.collectorsService.update(+id, updateCollectorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.collectorsService.remove(+id);
  }
}
