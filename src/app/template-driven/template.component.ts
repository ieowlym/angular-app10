import { Component } from "@angular/core";
import { Results } from "./results";

@Component({
    selector: 'template-d',
    templateUrl: './template.component.html',
    styleUrls: ['template.component.css', '../app.component.css']
})
export class TemplateComponent {
    results: Results = {
        form_2: null,
        form_2_1: null,
        form_2_2: null,
        form_3_1: null,
        form_3_2: null,
        form_4_1: null,
        form_4_2: null
    }
}