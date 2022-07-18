import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserTileComponent } from './user-tile/user-tile.component';
import { UserFormComponent } from './user-form/user-form.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    UsersComponent,
    UserTileComponent,
    UserFormComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
