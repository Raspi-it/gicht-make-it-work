import { Input, ChangeDetectionStrategy, Component } from "@angular/core";

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';


@Component({
    selector: 'card-temp',
    templateUrl: 'card.temp.html',
    styleUrl: 'card.temp.scss',
    standalone: true,
    imports: [MatCardModule, MatButtonModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardTemp {
    @Input() cardTitle = " ";
    @Input() cardSubtitle = " ";
    @Input() imageURL = "";
    @Input() ingredients = "";
}