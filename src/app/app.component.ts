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
    myType: string;
    types = [
        { code: '1', name: 'trivia' },
        { code: '2', name: 'math' },
        { code: '3', name: 'date' },
        { code: '4', name: 'year' }
    ]

    /**
     * Creates an instance of AppComponent.
     * @param {NumberService} numberService
     * @memberof AppComponent
     */
    constructor(private numberService: NumberService, public dialog: MdDialog) {
        this.number = 0;
        this.myType = '1';
    }

    getFact(): void {
        console.log('[getFact] Number: ' + this.number);
        this.numberService.resolveFact(this.number, this.getType()).then(response => {
            console.log('[getFact] Get fact successfully: ' + response);
            this.fact = response as string;
            this.openDialog('Detail:', this.fact);
        })
        .catch(error => this.handleException)
    }

    getType(): string {
        let type = null;
        this.types.forEach(element => {
            if (element.code === this.myType) {
                type = element.name;
            }
        });
        return type;
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
