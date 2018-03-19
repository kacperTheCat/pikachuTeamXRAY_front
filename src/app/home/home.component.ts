import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { MatIconModule } from '@angular/material/icon';
import { environment } from '@env/environment';
import { GetDataService, DeviceInfo } from '../global/get-data.service';
import { machineInfo } from '../global/address';

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
  visible = true;

  constructor(private getData: GetDataService) { }

  ngOnInit() {
    this.isLoading = true;
    this.getData.getData(machineInfo).subscribe((datas: DeviceInfo) => {
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
