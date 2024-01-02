import { RewardService } from './list-reward.service';
import { Reward } from './reward';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'list-reward',
  templateUrl: './list-reward.component.html',
  styleUrls: ['./list-reward.component.css']
})
export class ListRewardComponent implements OnInit {
  rewards$?: Observable<Reward[]>;
  selectedId = 0;

  constructor(
    private service: RewardService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.rewards$ = this.service.getRewards();
  }

  onClickRewards(reward: any){
    console.log('Rewards have' + reward.totalDrawNumber + ' total and '+ reward.drewCount);
    if(reward.totalDrawNumber !== reward.drewCount) {
      reward.drewCount++;
      this.openSnackBar("ĐÃ QUAY THÊM 1 LƯỢT, TỔNG ĐÃ QUAY: "+ reward.drewCount);
    }else{
      this.openSnackBar("ĐÃ QUAY HẾT LƯỢT!!!")
    }
  }

  openSnackBar(message: string): void {
    this.snackBar.open(message, undefined,{
      duration: 2000, // 2 seconds
      horizontalPosition: 'center', // You can adjust this
      verticalPosition: 'bottom', // You can adjust this
      panelClass: ['custom-snackbar'],
    });
  }
}
