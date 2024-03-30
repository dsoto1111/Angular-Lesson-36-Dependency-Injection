import { Component, Inject } from '@angular/core';
import { DataService } from './data.service';
import { MultiplyService } from './multiply.service';
import { OtherDataService } from './other-data.service';
import { random, MOVIE_OBJECT, INJ_TOKEN } from './config';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [MultiplyService, [{ provide: DataService, useExisting: 'OTHER_SVC' },
                                  { provide: 'OTHER_SVC', useClass: OtherDataService },
                                  { provide: INJ_TOKEN, useValue: MOVIE_OBJECT }]]
})
export class AppComponent {
    constructor(@Inject(DataService) public data: DataService, @Inject(INJ_TOKEN) public movie: random) { }

    multiply() {
        this.data.multiply(3);
    }
}
