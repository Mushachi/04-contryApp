import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent implements OnInit {

  private debouncer: Subject<string> = new Subject<string>();

  @Input()
  public placeholder: string = '';

  @Output()
  public onValue = new EventEmitter<string>();

  @Output()
  public onDebounce = new EventEmitter<string>();

  ngOnInit(): void {
    this.debouncer
      .pipe(
        debounceTime(1000)
      )
      .subscribe( value => {
      // console.log('Valor de debouncer: ', value);
      this.onDebounce.emit( value );
    });
  }

  emitValue( value: string ):void {
    this.onValue.emit( value );
  }

  // Metodo que recibe un termino
  onKeyPress( searchTerm: string ) {
    console.log(searchTerm);
    this.debouncer.next( searchTerm );
  }

}
