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

@Component({
  selector: 'app-project-dashboard',
  standalone: true,
  imports: [CommonModule, 
    Ng2SearchPipeModule, RouterModule, SitebarWrapperComponent,
    NgxTablePaginationModule, MatRadioModule, SmartUploadComponent, PageHeaderComponent,
    FormsModule],
  templateUrl: './project-dashboard.component.html',
  styleUrls: ['./project-dashboard.component.css']
})
export class ProjectDashboardComponent  implements OnInit, OnDestroy
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
  ups: any = 'N';

  private _unsubscribeAll: Subject<any> = new Subject<any>();


     constructor(
      private _activatedRoute: ActivatedRoute,
      private _dataService: DataService,
      private _router: Router,
      public http: HttpClient  // used by upload
  ) { }

    ngOnInit(): void
    {      
      let d = { name: 'home', link: '/', count: 0, isSmall: 'N', hideNav: 'N', hideHeader: 'N'};
      this._dataService.locationSubject.next(d);

            this._activatedRoute.data.subscribe(({ 
              data })=> { 
              this.data=data;
//              this.navigation=menudata
              this.uploading='N'
              if (this.data.user.force_logout>0) {
                  localStorage.removeItem('uid');
                  this._router.navigate(['/forced-off',this.data.user.force_logout]);
              }
            }) 
    }

    ngOnDestroy(): void
    {
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    toggleUpload() {
      if (this.ups=='Y') {
        this.ups='N'
      } else {
        this.ups='Y'
      }
    }
    trackByFn(index: number, item: any): any
    {
        return item.id || index;
    }

}
