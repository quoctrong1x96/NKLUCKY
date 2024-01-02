import { Component, OnDestroy, OnInit } from '@angular/core';
import { UploadDataService } from '../../services/uploadData.service';

@Component({
  selector: 'app-random-round',
  templateUrl: './random-round.component.html',
  styleUrl: './random-round.component.css'
})
export class RandomRoundComponent 
  implements OnInit, OnDestroy {
    private updateInterval: any;
    displayName: string = 'Random Round';
    timeDelay: number = 1; // Thời gian delay mặc định
    private stopIntervalTimeout: any;
    isIncreasingDelay: boolean = false; // Trạng thái hiện tại của quá trình tăng thời gian delay
  
    constructor(public excelDataService: UploadDataService) {}
    

    ngOnInit(): void {
      // Bắt đầu gọi hàm updateExcelData mỗi giây
      // this.updateInterval = setInterval(() => {
      //   this.displayName = this.excelDataService.getRandomName();
      // }, 100);
    }

    startRandomizing(): void {
      // Bắt đầu gọi hàm updateExcelData với thời gian delay giảm từ 1000 về 10
      this.updateInterval = setInterval(() => {
        this.displayName = this.excelDataService.getRandomName();
      }, this.timeDelay);

      // Hẹn giờ để dừng interval sau khoảng 30 giây (30000 milliseconds)
    this.stopIntervalTimeout = setTimeout(() => {
      clearInterval(this.updateInterval);
    }, Math.floor(Math.random() * 8000) + 20000);
    }

    ngOnDestroy(): void {
      // Đảm bảo dừng interval khi component bị hủy
      clearTimeout(this.stopIntervalTimeout);
    }
  }
