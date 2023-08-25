import { IsEnum, IsNotEmpty  } from "class-validator";
import { TaskStatus } from "../tasks.model";
import { isString } from "util";

export class CreateTaskDto{
    @IsNotEmpty()
    
    title: String;
    
    @IsNotEmpty()
    description: String
    @IsNotEmpty()
    @IsEnum(TaskStatus , {message:'please input a vALID enum '})
    status : TaskStatus

}