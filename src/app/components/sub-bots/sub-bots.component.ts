import { Component, OnInit, signal } from '@angular/core';



export interface Subbot {
  botId:number;
  botJob:string;
  botName:string;
  botType:string;
  runStatus:boolean;
}

@Component({
  selector: 'app-sub-bots',
  templateUrl: './sub-bots.component.html',
  styleUrls: ['./sub-bots.component.css']
})
export class SubBotsComponent implements OnInit
{
  //Data tables settings
  dtOptions: DataTables.Settings = {};

  //On init method
  ngOnInit(): void 
  {
    this.dtOptions=
    {
      pagingType:'full_numbers',
      pageLength:5,
      lengthChange:false
    }
}

//Table data
subBots = signal<Subbot[]>([
  {
    botId:1,
    botJob:'Cereal Info',
    botName:'#6548eess',
    botType:'Info Vendor',
    runStatus:true
  },
  {
    botId:2,
    botJob:'Weather Info',
    botName:'#9087eefg',
    botType:'Info Vendor',
    runStatus:false
  },
  {
    botId:3,
    botJob:'Soil specialist',
    botName:'#pokesp009',
    botType:'Info Vendor',
    runStatus:false
  }
])


//Bot manage Methods
//Function to start or stop a bot
playOrstop(subBot:Subbot)
{
  subBot.runStatus=!subBot.runStatus
}

openSettings(subBot:Subbot)
{
  alert(`${subBot.botName}`);
}

deleteBot(subBot:Subbot)
{
  alert(`Delete ${subBot.botName}`)
}


}
