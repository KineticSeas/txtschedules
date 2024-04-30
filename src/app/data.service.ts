import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders, HttpParams, HttpEventType } from '@angular/common/http';
import { BehaviorSubject, Observable, of, map, tap } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class DataService {

  public locationSubject = new BehaviorSubject<any>({ name: 'Home', link: '/', count: 0, isSmall: 'N', hideNav: 'N', hideHeader: 'N'});
  public pageSubject = new BehaviorSubject<any>('{}');
  public paramSubject = new BehaviorSubject<any>('{}');
  public routerSubject = new BehaviorSubject<any>('{}');

  t: any;
  uid: any;
  url: any;
  un: any;
  role: any;
  hashBuffer: any;

  constructor(private http: HttpClient) { 
        this.url='https://sqllabs.ai/api/voice_router.php';
    }

    hashData(data: string): string {
      this.hashBuffer = crypto.subtle.digest('SHA-256', new TextEncoder().encode(data));

      return this.bufferToHexString(this.hashBuffer);
    }
  
    private bufferToHexString(buffer: ArrayBuffer): string {
      const byteArray = new Uint8Array(buffer);
      const hexChunks = Array.from(byteArray, byte => byte.toString(16).padStart(2, '0'));
      return hexChunks.join('');
    }

  getLocalStorage() {
    //
    if (localStorage.getItem('uid')===null) {
      this.uid="0";
    } else {
      this.uid=localStorage.getItem('uid')
    }

    if (localStorage.getItem('un')===null) {
      this.un="";
    } else {
      this.un=localStorage.getItem('un')
    }

    if (localStorage.getItem('role')===null) {
      this.role="";
    } else {
      this.role=localStorage.getItem('role')
    }
  }

  getData(path: any, id: any, id2: any, id3: any) {
    this.getLocalStorage();
    const data = {
      "q" : path,
      "id": id,
      "id2": id2,
      "id3": id3,      
      "uid": this.uid
    }

  this.t= this.http.post(this.url, data);
  return this.t;

  }

  postForm(formID: any, formData: any[]) {
    this.getLocalStorage();
    const data = {
      "q" : formID,
      "data": formData,
      "uid": this.uid
    }

  this.t= this.http.post(this.url, data);
  return this.t;

  }

  postAuth(username: any, password: any) {
    
    //let u = this.hashData(username);
    //let p = this.hashData(password);
    let u = username;
    let p = password;

    const data = {
      "u" : u,
      "p": p
    }
    
    this.t= this.http.post("https://sqllabs.ai/api/auth.php", data);
    return this.t;

  }

  postLogin(username: any, password: any) {
    //let u = this.hashData(username);
    //let p = this.hashData(password);

    let u: any = username;
    let p: any = password


    const data = {
      "u" : u,
      "p": p
    }

  this.t= this.http.post("https://sqllabs.ai/api/auth.php", data);
  return this.t;

  }

  getFile(q: any, id: any) {
  //  const data = {
  //    "q" : q,
  //    "id": id,
  //  }
    const data = {
      "q" : 'download-file',
      "id": 6,
    }
  console.log(data)
  this.t= this.http.post("https://sqllabs.ai/down.php", data);
  return this.t;

  }

  getVerticalMenu() {
    this.getLocalStorage()
    const data = {
      "q" : "vertical-menu",
      "uid": this.uid,
      "role": this.role
    }
  this.t= this.http.post("https://sqllabs.ai/api/psp-menu.php", data);
  return this.t;

  }

  getUser() {
    this.getLocalStorage()
    const data = {
      "q" : "vertical-menu",
      "uid": this.uid,
      "role": this.role
    }

  this.t= this.http.post("https://sqllabs.ai/api/u.php", data);
  return this.t;

  }
  
  getEnroll(token: any) {
    this.getLocalStorage()
    const data = {
      "q" : "enroll",
      "token": token
    }

  this.t= this.http.post("https://sqllabs.ai/api/enroll.php", data);
  return this.t;

}

postTemplate(file_data:any) {
  console.log(file_data);
  this.t=this.http.post('https://sqllabs.ai/api/upload_security_section.php',file_data);
  return this.t;
}

}

@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  // API url
  baseApiUrl = 'https://sqllabs.ai/up.php';  
  baseVerifyUrl = 'https://sqllabs.ai/verify.php';  
  public valid: any = {};

  uid: any = 0;
  constructor(private http: HttpClient) {}

  upload(file:File, postData: any): Observable<any> {

    const formData = new FormData();

    formData.append('file', file, file.name);
    let k: keyof typeof postData;  
    for (k in postData) {
      formData.append(k,postData[k]);
    }

    return this.http.post(this.baseApiUrl, formData, { 
      reportProgress: true,
      observe: 'events',
    });
  }

  upload_verify(file:File, postData: any): Observable<any> {


    const formData = new FormData();

    if (localStorage.getItem('uid')===null) {
      this.uid="0";
    } else {
      this.uid=localStorage.getItem('uid')
    }

    formData.append('file', file, file.name);
    formData.append('uid', this.uid);    
    let k: keyof typeof postData;  
    for (k in postData) {
      formData.append(k,postData[k]);
    }

    return this.http.post(this.baseVerifyUrl, formData, { 
      reportProgress: true,
      observe: 'events',
    })
    
  }


}