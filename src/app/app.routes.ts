import { Routes } from '@angular/router';

// Pages
import { RecipeListPage } from './pages/recipe-list/recipe-list';
import { foodListPage } from './pages/food-list/food-list';

export const routes: Routes = [
    { path: 'rezepte', component: RecipeListPage },
    { path: 'purinwerttabelle', component: foodListPage },
    // { path: '', redirectTo: '/', pathMatch: 'full' },
    // { path: '**', component: PageNotFoundComponent },
];
