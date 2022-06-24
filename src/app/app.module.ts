import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {NgxSnakeModule} from 'ngx-snake';
import { IntroComponent } from './intro/intro.component';
import { GameComponentComponent } from './game-component/game-component.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { StorageService } from './storage.service';
import { ScoresComponent } from './scores/scores.component';
import { SortPipe } from './sort.pipe';


@NgModule({
    declarations: [
        AppComponent,
        IntroComponent,
        GameComponentComponent,
        ScoresComponent,
        SortPipe,
    ],
    imports: [
        BrowserModule,
        NgxSnakeModule,
        FormsModule,
        RouterModule.forRoot([
            {  path: 'intro', component: IntroComponent },
            {  path: 'game', component: GameComponentComponent },
            {  path: 'scores', component: ScoresComponent },
            {  path: '**', redirectTo: 'intro' }]),
        HttpClientModule,
        ReactiveFormsModule

    ],
    providers: [StorageService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
