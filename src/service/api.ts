import { Injectable } from '@angular/core';
import { Headers, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Api {

    private url = 'http://localhost:port/'; //http://localhost:61873/api/ControlAsistencias
    private headers: Headers = new Headers();
    
    constructor(private http: HttpInterceptor) { }

    put(endpoint: string, body: any) {
        // this.headers.set('Authorization', "Bearer " + this.help.getToken());
        // const options = new RequestOptions({ headers: this.headers });
        return this.http.put(this.url + endpoint, body, options);
    }

}//class