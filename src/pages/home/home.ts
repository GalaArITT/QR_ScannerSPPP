import { Component } from '@angular/core';
import { NavController, Alert, AlertController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Provider } from '../../service/provider';



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
      this.provider.registrarAsistencia(
        //{ID_LISTA: barcodeData.text //campo que obtiene el id}
        barcodeData.text,
        {
          "ID_LISTA": barcodeData.text
        }).subscribe((res:any) => {
          this.showMessage(res._body);
          console.log(res);
      });
     }).catch((err:any) => {
      this.showMessage(err._body);
         console.log('Error', err);
     });
  }
  showMessage(id:any){
    this.alert.create({
      title:"Mensaje: ",
      subTitle: id,
      buttons: ["Cerrar"]
    }).present();
  }

}
