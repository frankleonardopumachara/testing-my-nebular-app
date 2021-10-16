import {Component, Input, OnInit} from '@angular/core'

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
    @Input() headerTable: string[] = []
    @Input() data: any[] = []
    @Input() columns: string[] = []
    @Input() emitField: any[] = []

    constructor() {
    }

    ngOnInit(): void {
    }

}
