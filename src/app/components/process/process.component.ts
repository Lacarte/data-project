import { DialogData } from './../../shared/components/global-dialog/models/dialog-data.model';
import { DialogService } from './../../shared/components/global-dialog/services/dialog.service';
import { DialogFactoryService } from './../../shared/components/global-dialog/services/dialog-factory.service';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { DialogSendHistoryComponent } from '../dialogs/dialog-send-history/dialog-send-history.component';
import { MatDialog } from '@angular/material/dialog';
import { MatTabGroup } from '@angular/material/tabs';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss'],
})
export class ProcessComponent implements OnInit {
  public tabIndex = 1;
  @ViewChild('processTabGroup', { static: false }) processTabGroup: MatTabGroup;

  dialog: DialogService;
  @ViewChild('crudPackage')
  crudPackage: TemplateRef<any>;

   constructor( private dialogFactoryService: DialogFactoryService) {}

  ngOnInit(): void {}


   openCrudPackage(): void{
   this.openDialog({
      headerText: 'Manage Packages',
      template: this.crudPackage
    });

   }
   private openDialog(dialogData: DialogData): void {
    this.dialog = this.dialogFactoryService.open(dialogData);
  }

  
  closeDialog() {
    this.dialog.close();
  }
  // openCrudPackage(){
  //   const dialogRef = this.dialog.open(GlobalDialogComponent, {
  //     height: '80%',
  //     width: '90%',
  //   });

  //   dialogRef.afterClosed().subscribe((confirmed: boolean) => {});
  // }





  gotoTabIndex(): void {
    if (!this.processTabGroup || !(this.processTabGroup instanceof MatTabGroup)) { return; }
    this.processTabGroup.selectedIndex = 1;
  }

  dialogSendHistory(): void {
  //   const dialogRef = this.dialog.open(DialogSendHistoryComponent, {
  //     height: '80%',
  //     width: '90%',
  //   });

  //   dialogRef.afterClosed().subscribe((confirmed: boolean) => {});
  }
}
