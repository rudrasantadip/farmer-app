import { Component, OnInit, signal } from '@angular/core';

export interface Primebot {
  botId:number;
  botJob:string;
  botName:string;
  botType:string;
  runStatus:boolean;
}

@Component({
  selector: 'app-prime-bots',
  templateUrl: './prime-bots.component.html',
  styleUrls: ['./prime-bots.component.css']
})
export class PrimeBotsComponent implements OnInit
{
  //Data tables settings
  dtOptions: DataTables.Settings = {};

  //On init method
  ngOnInit(): void 
  {
    this.dtOptions=
    {
      pagingType:'full_numbers',
      searching:false,
      pageLength:5,
      lengthChange:false
    }
}

//Table data
primeBots = signal<Primebot[]>([
  {
    botId:1,
    botJob:'Creator',
    botName:'Brahma',
    botType:'Administrator',
    runStatus:true
  },
  {
    botId:2,
    botJob:'Manager',
    botName:'Vishnava',
    botType:'Administrator',
    runStatus:false
  },
  {
    botId:3,
    botJob:'Destroyer',
    botName:'Mahesh',
    botType:'Administrator',
    runStatus:false
  }
])

//Shell properties
viewShell=signal(false);

//bot management methods
playOrstop(primeBot:Primebot)
{
  primeBot.runStatus=!primeBot.runStatus
}

}
