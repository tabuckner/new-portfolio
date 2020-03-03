import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ContactFormDataModel } from 'src/app/core/interfaces/contact-form-data-model';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  public contactForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl(''),
  });


  constructor(private dialogRef: MatDialogRef<ContactFormComponent>) { }

  ngOnInit(): void {
  }

  public onSubmitModal() {
    this.dialogRef.close(this.contactForm.value as ContactFormDataModel);
  }

  onCancelModal() {
    this.dialogRef.close();
  }

}
