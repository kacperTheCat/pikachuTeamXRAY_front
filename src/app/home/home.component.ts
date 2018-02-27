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

  quote: String;
  isLoading: Boolean;
  version: Number;
  deviceName: String;
  ipAdress: String;
  username = 'Kacper';
  visible = true;
  constructor(private quoteService: QuoteService) { }

  ngOnInit() {
    this.isLoading = true;
    this.quoteService.getConnectionDetails().subscribe((datas) => {
      this.version = `v.${datas.version}`;
      this.deviceName = `${datas.deviceName}`;
      this.ipAdress = `ip address: ${datas.ipAddress}`;
      setTimeout(() => {
        this.isLoading = false;
      }, 2000);
    },
      err => this.visible = !this.visible;
    );
  }

}
