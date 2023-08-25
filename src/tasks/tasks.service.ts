import { Injectable, NotFoundException } from '@nestjs/common';
import { Task, TaskStatus } from './tasks.model';
// import * as uuid from 'uuid/v1';
import { v4 as uuidv4 } from 'uuid';
import { CreateTaskDto } from './dto/creat-task.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Tasks } from './schema/tasks.schema';
import * as mongoose from 'mongoose';

@Injectable()
export class TasksService {
    constructor(
        @InjectModel(Tasks.name)
        private TasksModel: mongoose.Model<Tasks>
    ){}

    async findAll(): Promise<Tasks[]>{
        const tasks = await this.TasksModel.find();
        return tasks;
    }
    async createTask(task:Tasks):Promise<Tasks>{
        const res = await this.TasksModel.create(task)
        return res
    }
    async findTaskById(_id:String):Promise<Tasks>{
        const task = await this.TasksModel.findById({_id});
        if(!task) {
            throw new NotFoundException("Task not found")
        }
        return task
    }
    async updateTask(id:String , task:Tasks):Promise<Task>{
        return await this.TasksModel.findByIdAndUpdate(id , task , {
            new:true,
            runValidators:true
        })

    }
    async deleteTask(id:String):Promise<Task>{
        return await this.TasksModel.findByIdAndDelete(id)

    }
}

