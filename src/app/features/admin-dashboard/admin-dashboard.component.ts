import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { FormsModule,  FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxTablePaginationModule } from 'ngx-table-pagination';

import { MatRadioModule } from '@angular/material/radio';
import { DataService } from 'src/app/data.service';
import { SitebarWrapperComponent } from 'src/app/template/sitebar-wrapper/sitebar-wrapper.component';
import { SmartUploadComponent } from 'src/app/components/smart-upload/smart-upload.component';
import { PageHeaderComponent } from 'src/app/template/page-header/page-header.component';
import { AddProjectComponent } from 'src/app/components/add-project/add-project.component';
import { NodeWithI18n } from '@angular/compiler';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, 
    Ng2SearchPipeModule, RouterModule, SitebarWrapperComponent, AddProjectComponent,
    NgxTablePaginationModule, MatRadioModule, SmartUploadComponent, PageHeaderComponent,
    FormsModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit, OnDestroy
{
  isScreenSmall: boolean = false;
  term: any;
  p: any;
  q: any;
  uploading: any;
  data: any;
  currentYear: any;
  email: any;
  user: any;
  isOpen: any = 'N';
  adding: any = 'N';
  isopen: any = 'N';
  istopopen: any = 'N';

  private _unsubscribeAll: Subject<any> = new Subject<any>();


     constructor(
      private _activatedRoute: ActivatedRoute,
      private _dataService: DataService,
      private _router: Router,
      public http: HttpClient  // used by upload
  ) { }

  toggleAdding() {
    if (this.adding=='N') {
      this.adding = 'Y'
    } else {
      this.adding = 'N'
    }
  }
  
    ngOnInit(): void
    {      
      let d = { name: 'home', link: '/', count: 0, isSmall: 'N', hideNav: 'N', hideHeader: 'N'};
      this._dataService.locationSubject.next(d);

            this._activatedRoute.data.subscribe(({ 
              data, menudata, userdata })=> { 
              this.data=data;
//              this.navigation=menudata
              this.user=userdata
              this.uploading='N'
              if (this.data.user.force_logout>0) {
                  localStorage.removeItem('uid');
                  this._router.navigate(['/forced-off',this.data.user.force_logout]);
              }
            }) 
    }

    toggleOpen(m: any) {
      if (m.open=='Y') {
        m.open='N';
      } else {
        m.open='Y';
      }
    }

    toggleTopOpen() {
      if (this.istopopen=='Y') {
        this.istopopen='N';
      } else {
        this.istopopen='Y';
      }
    }

    ngOnDestroy(): void
    {
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    trackByFn(index: number, item: any): any
    {
        return item.id || index;
    }

    postForm() {
      this._dataService.postForm("post-voice-script", this.data.formData).subscribe((data:any)=>{
        if (data['error_code']=="0") {
          this._router.navigate(['/dashboard',data['id']]);
        } else {

        }

       });
    }

    runOne(m: any) {

      let formData:any = { project_id: this.data.formData['id'], project_name: this.data.formData['script_name'], id: m.id, seq: m.seq, line: m.line }

      this._dataService.postForm("process-segment", formData).subscribe((data:any)=>{
        if (data['error_code']=="0") {
          location.reload();
        } else {

        }
       });
    }

    lreload() {
      location.reload();
    }
    saveOne(m: any) {

      let formData:any = { project_id: this.data.formData['id'], project_name: this.data.formData['script_name'], id: m.id, seq: m.seq, line: m.line }

      this._dataService.postForm("save-segment", formData).subscribe((data:any)=>{
        if (data['error_code']=="0") {
            location.reload();
        } else {

        }
       });
    }

}
