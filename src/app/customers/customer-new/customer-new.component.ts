import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MatDialog, MatSnackBar} from '@angular/material';
import {RepDialogComponent} from '../rep-dialog/rep-dialog.component';
@Component({
  selector: 'app-customer-new',
  templateUrl: './customer-new.component.html',
  styleUrls: ['./customer-new.component.css']
})
export class CustomerNewComponent implements OnInit {
  emailFormControl:FormControl;
  constructor(public dialog:MatDialog, public snackbar:MatSnackBar) { }

  ngOnInit() {
    this.emailFormControl=new FormControl('',[
      Validators.required,
      Validators.email
    ]);
  }
  openRepDialog(){
    console.log("Hey I am clicked")
    const dialogRef=this.dialog.open(RepDialogComponent,{
      width:'300px',
      // height:'300px',
      data:{}
    });
    dialogRef.afterClosed().subscribe(
      (result)=>{
        console.log("object ",result)
        alert('User choosed'+result)
      }
    )
  }
//snack bar fundtion
openUndoSnackbar(){
  const snackbarRef= this.snackbar.open("customer saved", "Undo",{
    horizontalPosition:'end',
    verticalPosition:'top',
    duration: 2000
  });
  snackbarRef.onAction().subscribe(()=>{
    alert('Undo the save')
  });
}
}
