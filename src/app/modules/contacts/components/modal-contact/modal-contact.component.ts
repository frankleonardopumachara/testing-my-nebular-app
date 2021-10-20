import {Component, Input, OnInit} from '@angular/core'
import {NbDialogRef} from '@nebular/theme'

@Component({
    selector: 'app-modal-contact',
    templateUrl: './modal-contact.component.html',
    styleUrls: ['./modal-contact.component.scss']
})
export class ModalContactComponent implements OnInit {
    @Input() title: string | undefined

    constructor(protected ref: NbDialogRef<ModalContactComponent>) {
    }

    dismiss() {
        // this.activeModal.close()
        this.ref.close()
    }

    ngOnInit(): void {
    }

}
