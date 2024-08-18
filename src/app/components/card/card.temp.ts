import { Input, ChangeDetectionStrategy, Component } from "@angular/core";

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { StarRatingTemp } from "../star-rating/star-rating.temp";
import { NgClass } from "@angular/common";


@Component({
    selector: 'card-temp',
    templateUrl: 'card.temp.html',
    styleUrl: 'card.temp.scss',
    standalone: true,
    imports: [MatCardModule, MatButtonModule, MatIconModule, StarRatingTemp, NgClass],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardTemp {
    @Input() cardTitle!: string;
    @Input() cardSubtitle!: string;
    @Input() imageURL!: string;
    @Input() ingredients!: string;
    @Input() rating!: number;
    @Input() minutes!: number;
    @Input() purinvalue!: number;
    @Input() difficulty!: number;
    @Input() readOnly!: boolean;

    getDifficultyText(difficulty: number): string {
        switch (difficulty) {
            case 1:
                return 'Einfach';
            case 2:
                return 'Mittel';
            case 3:
                return 'Schwer';
            default:
                return 'unbekannt';
        }
    }

    getDifficultyColorClass(difficulty: number): string {
        switch (difficulty) {
            case 1:
                return 'difficulty-easy';   // grün
            case 2:
                return 'difficulty-medium'; // orange
            case 3:
                return 'difficulty-hard';   // rot
            default:
                return '';
        }
    }
}