export default class ProductCategory {
  id?: string;
  categoryName?: string;
  idBusiness?: string;
  constructor(data: any = null) {
    this.id = data?.id || '';
    this.categoryName = data?.categoryName || '';
    this.idBusiness = data?.idBusiness || '';
  }
}
