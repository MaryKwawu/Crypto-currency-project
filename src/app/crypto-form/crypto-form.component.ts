import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../crypto-service.service';
@Component({
  selector: 'app-crypto-form',
  templateUrl: './crypto-form.component.html',
  styleUrls: ['./crypto-form.component.css']
})
export class CryptoFormComponent implements OnInit {
top100Cryptos: any;


cryptoSurvey = {
  name: "Mary",
  favoriteCrypto: "",
  comments: ""

};

todaysDate = new Date();


  constructor(public cryptoService : CryptoService) { }

  ngOnInit(): void {
    this.cryptoService.getCryptos().subscribe((data: any) => {
      this.top100Cryptos = data;
    })
  }

  sendForm() {
    console.log(this.cryptoSurvey);
  }

}
