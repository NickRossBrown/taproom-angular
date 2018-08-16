import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NewKegComponent } from './new-keg/new-keg.component';
import { KegListComponent } from './keg-list/keg-list.component';
import { EditTapComponent } from './edit-tap/edit-tap.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NewKegComponent,
    KegListComponent,
    EditTapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
