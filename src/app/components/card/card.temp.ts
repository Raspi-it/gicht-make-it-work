import { Input, ChangeDetectionStrategy, Component } from "@angular/core";

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { StarRatingTemp } from "../star-rating/star-rating.temp";


@Component({
    selector: 'card-temp',
    templateUrl: 'card.temp.html',
    styleUrl: 'card.temp.scss',
    standalone: true,
    imports: [MatCardModule, MatButtonModule, MatIconModule, StarRatingTemp],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardTemp {
    @Input() cardTitle!: string;
    @Input() cardSubtitle!: string;
    @Input() imageURL!: string;
    @Input() ingredients!: string;
    @Input() starRatingValue!: number;
}