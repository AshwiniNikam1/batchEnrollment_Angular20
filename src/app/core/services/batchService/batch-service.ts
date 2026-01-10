import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BatchModel } from '../../constant/model/classes/Batch.model';
import { environment } from '../../../../environments/environment.development';
import { ApiConstantMethod, GlobalConstant } from '../../constant/Global.constant';
import { Observable } from 'rxjs';
import { IApiRespose } from '../../constant/model/interfaces/apiResponse.model';

@Injectable({
  providedIn: 'root',
})
export class BatchService {
  http = inject(HttpClient);

  createBatches(payload: BatchModel): Observable<IApiRespose> {
    return this.http.post<IApiRespose>(environment.API_URL + ApiConstantMethod.BATCHES, payload);
  }

  getAllBatches(): Observable<IApiRespose> {
    return this.http.get<IApiRespose>(environment.API_URL + ApiConstantMethod.BATCHES);
  }

  updateBatches(payload: BatchModel): Observable<IApiRespose> {
    return this.http.put<IApiRespose>(
     `${environment.API_URL}${ApiConstantMethod.BATCHES}${ApiConstantMethod.SLASH}${payload.batchId}`, payload,
    {
      headers: { 'Content-Type': 'application/json' }
    }
    );
  }

  deleteBatchById(id: number): Observable<IApiRespose> {
    return this.http.delete<IApiRespose>(`${environment.API_URL}${ApiConstantMethod.BATCHES}${ApiConstantMethod.SLASH}${id}`);
  }
  getBatchesById(id: number): Observable<IApiRespose> {
    return this.http.get<IApiRespose>(`${environment.API_URL}${ApiConstantMethod.BATCHES}${ApiConstantMethod.SLASH}${id}`);
  }
}
