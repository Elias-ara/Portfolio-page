import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

interface EmailPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private backendUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  sendEmail(formData: EmailPayload): Observable<any> {
    return this.http.post(`${this.backendUrl}/contact/send-email`, formData).pipe(
      catchError((error) => {
        console.error('Email service error:', error);
        return throwError(() => new Error('Falha ao enviar mensagem. Tente novamente.'));
      })
    );
  }
}
