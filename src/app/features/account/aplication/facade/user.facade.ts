import { inject, Injectable } from "@angular/core";
import { UserRepository } from "@features/account/domain/repository/user.repository";

@Injectable()
export class UserFacade {
  user: UserRepository = inject(UserRepository);

  getAllUsers() {
    return this.user.getAllUsers();
  }

  getUser() {
    return this.user.getUser();
  }
}
