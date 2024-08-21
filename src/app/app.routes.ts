import { Routes } from '@angular/router';

// Pages
import { RecipeListPage } from './pages/recipe-list/recipe-list';
import { foodListPage } from './pages/food-list/food-list';
import { RecipeDetailPage } from './pages/recipe-detail/recipe-detail';
import { PageNotFoundPage } from './pages/pageNotFound/page-not-found';

export const routes: Routes = [
    { path: 'rezepte', component: RecipeListPage },
    { path: 'rezeptansicht', component: RecipeDetailPage },
    { path: 'purinwerttabelle', component: foodListPage },
    { path: '', redirectTo: 'rezepte', pathMatch: 'full' },
    { path: '**', component: PageNotFoundPage },
];
