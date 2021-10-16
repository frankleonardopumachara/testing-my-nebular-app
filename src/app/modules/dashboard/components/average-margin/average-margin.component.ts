import {Component, Input, OnInit} from '@angular/core'

@Component({
    selector: 'app-average-margin',
    templateUrl: './average-margin.component.html',
    styleUrls: ['./average-margin.component.scss']
})
export class AverageMarginComponent implements OnInit {

    @Input() title: string = ''
    @Input() type: string = ''
    @Input() on = true

    constructor() {
    }

    ngOnInit(): void {
    }

}
