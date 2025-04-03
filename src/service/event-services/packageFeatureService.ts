import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../app/environment/env.test";
import { Observable } from "rxjs";
import { PackageFeature } from "../../app/model/supplier/PackageFeature";

@Injectable({
    providedIn: 'root'
})
export class PackageFeatureService {
    constructor(private http: HttpClient) {
    }

    baseurl = `${environment.baseUrl}`;

    getAllPackageFeatures(): Observable<PackageFeature[]> {
        return this.http.get<PackageFeature[]>(`${this.baseurl}/api/supplier/package-feature`);
    }
    savePackageFeature(packageFeature: PackageFeature, packageID: number): Observable<PackageFeature> {
        return this.http.post<PackageFeature>(`${this.baseurl}/api/supplier/${packageID}/package-feature`, packageFeature);
    }
    deletePackageFeature(id: number): Observable<PackageFeature> {
        return this.http.delete<PackageFeature>(`${this.baseurl}/api/supplier/package-feature/${id}`);
    }
    updatePackageFeature(packageFeature: PackageFeature, packageID: number): Observable<PackageFeature> {
        return this.http.put<PackageFeature>(`${this.baseurl}/api/supplier/${packageID}/package-feature`, packageFeature);
    }
    searchPackageFeatureById(id: number): Observable<PackageFeature[]> {
        return this.http.get<PackageFeature[]>(`${this.baseurl}/api/supplier/package-feature/${id}`);
    }
}