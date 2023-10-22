import { Component, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-servers',
templateUrl: 'servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
    allowNewServer = false;
    serverCreationStatus = 'No server was created';
    serverName = '';
    createdServer = false;
    serversList = ['server1','server2']

    constructor(){
      setTimeout(()=>{
        this.allowNewServer = true;
      },2000)
    }

    onCreateServer(){
      this.createdServer = true
      this.serversList.push(this.serverName);
      // this.serverCreationStatus = 'Server was created!!!!!!'
    }
    // onKeyPress(event:Event){
    //   return this.serverName = (<HTMLInputElement>event.target).value
    // }
}
