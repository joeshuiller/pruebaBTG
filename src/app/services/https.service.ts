import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpsService {
 private apiUrl = 'http://localhost:3000/';
  constructor(
    private http: HttpClient
  ) { }
   public headers=new HttpHeaders().set('Content-Type','multipart/form-data');
    POST =async (sub: string, obj: any) => await this.http.post<any>(this.apiUrl+sub , obj).toPromise();
    POSTDATA =async (sub: string, obj: any) => await this.http.post<any>(this.apiUrl+sub , obj, {headers: this.headers}).toPromise();
    GET = async (sub: string) => await this.http.get<any>(this.apiUrl+sub).toPromise();
    PUT = async (sub: string,obj:any) => await this.http.put<any>(this.apiUrl+sub, obj).toPromise();
    DELETE = async(sub: string) => await this.http.delete<any>(this.apiUrl+sub).toPromise();
}
