import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../classes/movie';
import { CartService } from '../../services/cart.srevice';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie.details.component.html',
  styleUrls: ['./movie.details.component.css']
})

export class MovieDetailsComponent implements OnInit {

  movie: Movie = null

  constructor(
    private router: Router,
    private service: MovieService,
    private cartService: CartService,
    private activatedRoute: ActivatedRoute
  ) { }

  onList() {
    this.router.navigate(['/movie/list'])
  }

  addToCart() {
    this.cartService
      .addToCart(this.movie.id, this.movie.price, 1, this.movie.price)
      .subscribe(response => {
        const result = response.json()
        if (result['status'] === 'success') {
          console.log(result)
          const count = result['data']['count']
          this.cartService.cartSizeChanged(count)
          console.log('added to cart')
        } else {
          alert(result['error'])
        }
      })
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      const id = params['id']
      if (id !== undefined) {
        this.service
          .getMovieDetails(id)
          .subscribe(response => {
            const result = response.json()
            if (result['status'] === 'success') {
              this.movie = result['data']
            } else {
              this.router.navigate(['/movie/list'])
            }
          })

      }
    })
  }
}
