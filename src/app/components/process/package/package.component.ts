import {
  Component,
  OnInit,
  ViewChild,
  Output,
  EventEmitter,
} from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.scss'],
})
export class PackageComponent implements OnInit {
  @ViewChild('processTab', { static: false }) processTab: MatTabGroup;
  @Output() gotoTabIndex = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  gotoTab(): void {
    console.log('sddsd');
    this.gotoTabIndex.emit();
  }
}
