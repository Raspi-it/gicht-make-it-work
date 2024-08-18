import { NgClass, NgForOf } from "@angular/common";
import { Input, Output, ChangeDetectionStrategy, Component, EventEmitter } from "@angular/core";

import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'star-rating-temp',
    templateUrl: 'star-rating.temp.html',
    styleUrl: 'star-rating.temp.scss',
    standalone: true,
    imports: [MatIconModule, NgClass, NgForOf],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StarRatingTemp {
    @Input() rating: number = 0;
    @Input() maxRating: number = 5;
    @Input() readOnly: boolean = false;
    @Output() ratingChange: EventEmitter<number> = new EventEmitter<number>();

    stars: number[] = [];

    ngOnInit() {
        this.stars = Array(this.maxRating).fill(0);
        this.updateStars();
    }

    updateStars() {
        this.stars = this.stars.map((_, index) => {
            const decimalPart = this.rating - Math.floor(this.rating);
            if (index < Math.floor(this.rating)) {
                return 1; // voller Stern
            } else if (index === Math.floor(this.rating) && decimalPart > 0) {
                return decimalPart; // teilweiser Stern
            } else {
                return 0; // leerer Stern
            }
        });
    }

    setRating(rating: number) {
        this.rating = rating;
        this.ratingChange.emit(this.rating);
        this.updateStars();
    }
}