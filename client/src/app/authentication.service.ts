import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { map } from 'rxjs/operators'
import { Router } from '@angular/router'

export interface UserDetails {
  _id: string
  first_name: string
  last_name: string
  status: string
  user_type: string
  email: string
  password: string
  exp: number
  iat: number
}

interface TokenResponse {
  token: string
}

export interface TokenPayload {
  _id: string
  first_name: string
  last_name: string
  status: string
  user_type: string
  email: string
  password: string
}

@Injectable()
export class AuthenticationService {
  private token: string

  constructor(private http: HttpClient, private router: Router) {}

  private saveToken(token: string): void {
    localStorage.setItem('usertoken', token)
    this.token = token
  }

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('usertoken')
    }
    return this.token
  }

  public getUserDetails(): UserDetails {
    const token = this.getToken()
    let payload
    if (token) {
      payload = token.split('.')[1]
      payload = window.atob(payload)
      return JSON.parse(payload)
    } else {
      return null
    }
  }

  public isLoggedIn(): boolean {
    const user = this.getUserDetails()
    if (user) {
      return user.exp > Date.now() / 1000
    } else {
      return false
    }
  }

  public register(user: TokenPayload): Observable<any> {
    return this.http.post(`/users/register`, user)
  }

  public login(user: TokenPayload): Observable<any> {
    const base = this.http.post(`/users/login`, user)

    const request = base.pipe(
      map((data: TokenResponse) => {
        if (data.token) {
          this.saveToken(data.token)
        }
        return data
      })
    )

    return request
  }

  public profile(): Observable<any> {
    return this.http.get(`/users/profile`, {
      headers: { Authorization: ` ${this.getToken()}` }
    })
  }

  public editprofile(user: TokenPayload): Observable<any> {
    return this.http.post(`/users/editprofile`, user, {
      headers: { Authorization: ` ${this.getToken()}` }
    })
  }

  public edituser(user: TokenPayload): Observable<any> {
    return this.http.post(`/users/edituser`, user, {
      headers: { Authorization: ` ${this.getToken()}` }
    })
  }

  public edituserdataofinfo(userdata): Observable<any> {
    return this.http.post(`/infos/edituserdataofinfo`, userdata)
  }

  public editletter(userdata): Observable<any> {
    return this.http.post(`/letters/editletter`, userdata)
  }

  public editcustomerinfo(data): Observable<any> {
    return this.http.post(`/infos/editcustomerinfo`, data, {
      headers: { Authorization: ` ${this.getToken()}` }
    })
  }

  public deleteuser(id): Observable<any> {
    return this.http.delete(`/users/deleteuser?id=${id}`)
  }

  public deleteletter(id): Observable<any> {
    return this.http.delete(`/letters/deleteletter?id=${id}`)
  }

  public deletecustomerinfo(id): Observable<any> {
    return this.http.delete(`/infos/deletecustomerinfo?id=${id}`)
  }

  public getAllUser(): Observable<any> {
    return this.http.get(`/users/alluser`, {
      headers: { Authorization: ` ${this.getToken()}` }
    })
  }

  public getAllCustomer(): Observable<any> {
    return this.http.get(`/users/allcustomer`, {
      headers: { Authorization: ` ${this.getToken()}` }
    })
  }

  public getAllCustomerinfos(): Observable<any> {
    return this.http.get(`/infos/allcustomerinfos`, {
      headers: { Authorization: ` ${this.getToken()}` }
    })
  }

  public getUserinfo(id): Observable<any> {
    return this.http.get(`/infos/getuserinfo?id=${id}`)
  }

  public getletter(id): Observable<any> {
    return this.http.get(`/letters/getletter?id=${id}`)
  }

  public createcustomerinfo(datas): Observable<any> {
    return this.http.post(`/infos/createinfo`,{datas})
  }

  public createletter(datas): Observable<any> {
    return this.http.post(`/letters/createletter`,{datas})
  }

  public logout(): void {
    this.token = ''
    window.localStorage.removeItem('usertoken')
    this.router.navigateByUrl('/')
  }
}
