import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LocalStorageService} from '../services/local-storage-service';


export class jwtInterceptor implements HttpInterceptor{

  constructor(private localService: LocalStorageService) {
  }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token : string|null= this.localService.getToken();
    if (token!== null){
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${JSON.parse(token).authToken}`
        }
      })
    }
    return next.handle(req);
  }
}
