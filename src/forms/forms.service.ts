import { Injectable } from '@nestjs/common';
import { CreateFormDto } from './dto/create-form.dto';
import { UpdateFormDto } from './dto/update-form.dto';
import { Form, FormDocument } from './schemas/form.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class FormsService {

  constructor(@InjectModel(Form.name) private formModel: Model<FormDocument>) {}

  create(createFormDto: CreateFormDto) {
    const createdForm = new this.formModel(createFormDto);
    createdForm.save();
    return 'This action adds a new form';
  }

  findAll() {
    return this.formModel.find().exec();
  }

  findOne(id: string) {
    console.log('Looking for form: ',id);
    return this.formModel.findById(id).exec();
  }

  update(id: number, updateFormDto: UpdateFormDto) {
    return `This action updates a #${id} form`;
  }

  remove(id: number) {
    return `This action removes a #${id} form`;
  }
}
