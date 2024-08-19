import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardTemp } from "./components/card/card.temp";
import { NavigationHeaderTemp } from './components/navigation-header/navigation-header.temp';
import { TableTemp } from './components/table/table.temp';
import { RecipeListPage } from './pages/recipe-list/recipe-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardTemp, NavigationHeaderTemp, TableTemp, RecipeListPage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'gicht-make-it-work';
  // dev data for filling the templates

  bool = true;

  tableColoumns = [
    "Name",
    "Kategorie",
    "Menge",
    "Puringehalt",
    "Harnsäure"
  ];

  tableData = [
    { "Name": "Erbsen", "Kategorie": "Gemüse", "Menge": "100g", "Puringehalt": "84mg", "Harnsäure": "20mg" },
    { "Name": "Apfel", "Kategorie": "Obst", "Menge": "100g", "Puringehalt": "10mg", "Harnsäure": "2.4mg" },
    { "Name": "Kartoffeln", "Kategorie": "Grundlage", "Menge": "100g", "Puringehalt": "6mg", "Harnsäure": "1.4mg" },
    { "Name": "Mandeln", "Kategorie": "Nüsse", "Menge": "100g", "Puringehalt": "37mg", "Harnsäure": "8.8mg" },
    { "Name": "Brokkoli", "Kategorie": "Gemüse", "Menge": "100g", "Puringehalt": "70mg", "Harnsäure": "16.8mg" },
    { "Name": "Banane", "Kategorie": "Obst", "Menge": "100g", "Puringehalt": "5mg", "Harnsäure": "1.2mg" },
    { "Name": "Reis", "Kategorie": "Grundlage", "Menge": "100g", "Puringehalt": "15mg", "Harnsäure": "3.6mg" },
    { "Name": "Walnüsse", "Kategorie": "Nüsse", "Menge": "100g", "Puringehalt": "10mg", "Harnsäure": "2.4mg" },
    { "Name": "Karotten", "Kategorie": "Gemüse", "Menge": "100g", "Puringehalt": "17mg", "Harnsäure": "4mg" },
    { "Name": "Orangen", "Kategorie": "Obst", "Menge": "100g", "Puringehalt": "19mg", "Harnsäure": "4.6mg" },
    { "Name": "Nudeln", "Kategorie": "Grundlage", "Menge": "100g", "Puringehalt": "20mg", "Harnsäure": "4.8mg" },
    { "Name": "Haselnüsse", "Kategorie": "Nüsse", "Menge": "100g", "Puringehalt": "37mg", "Harnsäure": "8.8mg" },
    { "Name": "Spinat", "Kategorie": "Gemüse", "Menge": "100g", "Puringehalt": "57mg", "Harnsäure": "13.7mg" },
    { "Name": "Erdbeeren", "Kategorie": "Obst", "Menge": "100g", "Puringehalt": "13mg", "Harnsäure": "3.1mg" },
    { "Name": "Quinoa", "Kategorie": "Grundlage", "Menge": "100g", "Puringehalt": "64mg", "Harnsäure": "15.4mg" },
    { "Name": "Cashewnüsse", "Kategorie": "Nüsse", "Menge": "100g", "Puringehalt": "25mg", "Harnsäure": "6mg" },
  ];

}
