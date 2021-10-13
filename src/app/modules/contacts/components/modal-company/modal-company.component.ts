import {Component, Input, OnInit} from '@angular/core';
import {NbDialogRef} from "@nebular/theme";

@Component({
  selector: 'app-modal-company',
  templateUrl: './modal-company.component.html',
  styleUrls: ['./modal-company.component.scss']
})
export class ModalCompanyComponent implements OnInit {
    @Input() title: string | undefined
    constructor(protected ref: NbDialogRef<ModalCompanyComponent>) { }
    dismiss() {
        // this.activeModal.close()
        this.ref.close()
    }
    ngOnInit(): void {
    }

}
