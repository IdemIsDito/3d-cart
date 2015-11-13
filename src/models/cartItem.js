export class cartItem {
  constructor(data){
    this.FileName = data.FileName || null;
    this.File = null;
    this.FileSize = data.FileSize || 0;
    this.Metrics = data.Metrics || 'mm';
    this.Length = data.Length || 0;
    this.Height = data.Height || 0;
    this.Width = data.Width || 0;
    this.Quantity = data.Quantity || 1;
  }
}
