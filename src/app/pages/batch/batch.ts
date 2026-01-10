import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { BatchModel } from '../../core/constant/model/classes/Batch.model';
import { BatchService } from '../../core/services/batchService/batch-service';
import { IApiRespose } from '../../core/constant/model/interfaces/apiResponse.model';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-batch',
  imports: [FormsModule, CommonModule, DatePipe],
  templateUrl: './batch.html',
  styleUrl: './batch.css',
})
export class Batch implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  batchObj: BatchModel = new BatchModel();
  isEdit:boolean=false;
  batchList = signal<BatchModel[]>([]);
  batchServ = inject(BatchService);
  subscription$!: Subscription;
  ngOnInit() {
    this.getAllBatchesList();
  }
  createBatchData() {
    debugger;
    this.batchServ.createBatches(this.batchObj).subscribe({
      next: (res: IApiRespose) => {
        debugger;
        if (res.result) {
          alert('Batch created sucessfully...');
          this.getAllBatchesList();
        }
      },
      error: (err) => {
        alert(err.error.message);
      },
    });
  }
  onSubmit() {
if(this.isEdit){
  this.updateBatch();
}
else
{
    this.createBatchData();
}

  }

  getAllBatchesList() {
    this.subscription$ = this.batchServ.getAllBatches().subscribe({
      next: (res: IApiRespose) => {
        console.log('data', res.data);
        this.batchList.set(res.data);
      },
    });
  }

  onDeleteBatch(id: number) {
    const promptMsg = confirm('Are you sure you want to delete?');
    this.batchServ.deleteBatchById(id).subscribe({
      next: (res: IApiRespose) => {
        if (promptMsg) {
          alert('batch deleted sucessfully');
          this.getAllBatchesList();
        }
      },
      error: (err: IApiRespose) => {
        alert(err.message);
      },
    });
  }

  onEditBatch(batch: BatchModel) {
    debugger
    this.isEdit=true;
    this.batchServ.getBatchesById(batch.batchId).subscribe({
      next: (res: IApiRespose) => {
        this.batchObj = res.data;
      },
      error: (err: IApiRespose) => {
        alert(err.message);
      },
    });
  }

  updateBatch(){
    debugger

    this.batchServ.updateBatches(this.batchObj).subscribe({
      next:(res:IApiRespose)=>{
        alert("batch updated sucessfully");
        this.batchObj=new BatchModel;
        this.getAllBatchesList();

      },
      error:(err:IApiRespose)=>{
        alert(err.message)
      }
    })
  }
  onDestroy() {
    this.subscription$.unsubscribe();
  }
}
