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
import { AddProductComponent } from 'src/app/components/add-product/add-product.component';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, 
    Ng2SearchPipeModule, RouterModule, SitebarWrapperComponent, AddProjectComponent, AddProductComponent,
    NgxTablePaginationModule, MatRadioModule, SmartUploadComponent, PageHeaderComponent,
    FormsModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent  implements OnInit, OnDestroy
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

  private _unsubscribeAll: Subject<any> = new Subject<any>();


     constructor(
      private _activatedRoute: ActivatedRoute,
      private _dataService: DataService,
      private _router: Router,
      public http: HttpClient  // used by upload
  ) { }

    ngOnInit(): void
    {      
            this._activatedRoute.data.subscribe(({ 
              data })=> { 
              this.data=data;
              this.uploading='N'
              //if (this.data.user.force_logout>0) {
              //    localStorage.removeItem('uid');
              //    this._router.navigate(['/forced-off',this.data.user.force_logout]);
              // }
            }) 
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

    toggleAdding() {
      if (this.adding=='N') {
        this.adding = 'Y'
      } else {
        this.adding = 'N'
      }
    }

}
