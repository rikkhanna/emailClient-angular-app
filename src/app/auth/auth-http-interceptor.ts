import {Injectable} from '@angular/core';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpEventType
} from '@angular/common/http';
import { Observable } from "rxjs";
import { tap, filter } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthHttpInterceptor implements HttpInterceptor{
    //req: to be sent off to some remote server
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // req.withCredentials = true; /* req gives readonly access to properties */
        const modifiedReq = req.clone({
            withCredentials: true
        })
        return next.handle(modifiedReq).pipe(
            // filter(value => value.type === HttpEventType.Sent), /*  just another way to check */
            tap(
                (value) => { 
                    if(value.type === HttpEventType.Sent){
                        console.log('Request was sent to server');
                    }
                    if(value.type === HttpEventType.Response){
                        console.log('Got a Response from the API', value)
                    }
                })
        ); //passing req to next interceptor
    }
}
