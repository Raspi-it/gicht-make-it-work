import { ChangeDetectionStrategy, Component } from "@angular/core";

import { MatGridListModule } from '@angular/material/grid-list';
import { CardTemp } from "../../components/card/card.temp";
import { NgFor } from "@angular/common";

@Component({
    selector: 'recipe-list',
    templateUrl: 'recipe-list.html',
    styleUrl: 'recipe-list.scss',
    standalone: true,
    imports: [MatGridListModule, CardTemp, NgFor],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipeListPage {
    listData = [
        {
            title: 'Erbsensuppe',
            subtitle: 'Ein klassisches Gericht',
            imgURL: 'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?q=80&w=2025&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            ingredients: 'Erbsen, Karotten, Zwiebeln, Brühe',
            rating: 4.5,
            minutes: 30,
            difficulty: 2, // Mittel
            purinvalue: 84, // mg/100g
            readOnly: true
        },
        {
            title: 'Apfelkuchen',
            subtitle: 'Ein köstlicher Dessert',
            imgURL: 'https://images.unsplash.com/photo-1601000937971-d464714b9e6f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            ingredients: 'Äpfel, Zucker, Mehl, Butter',
            rating: 5,
            minutes: 60,
            difficulty: 1, // Einfach
            purinvalue: 5, // mg/100g
            readOnly: true
        },
        {
            title: 'Linsensalat',
            subtitle: 'Frisch und gesund',
            imgURL: 'https://images.unsplash.com/photo-1599020792689-9fde458e7e17?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            ingredients: 'Linsen, Paprika, Zwiebeln, Essig',
            rating: 4,
            minutes: 20,
            difficulty: 1, // Einfach
            purinvalue: 52, // mg/100g
            readOnly: true
        },
        {
            title: 'Lasagne',
            subtitle: 'Italienisches Lieblingsgericht',
            imgURL: 'https://images.unsplash.com/photo-1633436374961-09b92742047b?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            ingredients: 'Lasagneblätter, Hackfleisch, Tomatensauce, Käse',
            rating: 4.8,
            minutes: 90,
            difficulty: 3, // Schwer
            purinvalue: 70, // mg/100g
            readOnly: true
        },
        {
            title: 'Schokoladenmousse',
            subtitle: 'Ein süßes Vergnügen',
            imgURL: 'https://images.unsplash.com/photo-1621792907495-5403ce8f2c6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8U2Nob2tvbGFkZW5tb3Vzc2V8ZW58MHx8MHx8fDA%3D',
            ingredients: 'Schokolade, Sahne, Zucker, Eier',
            rating: 4.7,
            minutes: 45,
            difficulty: 2, // Mittel
            purinvalue: 40, // mg/100g
            readOnly: true
        },
        {
            title: 'Quinoa-Salat',
            subtitle: 'Leicht und nahrhaft',
            imgURL: 'https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            ingredients: 'Quinoa, Tomaten, Gurken, Feta-Käse',
            rating: 4.3,
            minutes: 25,
            difficulty: 1, // Einfach
            purinvalue: 40, // mg/100g
            readOnly: true
        },
        {
            title: 'Spaghetti Carbonara',
            subtitle: 'Ein italienischer Klassiker',
            imgURL: 'https://images.unsplash.com/photo-1673442635965-34f1b36d8944?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            ingredients: 'Spaghetti, Eier, Speck, Parmesan',
            rating: 4.6,
            minutes: 30,
            difficulty: 2, // Mittel
            purinvalue: 63, // mg/100g
            readOnly: true
        },
        {
            title: 'Vegetarische Pizza',
            subtitle: 'Lecker und gesund',
            imgURL: 'https://images.unsplash.com/photo-1555072956-7758afb20e8f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            ingredients: 'Tomaten, Käse, Paprika, Zwiebeln, Pilze',
            rating: 4.4,
            minutes: 45,
            difficulty: 2, // Mittel
            purinvalue: 50, // mg/100g
            readOnly: true
        }
    ];

}