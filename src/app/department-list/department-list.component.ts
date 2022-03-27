import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  departments=[

    {"id":1 , "name":"Angular"},
    {"id":2 , "name":"Node"},
    {"id":3 , "name":"Ruby"},
    {"id":4 , "name":"Bootstrap"}
  ]

  selectdept(department: { id: any; }){

  this.router.navigate([department.id],{relativeTo:this.route});
  }

}
