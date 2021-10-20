import {Component, OnDestroy, OnInit} from '@angular/core'
import {NbAuthComponent, NbAuthService} from '@nebular/auth'
import {Subject} from 'rxjs'
import {takeUntil} from 'rxjs/operators'
import {Location} from '@angular/common'

@Component({
    selector: 'app-layout-auth',
    templateUrl: './layout-auth.component.html',
    styleUrls: ['./layout-auth.component.scss']
})
export class LayoutAuthComponent extends NbAuthComponent implements OnDestroy {

    constructor(private authService: NbAuthService, private fLocation: Location) {
        super(authService, fLocation)
    }
}
