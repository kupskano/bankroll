import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private toastController: ToastController,
    private loadingController: LoadingController,
    private router: Router
  ) { }


  loginfunction(){
    this.toastController.create({
      message:"successfully, redirecting on main page",
      duration:3000
    }).then(toast =>{
      toast.present();
      toast.onDidDismiss()
    }).then(() => {
      this.loadingController.create({
        duration:1000
      }).then(fire =>{
        fire.present();
        fire.onDidDismiss();
      }).then(()=>{
        this.router.navigate(['/feed']);
      })
    })
  }

  ngOnInit() {
  }

}
