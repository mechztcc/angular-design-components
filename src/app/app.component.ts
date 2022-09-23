import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalRef } from './shared/components/modal/models/modal-ref';
import { ModalService } from './shared/components/modal/services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('modal') modalTemplateRef: TemplateRef<any>;

  selectedTemplate: TemplateRef<any>;

  title = 'a11y-p2';
  firstName = 'Alberto';
  modalRef: ModalRef;

  private form: FormGroup;

  constructor(private modalService: ModalService, private fb: FormBuilder) {}
  ngOnInit(): void {
    this.form = this.fb.group({
      firstName: ['Alberto', Validators.required],
      surName: ['Paiva', Validators.required],
      age: [, Validators.required]
    })
  }

  submit() {
    console.log(this.form.controls);
    this.modalRef.close()
  }


  show(): void {
    this.modalRef = this.modalService.open({
      templateRef: this.modalTemplateRef,
      title: 'User details',
    });
  }
}
