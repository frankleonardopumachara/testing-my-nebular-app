import {ChangeDetectorRef, Component, OnInit} from '@angular/core'
import {NbAuthService, NbRequestPasswordComponent} from '@nebular/auth'
import {Router} from '@angular/router'

@Component({
    selector: 'app-password-recover',
    templateUrl: './password-recover.component.html',
    styleUrls: ['./password-recover.component.scss']
})
export class PasswordRecoverComponent extends NbRequestPasswordComponent implements OnInit {

    constructor(
        private authService: NbAuthService,
        private chd: ChangeDetectorRef,
        private fRouter: Router) {
        super(authService, {}, chd, fRouter)
    }

    ngOnInit(): void {
    }
}
