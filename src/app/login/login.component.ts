import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = ''; // Ajout de la variable pour gérer l'erreur

  constructor(private Auth: AuthService, private route:Router) {}

  onSubmit(): void {
    this.errorMessage = ''; // Réinitialise l'erreur avant chaque tentative

    this.Auth.signInWithEmailAndPassword(this.email, this.password)
      .then(() => {
        console.log("Connexion réussie");
        this.route.navigate(['/members'])
      })
      .catch(error => {
        console.error("Erreur de connexion :", error);
        this.errorMessage = "Échec de la connexion. Vérifiez votre email et mot de passe."; 
      });
  }
}
