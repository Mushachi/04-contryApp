import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'countries-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private countriesService: CountriesService,
  ) {}

  ngOnInit(): void {
    // this.activatedRoute.params
    //   .subscribe( params => {
    //     console.log({ params: params['id'] })
    // });

    // Primera forma
    // this.activatedRoute.params
    //   .subscribe( ({ id }) => {

    //     this.searchCountry(id);

    // });

    // Forma RXJS
    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.countriesService.searchCountryByAlphaCode( id ) )
      )
      .subscribe( country => {

        if( !country ) {
          return this.router.navigateByUrl('countries');
        }

        console.log({ country });
        return;
      });
  }

  // searchCountry( code: string ) {
  //   this.countriesService.searchCountryByAlphaCode( code )
  //     .subscribe( country => {
  //       console.log({ country })
  //   });
  // }

}
