import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

type Region = 'Africa' | 'America' | 'Asia' | 'Europa' | 'Oceania';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {

  public countries: Country[] = [];
  public regions: Region[] =  [ 'Africa', 'America', 'Asia', 'Europa', 'Oceania' ] ;
  public selectedRegion?: Region;

  constructor( private countriesService: CountriesService ) {}

  searchByRegion( region: Region ): void{
    // console.log('Desde byCapitalPage');
    // console.log({ term });

    this.selectedRegion = region;

    this.countriesService.searchRegion( region )
      .subscribe( countries => {
        this.countries = countries;
        // console.log( this.countries[8].translations['spa'].common );
    });

  }

}
