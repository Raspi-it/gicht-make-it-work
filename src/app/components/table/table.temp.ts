import { NgClass, NgFor, NgIf } from "@angular/common";
import { Input, ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
    selector: 'table-temp',
    templateUrl: 'table.temp.html',
    styleUrl: 'table.temp.scss',
    standalone: true,
    imports: [NgFor, NgClass, NgIf],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableTemp {
    @Input() tableTitle!: string;
    @Input() tableColoumns!: string[];
    @Input() tableData!: any[];
}