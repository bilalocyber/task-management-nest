import { Body, Controller , Delete, Get , Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './tasks.model';
import { CreateTaskDto } from './dto/creat-task.dto';
import { Tasks } from './schema/tasks.schema';
import { updateTaskDto } from './dto/update-task.dto';


@Controller('tasks')
export class TasksController {
    constructor(private taskService:TasksService){}

    @Get()
    getAllTasks(){
        return this.taskService.findAll()
    }

    @Post()
    createTask(
        @Body() 
        task: CreateTaskDto
    ){
        return this.taskService.createTask(task)
    }

    @Get(':id')
    findTask(
        @Param('id') id:String
    ){
        return this.taskService.findTaskById(id)
    }
    @Patch(':id')
    updateTask(
        @Param('id') id:String,
        @Body() task:updateTaskDto
    ){
        return this.taskService.updateTask(id , task)
    }
    @Delete(':id')
    deleteTask(
        @Param('id') id:String,
        // @Body() task:updateTaskDto
    ){
        return this.taskService.deleteTask(id)
    }
   
    
}
function Params(): (target: TasksController, propertyKey: "getTaskById", parameterIndex: 0) => void {
    throw new Error('Function not implemented.');
}

