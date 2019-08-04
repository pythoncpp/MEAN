import { Injectable } from '@angular/core';
// import { Http } from '@angular/http'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { ConfigService } from '../../config.service';

@Injectable()
export class UserService {
  url = ''

  constructor(
    private configService: ConfigService,
    private http: HttpClient
  ) {
    this.url = this.configService.getConfiguration().url + '/user'
  }

  sigin(email: string, password: string) {
    const body = {
      password: password,
      email: email
    }
    return this.http.post(this.url + '/signin', body)
  }

  sigup(firstName: string, lastName: string, email: string, password: string) {
    const body = {
      firstName: firstName,
      lastName: lastName,
      password: password,
      email: email
    }
    return this.http.post(this.url + '/signup', body)
  }

}
