import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgxSnakeModule} from 'ngx-snake';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        NgxSnakeModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
