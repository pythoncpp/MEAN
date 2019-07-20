import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-activation',
  templateUrl: './activation.component.html',
  styleUrls: ['./activation.component.css']
})

export class ActivationComponent implements OnInit {

  constructor(
    private router: Router,
    private service: UserService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      const token = params['token']
      console.log('token: ' + token)
      if (token) {
        this.service
          .verifyAccount(token)
          .subscribe(response => {
            const result = response.json()
            if (result['status'] === 'success') {

              // add a delay
              setTimeout(() => {
                this.router.navigate(['/signin'])
              }, 2000)

            } else {
              alert('Error while verifying your account, please try again')
            }
          })
      }
    })
  }
}
