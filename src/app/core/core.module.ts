import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { UserService } from "../user/user.service";
import { SwUpdateService } from "./services/sw-update.service";

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule
  ],
  exports: [],
  providers: [
    UserService,
    SwUpdateService,
  ]
})
export class CoreModule {}
