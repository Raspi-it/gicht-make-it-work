import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
    selector: 'recipe-detail',
    templateUrl: 'recipe-detail.html',
    styleUrl: 'recipe-detail.scss',
    standalone: true,
    imports: [],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipeDetailPage {
    title = "Gericht 1"
    description = "Das ist eine Beschreibung von einem leckeren und tollen Gericht. Diese Beschreibung kann mehrere Sätze haben und über mehrere Zeilen gehen."
    imageURL = "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
}