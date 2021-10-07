import {Component, OnInit} from '@angular/core'
import {Subject} from 'rxjs'
import {NbSidebarService, NbThemeService} from '@nebular/theme'

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    private destroy$: Subject<void> = new Subject<void>()
    userPictureOnly: boolean = false
    user: any

    userMenu = [
        {title: 'Profile'},
        {title: 'Log out'}
    ]

    constructor(
        private sidebarService: NbSidebarService,
        private themeService: NbThemeService
    ) {
    }

    ngOnInit(): void {
    }


    toggleSidebar(): boolean {
        this.sidebarService.toggle(true, 'menu-sidebar')
        // this.layoutService.changeLayoutSize()

        return false
    }

    changeTheme(themeName: string) {
        // this.themeService.changeTheme(themeName)
    }

    navigateHome() {
        console.log('navigateHome() {')
        // this.menuService.navigateHome()
        return false
    }

}
