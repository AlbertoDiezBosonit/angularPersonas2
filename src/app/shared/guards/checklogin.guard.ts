import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { PersonasService } from 'src/app/personas.service';

@Injectable({
  providedIn: 'root'
})
export class CheckloginGuard implements CanActivate {
  constructor(private servicio:PersonasService){}
  canActivate( ):  boolean  {
    alert('Se comprueba si se puede entrar o no');
    return false;
  }
  
}
