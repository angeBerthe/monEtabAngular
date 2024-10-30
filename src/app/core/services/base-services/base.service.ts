import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environmentDev} from '../../../../environments/environment.dev';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  private baseUrl: string = environmentDev.baseUrl

  constructor(private httpClient: HttpClient) { }

  connexion(endPoint: string,data: any): Observable<any>{
    return this.httpClient.post(`${this.baseUrl}/${endPoint}`,data);
  }

  // create(endPoint: string, data: any, item?: any): Observable<any>{
  //   return item !== null
  //     ? this.http.post(${this.baseUrl}/${endPoint}/${item}, data)
  //     : this.http.post(${this.baseUrl}/${endPoint}, data);
  // }
  create(endPoint: string, data: any): Observable<any>{
    return  this.httpClient.post(`${this.baseUrl}/${endPoint}`, data);
  }
  createById(endPoint: string, data: any, item: any): Observable<any>{
    return this.httpClient.post(`${this.baseUrl}/${endPoint}/${item}`, data);
  }
  getOne(endPoint: string, id: string){
    return this.httpClient.get(`${this.baseUrl}/${endPoint}/${id}`);
  }

  getOneBySlug(endPoint: string, id: string){
    return this.httpClient.get(`${this.baseUrl}/${endPoint}/${id}`);
  }
  getAll(endPoint: string, id?: any): Observable<any> {
    return id! == null
      ? this.httpClient.get(`${this.baseUrl}/${endPoint}/${id}`)
      :this.httpClient.get(`${this.baseUrl}/${endPoint}`);
  }
  updateData( endPoint: string, data: any){
    return this.httpClient.put(`${this.baseUrl}/${endPoint}`, data);
  }
  deleteData(endPoint: string, id: string){
    return this.httpClient.delete(`${this.baseUrl}/${endPoint}/${id}`);
  }
}
