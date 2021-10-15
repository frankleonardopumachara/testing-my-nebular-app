import {Component, Input, OnInit} from '@angular/core'
import {NbDialogRef} from '@nebular/theme'

@Component({
    selector: 'app-modal-employ',
    templateUrl: './modal-employ.component.html',
    styleUrls: ['./modal-employ.component.scss']
})
export class ModalEmployComponent implements OnInit {
    @Input() title: string | undefined

    constructor(protected ref: NbDialogRef<ModalEmployComponent>) {
    }

    ngOnInit(): void {
    }

    dismiss() {
        this.ref.close()
    }

}
