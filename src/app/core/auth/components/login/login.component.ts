import {ChangeDetectorRef, Component, Inject, OnInit} from '@angular/core'
import {NB_AUTH_OPTIONS, NbAuthService, NbLoginComponent} from '@nebular/auth'
import {Router} from '@angular/router'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent extends NbLoginComponent implements OnInit {

    constructor(
        private authService: NbAuthService,
        @Inject(NB_AUTH_OPTIONS) opts: any,
        private chd: ChangeDetectorRef,
        private fRouter: Router) {
        super(authService, opts, chd, fRouter)
    }

    ngOnInit(): void {
        console.log('social links', this.socialLinks)
    }
}
