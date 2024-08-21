import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
    selector: 'page-not-found',
    templateUrl: 'page-not-found.html',
    styleUrl: 'page-not-found.scss',
    standalone: true,
    imports: [],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageNotFoundPage {

}