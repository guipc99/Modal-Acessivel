import { Component, TemplateRef, ViewChild } from '@angular/core';
import { ModalRef } from './shared/components/modal/models/modal-ref';
import { ModalService } from './shared/components/modal/services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('modal') public modalTemplateRef: TemplateRef<any>;
   // @ViewChild('template1') public template1: TemplateRef<any>;
  // @ViewChild('template2') public template2: TemplateRef<any>;
  title = 'a11y-p2';
  public firstName = 'Guilherme';
  public modalRef: ModalRef;
  public info = false;

  constructor(
    private modalService: ModalService,
    ) {}
      // private cd: ChangeDetectorRef

      // ngAfterViewInit(): void {
  //   // this.selectedTemplate = this.template1;
  //   this.cd.detectChanges();
  // }
  public show(): void {
        // this.selectedTemplate = this.template2;

    this.modalRef = this.modalService.open({
      templateRef: this.modalTemplateRef,
      title: 'User Details'
    });
  }
}
