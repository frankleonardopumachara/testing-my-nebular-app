import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core'

@Component({
    selector: 'app-header-modal',
    templateUrl: './header-modal.component.html',
    styleUrls: ['./header-modal.component.scss']
})
export class HeaderModalComponent implements OnInit {
    @Input() title: string | undefined = ''
    @Output() close: EventEmitter<any> = new EventEmitter()

    constructor() {
    }

    ngOnInit(): void {
    }

    closeModal(): void {
        this.close.emit()
    }

}
