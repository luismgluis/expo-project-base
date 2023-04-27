import globalVars from '../../libs/utils/globalVars';
import utils from '../../libs/utils/utils';

export const ProductModelFieldsToUpdate: (keyof ProductModel)[] = [
  'pined',
  'gross_price',
  'title',
  'description',
  'discount',
  'price_alternative_1',
  'categoryPrimary',
];

export default class ProductModel {
  title: string;
  description: string;
  gross_price: number;
  net_price: number;
  discount: number;
  price_alternative_1: number;
  src: string;
  src_min: string;
  id: string;
  likes: number;
  iLiked?: boolean;
  iFavorite?: boolean; //not work just now
  thumbnail: string;
  type?: 'video' | 'img';
  creationDate: number;
  idBusiness: string;
  creatorUid: string;
  cart_count?: number;

  categoryPrimary: string;
  processing?: boolean;
  processingRef?: string;
  pined?: boolean;
  constructor(data: any = null) {
    this.id = data?.id || '';
    this.creationDate = data?.creationDate || 0;
    this.idBusiness = data?.idBusiness || '';
    this.likes = data?.likes || 0;
    this.thumbnail = data?.thumbnail || '';
    this.title = data?.title || '';
    this.description = data?.description || '';

    this.net_price = Number(data?.net_price) || 0;
    this.gross_price = Number(data?.gross_price) || 0;
    this.discount = Number(data?.discount) || 0;
    this.price_alternative_1 = Number(data?.price_alternative_1) || 0;

    this.categoryPrimary = data?.categoryPrimary || '';
    this.type = data?.type || 'video';
    this.src = data?.src || '';
    this.creatorUid = data?.creatorUid || '';
    this.iLiked = data?.iLiked || false;
    this.iFavorite = data?.iFavorite || false;

    this.src_min = data?.src_min || '';

    this.processing = data?.processing || false;
    this.processingRef = data?.processingRef || '';
    this.pined = utils.parseBoolean(data?.pined) || false;
    //
    this.cart_count = data?.cart_count || 0;
    if (globalVars.NODE_ENV === 'development') {
      // this.src = "/assets/media/food.mp4";
    }
  }

  public get taxes(): number {
    return this.net_price - this.gross_price;
  }

  public get totalPrice(): number {
    if (this.discount === 0 || !this.discount) return this.net_price;

    return this.net_price - this.discount;
  }
  public get totalPriceWithCart(): number {
    return this.totalPrice * (this.cart_count || 1);
  }

  public get totalPriceMoneyFormat(): string {
    return `$${this.totalPrice.toLocaleString()}`;
  }
  public get PriceMoneyFormat(): string {
    return `$${this.net_price.toLocaleString()}`;
  }

  public get creationDateDate(): Date {
    return new Date(this.creationDate);
  }
}
