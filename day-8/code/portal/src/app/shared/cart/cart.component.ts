import { Component, OnInit } from '@angular/core';
import { CartService } from '../../movie/services/cart.srevice';
import { CartItem } from '../../movie/classes/cartItem';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-movie-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  items: CartItem[] = []
  total = 0

  constructor(
    private activeModal: NgbActiveModal,
    private service: CartService
  ) { }

  onClose() {
    this.activeModal.close('close')
  }

  ngOnInit() {
    this.service
      .getCartItems()
      .subscribe(response => {
        const result = response.json()
        if (result['status'] === 'success') {
          this.items = result['data']
          this.items.forEach(item => {
            this.total += item.total
          })
        }
      })
  }

  onPay() {
    const txnid = '123456'
    this.service
      .getHash(txnid, this.total, 'Movies', sessionStorage['username'], 'pythoncpp@gmail.com',  '')
      .subscribe(response => {
        console.log(response)
        const hash = response.text()
        console.log('hash: ' + hash)

        bolt.launch({
          key: 'DKPGuyIj',
          txnid: txnid,
          hash: hash,
          amount: this.total,
          firstname: sessionStorage['username'],
          email: 'pythoncpp@gmail.com',
          phone: '+91345345',
          productinfo: 'Movies',
          udf5: '',
          surl : 'http://localhost:4200/success',
          furl: 'http://localhost:4200/failure'
        },{ responseHandler: function(BOLT){
          console.log( BOLT.response.txnStatus );
          if(BOLT.response.txnStatus != 'CANCEL') {
            console.log(BOLT.response)
          }
        },
          catchException: function(BOLT){
             alert( BOLT.message );
          }
        });
      })


  }
}
