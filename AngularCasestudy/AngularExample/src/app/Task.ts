export class Task{
    task_ID!: number;
    owner_ID!:number;
    creator_ID!:number;
    name!:string;
    description!:string;
    status!:string;
    priority!:string;
    notes!:string;
    isBookmarked!:Boolean;
    created_On!:object;
    status_Changed_On!:object;
}