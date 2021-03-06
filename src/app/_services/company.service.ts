import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  constructor(private http: HttpClient) {}

  // url de test en local
  URI_TEST = 'http://localhost:4000'
  // url de test a distance dans un reseau type lan
  URI_DEV = 'http://10.38.164.208:4000'

  getCompany(id: string) {
    return this.http.get(`${this.URI_TEST}/company/detail/${id}`)
  }

  getCompanies() {
    return this.http.get(`${this.URI_TEST}/company`)
  }

  addCompany(data) {
    //console.log(data)
    return this.http.post(`${this.URI_TEST}/company/add`, data)
  }

  getEdit(id: string) {
    return this.http.get(`${this.URI_TEST}/company/edit/${id}`)
  }

  updateCompany(id: string, data) {
    //console.log(data)
    //console.log(id)
    return this.http.post(`${this.URI_TEST}/company/update/${id}`, data)
  }

  deleteOne(id: string) {
    return this.http.post(`${this.URI_TEST}/company/delete`, { id })
  }
}
