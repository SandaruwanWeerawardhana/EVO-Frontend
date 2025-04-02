import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../app/environment/env.test';
import Supplier from '../../app/model/supplier';
@Injectable({
    providedIn: 'root'
})
export class SupplierService {

    private apiUrl = `${environment.baseUrl}/supplier`;

    constructor(private http: HttpClient) { }


    getAllSuppliers(): Observable<Supplier[]> {
        return this.http.get<Supplier[]>(`${this.apiUrl}/get-all`);
    }


    searchSupplier(id: number): Observable<Supplier> {
        return this.http.get<Supplier>(`${this.apiUrl}/search/${id}`);
    }


    updateSupplier(supplier: Supplier): Observable<Supplier> {
        return this.http.put<Supplier>(`${this.apiUrl}/update`, supplier);
    }


    deleteSupplier(supplierID: number): Observable<boolean> {
        return this.http.delete<boolean>(`${this.apiUrl}/delete/${supplierID}`);
    }
}
