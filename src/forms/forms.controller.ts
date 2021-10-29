import { Controller, Get, Post, Body, Patch, Param, Delete, Req } from "@nestjs/common";
import { FormsService } from './forms.service';
import { CreateFormDto } from './dto/create-form.dto';
import { UpdateFormDto } from './dto/update-form.dto';
import newBaseResponse from "../statics/baseResponse";

@Controller('forms')
export class FormsController {
  constructor(private readonly formsService: FormsService) {}

  @Post()
  async create(@Body() createFormDto: CreateFormDto) {
    const baseResponse = newBaseResponse();
    try {
      baseResponse.data = await this.formsService.create(createFormDto);
    } catch (error) {
      baseResponse.success = false;
      baseResponse.message = error.toString();
    } finally {
      return baseResponse;
    }
  }

  @Get()
  findAll() {
    return this.formsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Req() req) {
    console.log('Cookies from form req: ', req.cookies);
    return await this.formsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFormDto: UpdateFormDto) {
    console.log('Patch : ', updateFormDto);
    return this.formsService.update(id, updateFormDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.formsService.remove(+id);
  }

  @Post(':id/clone')
  async clone(@Param('id') id: string) {
    const baseResponse = newBaseResponse();
    try {
      baseResponse.data = await this.formsService.clone(id);
    } catch (error) {
      baseResponse.success = false;
      baseResponse.message = error.toString();
    } finally {
      return baseResponse;
    }
  }
}
