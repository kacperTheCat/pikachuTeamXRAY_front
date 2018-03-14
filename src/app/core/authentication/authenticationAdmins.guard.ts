import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { Logger } from '../logger.service';
import { AuthenticationService } from './authentication.service';

const log = new Logger('AuthenticationGuard');

@Injectable()
export class AuthenticationGuardAdmins {

  constructor(private router: Router,
              private authenticationService: AuthenticationService) { }

  canActivate(): boolean {
    if (this.authenticationService.getUserType() === 'admin') {
      return true;
    }

    log.debug('Not authenticated, redirecting...');
    this.router.navigate(['/'], { replaceUrl: true });
    return false;
  }

}
