import { FactDetailComponent } from './fact-detail/fact-detail.component';
import { MaterialModule } from './fact-material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';

@NgModule({
    declarations: [
        AppComponent,
        FactDetailComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MaterialModule,
        BrowserAnimationsModule,
    ],
    entryComponents: [
        FactDetailComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
