import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthenticationFailureDto } from "../models/authenticationError.dto";
import { AuthenticationSuccessDto } from "../models/authenticationSuccess.dto";
import { LoginDto } from "../models/login.dto";
import { RegisterDto } from "../models/register.dto";

@Injectable()
export class AuthenticationService {
    public constructor(private http: HttpClient) {}

    public login(credentials: LoginDto) : Observable<AuthenticationSuccessDto | AuthenticationFailureDto> {
        return this.http.post<AuthenticationSuccessDto | AuthenticationFailureDto>("", credentials);
    }

    public register(credentials: RegisterDto): Observable<AuthenticationSuccessDto | AuthenticationFailureDto>{
        return this.http.post<AuthenticationSuccessDto | AuthenticationFailureDto>("", credentials);
    }
} 