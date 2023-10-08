import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Credential } from '../../../models/credential';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private authService: AuthService) {

  }

  login() {
    if (this.username && this.password) {
      this.authService.login(new Credential(this.username, this.password)).subscribe((dataResponse: any) => {
        console.log(dataResponse);
        alert('Inicio de sesión exitoso');
        this.router.navigate(['/perfil']);
      },
        (error: any) => {
          console.log(error);
          alert('Credenciales incorrectas');
        }
      );
    } else {
      alert('Complete los campos');
    }
  }
}
