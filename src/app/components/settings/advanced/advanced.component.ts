import { Component, OnInit } from '@angular/core';
import { KodiApiService } from 'src/app/services/kodi-api.service';
import { LocalStorageService, STORAGE_KEYS } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-settings-advanced',
  templateUrl: './advanced.component.html',
  styleUrls: ['./advanced.component.scss']
})
export class AdvancedComponent implements OnInit {

  constructor(public kodiApi:KodiApiService, private localStorage: LocalStorageService,) { }

  ngOnInit(): void {
    this.webSocketAddrValue = "https://127.0.0.1";
    this.webSocketPortValue = 8080;
  }

   //WebSocket

   webSocketAddrValue = ""
   webSocketAddrChange(e:any){
     this.webSocketAddrValue = e;
   }
 
   webSocketResetAddr(){
     this.localStorage.removeData(STORAGE_KEYS.websocket_address);
   }
 
   webSocketPortValue = 0
   webSocketPortChange(e:any){
     this.webSocketPortValue = e;
   }
 
   webSocketResetPort(){
     this.localStorage.removeData(STORAGE_KEYS.websocket_port);
   }
 
   webSocketSaveChange(){
   }

  //JSON RPC Test

  request = '{"jsonrpc": "2.0", "method": "VideoLibrary.GetMovies", "id": 1}';
  requestResponse:string = "";
  executeRequest(){
  }

}
