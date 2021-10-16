import {Component, Input, OnInit} from '@angular/core'
import {NbDialogRef} from '@nebular/theme'
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms'

@Component({
    selector: 'app-modal-company',
    templateUrl: './modal-company.component.html',
    styleUrls: ['./modal-company.component.scss']
})
export class ModalCompanyComponent implements OnInit {
    @Input() title: string | undefined


    companyFG: FormGroup = new FormGroup({
        name: new FormControl(null, [Validators.required]),
    })

    // /** Get one form control*/
    // getFC(control: string): AbstractControl {
    //     return this.companyFG.get(control)!
    // }
    //
    // /** Get Value Form Control */
    // valueFC(control: string): any {
    //     return this.getFC(control).value
    // }
    //
    // /** Set Value Form Control */
    // setValueFC(formControl: string, value: any) {
    //     this.getFC(formControl).setValue(value)
    // }

    constructor(protected ref: NbDialogRef<ModalCompanyComponent>) {
    }

    dismiss() {
        this.ref.close()
    }

    ngOnInit(): void {
    }

}
