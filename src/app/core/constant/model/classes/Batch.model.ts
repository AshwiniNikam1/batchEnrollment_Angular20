export class BatchModel {
  batchId: number;
  batchName: string;
  description: string;
  startDate: string;
  endDate: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  constructor() {
    this.batchId = 0;
    this.batchName = '';
    this.startDate = '';
    this.description = '';
    this.endDate = '';
    this.isActive = false;
    this.createdAt = new Date;
    this.updatedAt = new Date;
  }
}
