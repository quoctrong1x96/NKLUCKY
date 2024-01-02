// excel-data.service.ts
import { Injectable } from '@angular/core';

const STORAGE_KEY_DATA = 'excelData';
const STORAGE_KEY_HEADER = 'excelHeaders';
const STORAGE_KEY_LUCKYDRAWER = 'luckyDrawer';

@Injectable({
  providedIn: 'root',
})
export class UploadDataService {
  private excelData: any[] = [];
  private excelHeader: any[] = [];
  private luckyDrawer: any[] = [];

  constructor() {
    // Load data from local storage when the service is created
    const storedData = localStorage.getItem(STORAGE_KEY_DATA);
    const storeHeader = localStorage.getItem(STORAGE_KEY_HEADER);
    const storedLuckyDrawer = localStorage.getItem(STORAGE_KEY_LUCKYDRAWER);

    this.excelData = storedData ? JSON.parse(storedData) : [];
    this.excelHeader = storeHeader ? JSON.parse(storeHeader) :[];
    this.luckyDrawer = storedLuckyDrawer? JSON.parse(storedLuckyDrawer) :[];
  }

  uploadData(data: any[], header: any[]): void {
    // Save the uploaded data
    this.excelData = data;
    this.excelHeader = header;
    this.luckyDrawer = [];

    // Save data to local storage
    localStorage.setItem(STORAGE_KEY_DATA, JSON.stringify(data));
    localStorage.setItem(STORAGE_KEY_HEADER, JSON.stringify(header));
    localStorage.setItem(STORAGE_KEY_LUCKYDRAWER, JSON.stringify([]));
  }

  getRandomName(): string {
    const randomNumber = Math.floor(Math.random() * this.excelData.length) + 1;
    return this.excelData[randomNumber]["Tên"];
  }

  getData(): any[] {
    // Return the current data
    return this.excelData;
  }

  getHeader(): any[] {
    // Return the current data
    return this.excelHeader;
  }

  // Hàm xáo trộn mảng
  shuffleData() {
    for (let i = this.excelData.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.excelData[i], this.excelData[j]] = [this.excelData[j], this.excelData[i]];
    }
  }
}

export interface LuckyDrawer {
  id: number;
  rewardId: number;
  userId: string;
}

