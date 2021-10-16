import {Component, EventEmitter, Input, Output} from '@angular/core'

@Component({
    selector: 'simple-footer-modal',
    templateUrl: './footer-modal.component.html',
    styleUrls: ['./footer-modal.component.scss']
})
export class FooterModalComponent {

    @Output() saveInfo: EventEmitter<void> = new EventEmitter()
    @Output() closeModal: EventEmitter<any> = new EventEmitter()
    @Input() isDisabled: boolean = false

    constructor() {
    }

    save(): void {
        this.saveInfo.emit()
    }

    close(): void {
        this.closeModal.emit()
    }

}
