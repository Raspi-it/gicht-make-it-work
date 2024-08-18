import { CommonModule } from "@angular/common";
import { Input, ChangeDetectionStrategy, Component } from "@angular/core";

import { MatIconModule } from '@angular/material/icon';


@Component({
    selector: 'star-rating-temp',
    templateUrl: 'star-rating.temp.html',
    styleUrl: 'star-rating.temp.scss',
    standalone: true,
    imports: [MatIconModule, CommonModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StarRatingTemp {
    @Input() starRatingValue!: number;

    get stars() {
        return Array(Math.floor(this.starRatingValue)).fill(0);
    }
}