import { FactDetailComponent } from './fact-detail/fact-detail.component';
import { Component } from '@angular/core';
import { NumberService } from 'app/number.service';
import { MdDialog, MdDialogRef } from '@angular/material';
import { FactResult } from './fact-detail/fact-detail';

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
    constructor(private numberService: NumberService, public dialog: MdDialog) {
        this.number = 0;
    }

    getFact(): void {
        console.log('[getFact] Number: ' + this.number);
        this.numberService.resolveFact(this.number, 'trivia').then(response => {
            console.log('[getFact] Get fact successfully: ' + response);
            this.fact = response as string;
            this.openDialog('Detail:', this.fact);
        })
            .catch(error => this.handleException)
    }

    openDialog(title: string, message: string) {
        this.dialog.open(FactDetailComponent, {
            data: new FactResult(title, message)
        });
    }

    handleException(error: any) {
        console.log('Exception occurs: ', error);
        this.openDialog('Fact not found:', error.text());
    }
}
