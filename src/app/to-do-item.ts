import { OnInit } from "@angular/core";
export class ToDoItemsComponent implements OnInit
{
    toDoItem: ToDoItem =
    {
        id: 1,
        name: "Call Joe",
        isComplete: false
    };
    constructor()
    {

    }
    ngOnInit()
    {
        
    }
}