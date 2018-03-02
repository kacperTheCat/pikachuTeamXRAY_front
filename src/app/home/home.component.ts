import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { GetConnectionDetails, DeviceInfo } from './getConnectionDetails.service';
// import { AuthenticationService } from '@app/core';
import { MatIconModule } from '@angular/material/icon';

import { environment } from '@env/environment';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  isLoading: Boolean;
  version = '';
  deviceName = '';
  ipAdress = '';
  username = 'Kacper';
  visible = true;
  constructor(private quoteService: GetConnectionDetails) { }

  ngOnInit() {
    this.isLoading = true;
    this.quoteService.getConnectionDetails().subscribe((datas: DeviceInfo) => {
      this.version = `v.${datas.version}`;
      this.deviceName = `${datas.deviceName}`;
      this.ipAdress = `ip address: ${datas.ipAddress}`;
      setTimeout(() => {
        this.isLoading = false;
      }, 2000);
    },
      (err) => {
        this.visible = !this.visible;
      }
    );
  }

}
