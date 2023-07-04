import { UntypedFormControl } from "@angular/forms";

export class LimitValidator {

    static Limit(limit:number) {
        return (control:UntypedFormControl) : {[key: string]: any} => {
            let val = Number(control.value);
            if ( val > limit) {
                return {"limit": {"limit": limit, "actualValue": val}};
            } else {
                return null as any;
            }
        }
    }
}
