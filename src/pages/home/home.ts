import { Component } from '@angular/core';
import { NavController, Alert, AlertController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Provider } from '@angular/compiler/src/core';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(public navCtrl: NavController, 
    private barcodeScanner: BarcodeScanner,
    private alert: AlertController,
    private provider: Provider // haces el import de provider
    ) {

  }
  scanQR(){
    //leer qr
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.showMessage(barcodeData.text);
     }).catch(err => {
         console.log('Error', err);
     });
  }
  showMessage(id:any){
    this.alert.create({
      title:"Dato leído: ",
      subTitle: id,
      buttons: ["Cerrar"]
    }).present();
  }

}
