import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxTablePaginationModule } from 'ngx-table-pagination';


@Component({
  selector: 'app-vm-control',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, Ng2SearchPipeModule, NgxTablePaginationModule],
  templateUrl: './vm-control.component.html',
  styleUrls: ['./vm-control.component.css']
})
export class VmControlComponent    implements OnInit {
  data: any = {"formData":{"vm":"", "host":""}};
  email_error: any = 'N';
  adding: any = 'N';
  page_id: string='1';
  panel_id: string='1';
  accordion: any;
  centerClass: any = 'col-xl-9';
  accordion_showing: string = 'N';
  myfacilities_showing: string = 'N';
  cards_showing: string='Y';
  page_showing: string='cards';
  term: any;
  p: any;
  record: any;
  showwarning: any = 'N';
  showwarning2: any = 'N';
  @Output() close: EventEmitter<string> = new EventEmitter<string>();


  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _dataService: DataService
    ) { }

    handleDateClick(arg:any) {
      console.log(arg.event._def.publicId)
      console.log('date click')
      console.log(arg)
    }

    toggleAdd() {
      this.showwarning = 'N'
      this.showwarning2 = 'N'
      if (this.adding=='Y') {
        this.adding = 'N'
      } else {
        this.adding = 'Y'
      }
    }
    previewFacility(m:any) {
      this.record=m;
    }

    closeIt() {
      this.close.emit('X')
    }

    ngOnInit(): void {
      this.data.formData={"host":"", "vm": ""}
      setTimeout(() => {
        this.getForm();
      }, 100); 
    }

    postForm() {
      this.data.formData = {}
      this.data.formData['host']="webhost1-1";
      this.data.formData['vm']="1101"
      this._dataService.postForm("shutdown-vm", this.data.formData).subscribe((data:any)=>{
        if (data['error_code']=="0") {
          location.reload();
        } else {

        }

       });
    }

    getForm() {
      let formData: any = {
        id: 0
      }
      this._dataService.postForm("get-add-user-form", formData).subscribe((data:any)=>{
        this.data=data;
       });
    }
}
