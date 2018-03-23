import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { UserService } from "../user/user.service";

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule
  ],
  exports: [],
  providers: [
    UserService
  ]
})
export class CoreModule {}
