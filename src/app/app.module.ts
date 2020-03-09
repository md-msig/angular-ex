import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { ChangeTextDirective } from './change-text.directive';
import { PipeTestComponent } from './pipe-test/pipe-test.component';
import { SqrtPipe } from './app.sqrt';
import { GlobalService } from './global.service';

@NgModule({
  declarations: [
    AppComponent,
    NewCmpComponent,
    ChangeTextDirective,
    PipeTestComponent,
    SqrtPipe,
    RoutingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
