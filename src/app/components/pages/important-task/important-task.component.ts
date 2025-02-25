import { Component, inject } from '@angular/core';
import { PageTitleComponent } from '../../page-title/page-title.component';
import { TaskListComponent } from '../../task-list/task-list.component';
import { HttpService } from '../../../services/http.service';

@Component({
  selector: 'app-important-task',
  standalone: true,
  imports: [PageTitleComponent,TaskListComponent],
  templateUrl: './important-task.component.html',
  styleUrl: './important-task.component.css'
})
export class ImportantTaskComponent {
  newTask="";
  taskList:any[]=[];
  httpService=inject(HttpService);
  
  ngOnInit(){
    this.getAllTask();
  }
  
  getAllTask(){
    this.httpService.getAllTasks().subscribe((result:any)=>{
      this.taskList=result.filter((x:any)=>x.important==true);
    })
  }
  onComplete(task:any) {
    task.completed=true;
    console.log("complete",task);
    this.httpService.updateTask(task).subscribe(()=>{ 
    })
     
   }
  onImportant(task:any) {
    task.important=true;
    console.log("important",task);
    this.httpService.updateTask(task).subscribe(()=>{  
    })
    
  }

}
