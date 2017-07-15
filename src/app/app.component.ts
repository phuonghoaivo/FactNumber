import { Component } from '@angular/core';
import { NumberService } from 'app/number.service';

@Component({
    selector: 'app-root',
    providers: [NumberService],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';

    number: number;
    fact: string;


    /**
     * Creates an instance of AppComponent.
     * @param {NumberService} numberService
     * @memberof AppComponent
     */
    constructor(private numberService: NumberService) {

    }

    getFact(): void {
        console.log('[getFact] Number: ' + this.number);
        this.numberService.resolveFact(this.number, 'trivia').then(response => {
            console.log('[getFact] Get fact successfully: ' + response);
            this.fact = response as string;
        })
            .catch(error => this.handleException)

    }

    handleException(error: any) {
        console.log('Exception occurs: ', error);
    }
}
