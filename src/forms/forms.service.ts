import { Injectable } from '@nestjs/common';
import { CreateFormDto } from './dto/create-form.dto';
import { UpdateFormDto } from './dto/update-form.dto';
import { Form, FormDocument } from './schemas/form.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class FormsService {
  constructor(@InjectModel(Form.name) private formModel: Model<FormDocument>) {}

  async create(createFormDto: CreateFormDto) {
    const createdForm = new this.formModel(createFormDto);
    const newEntity = await createdForm.save();
    console.log('New form created: ', newEntity);
    return newEntity;
  }

  findAll() {
    return this.formModel.find().exec();
  }

  async findOne(id: string) {
    console.log('Looking for form: ',id);
    return await this.formModel.findById(id).exec();
  }

  async update(id: string, updateFormDto: UpdateFormDto) {
    console.log('Updating document: ', id);
    console.log('document: ', updateFormDto);
    Reflect.deleteProperty(updateFormDto, '_id');
    const updateRequest = await this.formModel.findOneAndUpdate(
      { _id: id },
      updateFormDto,
      { new: true },
    );
    console.log('Update request: ', updateRequest);
    return `This action updates a #${id} form`;
  }

  remove(id: number) {
    return `This action removes a #${id} form`;
  }
}
