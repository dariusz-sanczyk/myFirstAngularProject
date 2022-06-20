import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {NgxSnakeModule} from 'ngx-snake';
import { IntroComponent } from './intro/intro.component';
import { GameComponentComponent } from './game-component/game-component.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        IntroComponent,
        GameComponentComponent,
    ],
    imports: [
        BrowserModule,
        NgxSnakeModule,
        FormsModule,
        RouterModule.forRoot([
            {  path: 'intro', component: IntroComponent },
            {  path: 'game', component: GameComponentComponent },
            {  path: '**', redirectTo: 'intro' }]),
        HttpClientModule

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
