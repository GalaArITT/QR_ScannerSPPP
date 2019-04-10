import { Api } from './api'; 
import { Injectable } from '@angular/core';

@Injectable()
export class Provider {
    constructor(private api: Api) { }
    
    registrarAsistencia(id:string, body:any) {
        return this.api.put("api/ControlAsistencias/"+id,body); //http://localhost:61873/api/ControlAsistencias
    }
}