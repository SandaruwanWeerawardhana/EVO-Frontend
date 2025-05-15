import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { environment } from '../../app/environment/env.test';
import Supplier from '../../app/model/supplier';
import { Venue } from '../../app/model/supplier/Venue';
import OLD_Venue from '../../app/model/Venue';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class SupplierService {

    private apiUrl = `${environment.baseUrl}/api/supplier`;
    private allSuppliers: Supplier[] = [];

    constructor(private http: HttpClient) { }

    

getAllSuppliers(): Observable<Supplier[]> {
  return forkJoin([
    this.http.get<Supplier[]>(`${this.apiUrl}?category=PHOTOGRAPHY`),
    this.http.get<Supplier[]>(`${this.apiUrl}?category=CATERING`),
    this.http.get<Supplier[]>(`${this.apiUrl}?category=BEAUTY`),
    this.http.get<Supplier[]>(`${this.apiUrl}?category=VENUE`)
  ]).pipe(
    map((responses) => {
      this.allSuppliers = responses.flat(); 
      return this.allSuppliers;
    })
  );
}


    searchSupplier(id: string): Observable<Supplier> {
        return this.http.get<Supplier>(`${this.apiUrl}/${id}`);
    }


    updateSupplier(supplier: Supplier): Observable<Supplier> {
        return this.http.put<Supplier>(`${this.apiUrl}/update`, supplier);
    }


    deleteSupplier(supplierID: number): Observable<boolean> {
        return this.http.delete<boolean>(`${this.apiUrl}/delete/${supplierID}`);
    }
}
