import { FactResult } from './fact-detail';
import { Component, OnInit, Inject } from '@angular/core';
import { MD_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'app-fact-detail',
    template: `
    <h2 md-dialog-title>{{data.title}}</h2>
    <md-dialog-content style="font-family: 'Roboto';">{{data.message}}</md-dialog-content>
    <md-dialog-actions style="float: right;">
      <button md-button md-dialog-close style="background-color:#c0392b; color: #fff">Close</button>
    </md-dialog-actions>`,
})
export class FactDetailComponent implements OnInit {

    constructor( @Inject(MD_DIALOG_DATA) public data: FactResult) { }

    ngOnInit() {
    }

}
