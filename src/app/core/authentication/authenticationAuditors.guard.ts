import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { Logger } from 'app/core/logger.service';
import { AuthenticationService } from './authentication.service';

const log = new Logger('AuthenticationGuard');

@Injectable()
export class AuthenticationGuardAuditors implements CanActivate {

  constructor(private router: Router,
              private authenticationService: AuthenticationService) { }

  canActivate(): boolean {
    if (this.authenticationService.getUserType() === 'auditor') {
      return true;
    } else {
      log.debug('Not authenticated, redirecting...');
      this.router.navigate(['/'], { replaceUrl: true });
      return false;
    }
  }

}
