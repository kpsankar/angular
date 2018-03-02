import {Component} from '@angular/core';

@Component({
  selector: 'app-aws',
  templateUrl: './aws.component.html',
  styles: [`
      .online {
        color:  white;
      }
    `]
})
export class AwsComponent {
  serverID = 10;
  serverStatus = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
