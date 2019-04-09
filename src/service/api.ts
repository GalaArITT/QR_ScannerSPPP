import { Injectable } from '@angular/core';
import { Headers, RequestOptions, URLSearchParams, Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Api {

    private url = 'http://galaaritt-001-site1.itempurl.com/'; 
    //http://localhost:61873/api/ControlAsistencias //
    private headers: Headers = new Headers();
    
    constructor(private http: Http) { }

    put(endpoint: string, body: any) {
        return this.http.put(this.url + endpoint, body);
    }

}//class