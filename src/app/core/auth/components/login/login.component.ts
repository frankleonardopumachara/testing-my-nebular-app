import {ChangeDetectorRef, Component, OnInit} from '@angular/core'
import {NbAuthService, NbLoginComponent} from '@nebular/auth'
import {Router} from '@angular/router'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent extends NbLoginComponent implements OnInit {

    constructor(
        private authService: NbAuthService,
        cd: ChangeDetectorRef,
        router: Router) {
        super(authService, {}, cd, router)
    }

    ngOnInit(): void {
        console.log(this.showMessages)
    }
}
