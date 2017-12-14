import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProfileComponent } from './components/profile.component'
import { AppComponent }  from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule ],
  declarations: [ AppComponent, ProfileComponent ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
