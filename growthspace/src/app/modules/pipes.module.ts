import { NgModule } from '@angular/core';
import {SafeHtmlPipe} from '../pipes/domSanitizer';


@NgModule({
    declarations: [
        SafeHtmlPipe
    ],
    imports: [

    ],
    exports: [
        SafeHtmlPipe
    ]
    ,
})
export class PipesModule {}
