import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  userData: any;
  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.dataService.getUsers().subscribe((val) => {
      console.log(val);
      this.userData = val;
    });
  }
  displayedColumns: string[] = ['userid', 'id', 'title'];
}
