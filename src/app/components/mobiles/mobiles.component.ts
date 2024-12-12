import { Component } from '@angular/core';
import { MobileService } from '../../services/mobile.service';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'mobiles',
  imports: [FormsModule,NgFor,NgIf],
  templateUrl: './mobiles.component.html',
  styleUrl: './mobiles.component.scss'
})
export class MobilesComponent {

  mobiles: any[] = [];
  newMobile = { name: '', brand: '', price: 0 };
  selectedMobile: any = null;

  constructor(private mobileService: MobileService) {}

  ngOnInit(): void {
    this.loadMobiles();
  }

  loadMobiles(): void {
    this.mobileService.getMobiles().subscribe((data) => {
      this.mobiles = data;
    });
  }

  addMobile(): void {
    this.mobileService.addMobile(this.newMobile).subscribe(() => {
      this.loadMobiles();
      this.newMobile = { name: '', brand: '', price: 0 };
    });
  }

  editMobile(mobile: any): void {
    this.selectedMobile = { ...mobile };
  }

  updateMobile(): void {
    if (this.selectedMobile) {
      this.mobileService.updateMobile(this.selectedMobile._id, this.selectedMobile).subscribe(() => {
        this.loadMobiles();
        this.selectedMobile = null;
      });
    }
  }

  deleteMobile(id: string): void {
    this.mobileService.deleteMobile(id).subscribe(() => {
      this.loadMobiles();
    });
  }

  deleteAllMobiles(): void {
    this.mobileService.deleteAllMobiles().subscribe(() => {
      this.loadMobiles();
    });
  }
}
