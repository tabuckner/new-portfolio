import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContactFormDataModel } from '../interfaces/contact-form-data-model';

@Injectable({
  providedIn: 'root'
})
export class FormspreeService {
  private readonly contactFormUrl = 'https://formspree.io/mzbgjnpe';

  constructor(private http: HttpClient) { }

  public post(contactFormData: ContactFormDataModel): Observable<any> {
    const { name, message, email } = contactFormData;
    const postData = {
      _subject: `Portfolio Contact Form Submission // ${name}`,
      name,
      message,
      _replyto: email
    };
    return this.http.post(this.contactFormUrl, postData);
  }
}
