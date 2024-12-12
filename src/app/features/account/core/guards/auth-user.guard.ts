/* eslint-disable @typescript-eslint/no-unused-vars */
import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { TokensService } from '@features/auth/core/stores/tokens.service';

export const authUserGuard: CanActivateFn = (route, state) => {
  const tokensService: TokensService = inject(TokensService);
  return tokensService.accessToken || tokensService.refreshToken? true:false;
};
