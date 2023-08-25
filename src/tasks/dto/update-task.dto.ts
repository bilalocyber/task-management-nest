// import { IsNotEmpty } from "class-validator";
import { TaskStatus } from "../tasks.model";

export class updateTaskDto{
    // @IsNotEmpty()
    title: String;
    
    // @IsNotEmpty()
    description: String

    status : TaskStatus

}