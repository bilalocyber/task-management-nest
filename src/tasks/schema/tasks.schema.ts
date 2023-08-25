import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";



@Schema({
    timestamps : true
})
export class Tasks{
    @Prop()
    title: String;
    @Prop()
    description:String;
    @Prop()
    status: TaskStatus
}
export enum TaskStatus{
    OPEN= 'OPEN',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE'
}

export const  TasksSchema = SchemaFactory.createForClass(Tasks);