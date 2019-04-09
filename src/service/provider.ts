import { Api } from './api'; 
import { Injectable } from '@angular/core';

@Injectable()
export class Provider {
    constructor(private api: Api) { }

    registrarAsistencia(id) {
        return this.api.put("api/ControlAsistencias/"+id,null); //http://localhost:61873/api/ControlAsistencias
    }
}