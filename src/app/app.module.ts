import { FactDetailComponent } from './fact-detail/fact-detail.component';
import { AppMaterialModule } from './fact-material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { FactHistoryComponent } from './fact-history/fact-history.component';

@NgModule({
    declarations: [
        AppComponent,
        FactDetailComponent,
        FactHistoryComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppMaterialModule,
        BrowserAnimationsModule,
    ],
    entryComponents: [
        FactDetailComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
