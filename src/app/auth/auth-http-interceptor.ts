import {Injectable} from '@angular/core';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest
} from '@angular/common/http';
import { Observable } from "rxjs";

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
        return next.handle(modifiedReq); //passing req to next interceptor
    }
}
