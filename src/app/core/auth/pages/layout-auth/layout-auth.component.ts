import {Component, OnDestroy, OnInit} from '@angular/core'
import {NbAuthService} from '@nebular/auth'
import {Subject} from 'rxjs'
import {takeUntil} from 'rxjs/operators'
import {Location} from '@angular/common'

@Component({
    selector: 'app-layout-auth',
    templateUrl: './layout-auth.component.html',
    styleUrls: ['./layout-auth.component.scss']
})
export class LayoutAuthComponent implements OnDestroy {

    private destroy$ = new Subject<void>()

    subscription: any

    authenticated: boolean = false
    token: string = ''

    // showcase of how to use the onAuthenticationChange method
    constructor(protected auth: NbAuthService, protected location: Location) {

        this.subscription = auth.onAuthenticationChange()
            .pipe(takeUntil(this.destroy$))
            .subscribe((authenticated: boolean) => {
                this.authenticated = authenticated
            })
    }

    back() {
        this.location.back()
        return false
    }

    ngOnDestroy(): void {
        this.destroy$.next()
        this.destroy$.complete()
    }
}
