import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {

  public departmentId!: number;
  constructor( private route:ActivatedRoute, private rt:Router) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe((params:ParamMap)=>{

      let id = params.get('id');

      if(id!=null){
      let id1= parseInt(id);
      this.departmentId=id1;
      } 

     
    })

    }

  doprevious(){

    let previousid = this.departmentId-1;
    this.rt.navigate(['/dptlist',previousid]);

      
  }

  donext(){
       let nextid = this.departmentId+1;
       
    this.rt.navigate(['/dptlist',nextid]);
  }

}
