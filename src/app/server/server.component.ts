import { Component } from "@angular/core";

@Component({
    selector: '[app-server]',
    // templateUrl:'server.component.html'
    template: '<p>Hi am the displayed to attribute Binding</p>'
})
export class ServerComponent{
    serverId = 10
    serverStatus = 'offline'

    getServerStatus(){
        return this.serverStatus;
    }
}