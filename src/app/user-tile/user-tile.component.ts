import {
  Component,
  Input,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-user-tile',
  templateUrl: './user-tile.component.html',
  styleUrls: ['./user-tile.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserTileComponent {
  @Input() vm: {
    name: string;
    lastName: string;
    tags: string[];
  };
  @Input() active: boolean;
  @Output() selected: EventEmitter<void> = new EventEmitter<void>();
  @Output() toDelete: EventEmitter<void> = new EventEmitter<void>();

  select() {
    this.selected.emit();
  }

  delete() {
    this.toDelete.emit();
  }
}
