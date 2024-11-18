import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';



@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent implements OnInit {

  public countries: Country[] = [];
  public isLoading: boolean = false;
  public regions: Region[] =  [ 'Africa', 'America', 'Asia', 'Europa', 'Oceania' ] ;
  public selectedRegion?: Region;
  public initialValue: Region = '';

  constructor( private countriesService: CountriesService ) {}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byRegion.countries;
    this.initialValue = this.countriesService.cacheStore.byRegion.region;
  }

  searchByRegion( region: Region ): void{
    // console.log('Desde byCapitalPage');
    // console.log({ term });

    this.isLoading = true;

    this.selectedRegion = region;

    this.countriesService.searchRegion( region )
      .subscribe( countries => {
        this.countries = countries;
        // console.log( this.countries[8].translations['spa'].common );
        this.isLoading = false;
    });

  }

}
