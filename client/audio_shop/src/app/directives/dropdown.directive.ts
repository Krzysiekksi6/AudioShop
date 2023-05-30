import { Directive, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDeleteDialogComponent } from '../components/confirm-delete-dialog/confirm-delete-dialog.component';
@Directive({
  selector: '[confirmDelete]',
})
export class DropdownDirective {
  constructor(private dialog: MatDialog) {}
  @HostListener('click', ['$event'])
  onClick(event: Event): void {
    event.preventDefault();
    const dialogRef = this.dialog.open(ConfirmDeleteDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Tutaj możesz umieścić kod obsługujący usunięcie elementu
        console.log('Usunięcie potwierdzone');
      } else {
        console.log('Usunięcie anulowane');
      }
    });
  }
  
}
