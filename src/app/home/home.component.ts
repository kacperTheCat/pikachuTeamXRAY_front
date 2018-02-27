import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { QuoteService } from './quote.service';
// import { AuthenticationService } from '@app/core';
import { MatIconModule } from '@angular/material/icon';

import { environment } from '@env/environment';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  quote: string;
  isLoading: boolean;
  colors: string = `warn`;
  version: number;
  deviceName: string;
  ipAdress: string;

  constructor(private quoteService: QuoteService) { }

  ngOnInit() {
    this.quoteService.getConnectionDetails().subscribe(( datas ) => {
      this.version = `v.${datas.version}`;
      this.deviceName =`${datas.deviceName}`;
      this.ipAdress = `ip address: ${datas.ipAddress}`;
    });
  }
  // get username(): string | null {
  //   const credentials = this.authenticationService.credentials;
  //   return credentials ? credentials.username : null;
  // }
  getStatus() {
    this.colors = `primary`;
  }
}
