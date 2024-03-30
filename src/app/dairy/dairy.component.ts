import { Component, Inject } from '@angular/core';
import { DairyService } from '../dairy.service';
import { ffunc } from '../config';

@Component({
  selector: 'app-dairy',
  templateUrl: './dairy.component.html',
  styleUrls: ['./dairy.component.css'],
  providers: [{ provide: 'BOOL_VALUE', useValue: true },
              { provide: 'DAIRY_CHOICE', useFactory: ffunc, deps: ['BOOL_VALUE'] }]
})
export class DairyComponent {

  constructor(@Inject('DAIRY_CHOICE') public dairy: DairyService) { }

}
