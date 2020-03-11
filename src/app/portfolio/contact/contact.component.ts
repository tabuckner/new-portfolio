import { Component, OnInit, ElementRef } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { FormspreeService } from 'src/app/core/services/formspree.service';
import { ContactFormDataModel } from 'src/app/core/interfaces/contact-form-data-model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  private dialogRef: MatDialogRef<ContactFormComponent>
  constructor(private dialog: MatDialog,
              private formspree: FormspreeService) { }

  ngOnInit(): void {}

  public onClickSocialButton(linkRef: any): void {
    if (!linkRef || !linkRef.href) {
      return;
    }
    const currentUrl = window.location.href;
    const buttonHref = linkRef.href;
    if (currentUrl.indexOf(buttonHref) > -1) {
      return;
    }

    window.open(buttonHref, '_blank');
  }

  public onClickCta() {
    this.openContactDialog();
    this.dialogRef.afterClosed().subscribe((value: ContactFormDataModel) => {
      if (!value || !value.email || !value.message || !value.name) {
        return;
      }
      this.formspree.post(value).subscribe();
    });
  }

  private openContactDialog() {
    this.dialogRef = this.dialog.open(ContactFormComponent);
  }

}
