import { Component } from '@angular/core';
import {UploadDataService} from '../../services/uploadData.service';

@Component({
  selector: 'app-crisis-center',
  templateUrl: './crisis-center.component.html',
  styleUrls: ['./crisis-center.component.css']
})
export class CrisisCenterComponent {
  constructor(private uploadDataService: UploadDataService){}
  selectedUser: any;
  listMembers: any;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.listMembers = this.uploadDataService.getData();
  }

  selectLuckyUser(): void {
    // Chọn người may mắn ngẫu nhiên từ mảng
    const randomIndex = Math.floor(Math.random() * this.listMembers.length);
    this.selectedUser = this.listMembers[randomIndex];
  }
}
