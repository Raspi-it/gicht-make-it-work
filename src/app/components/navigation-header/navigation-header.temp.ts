import { ChangeDetectionStrategy, Component } from "@angular/core";

import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'navigation-header-temp',
    templateUrl: 'navigation-header.temp.html',
    styleUrl: 'navigation-header.temp.scss',
    standalone: true,
    imports: [MatButtonModule, MatMenuModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationHeaderTemp {

}