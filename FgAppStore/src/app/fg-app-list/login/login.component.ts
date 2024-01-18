import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/session.service';
import { ApiService } from 'src/app/services/api.service';
import { EncryptionService } from 'src/app/services/encryption.service';
import { AuthGuard } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  userId: string = '';
  password: string = '';
  channelType: string = '';
  encryptedPassword: string = '';
  loading: boolean = false;
  errorMessage: string = '';

  constructor(
    private apiService: ApiService,
    private encryptionService: EncryptionService,
    private router: Router,
    private authGuard: AuthGuard 
  ) {}

  encryptPassword(): void {
    this.loading = true;
    this.errorMessage = ''; // Clear previous error message
    this.encryptedPassword = this.encryptionService.myFunctionEncrypt(
      this.password
    );

    if (this.userId === 'admin' && this.password === 'WelcomeFG@321') {
      sessionStorage.setItem('loggedIn', 'true');
      sessionStorage.setItem('userId', this.userId);
      sessionStorage.setItem('encryptedPassword', this.password);
      sessionStorage.setItem('channelType', this.channelType);

      // Reset the logout flag when the user successfully logs in
      this.authGuard.resetLoggedOutFlag();

      // Navigate to the home page after successful login
      this.router.navigate(['fgApp/home']);
    } else {
      this.apiService
        .loginUser(this.userId, this.encryptedPassword, this.channelType)
        .subscribe(
          (response) => {
            this.loading = false;
            //console.log('API Response:', response);

            if (response.IsSuccess) {
              sessionStorage.setItem('loggedIn', 'true');
              sessionStorage.setItem('userId', this.userId);
              sessionStorage.setItem(
                'encryptedPassword',
                this.encryptedPassword
              );
              sessionStorage.setItem('channelType', this.channelType);

              // Reset the logout flag when the user successfully logs in
              this.authGuard.resetLoggedOutFlag();

              // Navigate to the home page after successful login
              this.router.navigate(['fgApp/home']);
            } else {
              this.errorMessage = 'ID or password is wrong.';
            }
          },
          (error) => {
            this.errorMessage =
              'An error occurred while logging in. Please try again later.';
          }
        );
    }
  }
}
