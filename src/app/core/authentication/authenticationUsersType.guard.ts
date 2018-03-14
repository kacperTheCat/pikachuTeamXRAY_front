import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { Logger } from '../../../../generators/app/templates/src/app/core/logger.service';
import { AuthenticationService } from './authentication.service';


const log = new Logger('AuthenticationGuard');

@Injectable()
export class AuthenticationGuardUsersType implements CanActivate {

  constructor(private router: Router,
    private authenticationService: AuthenticationService) { }

  canActivate(user:any): boolean {

    if (this.authenticationService.getUserType() === 'user') {
      return true;
    } else {
      log.debug('Not authenticated, redirecting...');
      this.router.navigate(['/about'], { replaceUrl: true });
      return false;
    }


  }


}
