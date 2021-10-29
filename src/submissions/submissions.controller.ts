import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from "@nestjs/common";
import { SubmissionsService } from './submissions.service';
import { CreateSubmissionDto } from './dto/create-submission.dto';
import { UpdateSubmissionDto } from './dto/update-submission.dto';
import newBaseResponse from "../statics/baseResponse";

@Controller('submissions')
export class SubmissionsController {
  constructor(private readonly submissionsService: SubmissionsService) {}

  @Post()
  async create(@Body() createSubmissionDto: CreateSubmissionDto) {
    const baseResponse = newBaseResponse();
    try {
      baseResponse.data = await this.submissionsService.create(
        createSubmissionDto,
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
  async findAll(@Query() query) {
    const { page, limit } = query;
    const baseResponse = newBaseResponse();
    try {
      baseResponse.data = await this.submissionsService.findAll(
        parseInt(page),
        parseInt(limit),
      );
    } catch (error) {
      baseResponse.data = null;
      baseResponse.success = false;
      baseResponse.message = error.message;
    } finally {
      return baseResponse;
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.submissionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSubmissionDto: UpdateSubmissionDto) {
    return this.submissionsService.update(+id, updateSubmissionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.submissionsService.remove(+id);
  }
}
