import utils from "../../libs/utils/utils";
import ProductModel from "../products/ProductModel";

export const OrderDisplayState: Record<OrderBase["state"], string> = {
  accept: "Aceptado",
  complete: "Completado",
  created: "Creado",
  delivery: "Domicilio",
  null: "Error",
};
class OrderBase {
  id: string;
  removed: boolean;
  completed: boolean;
  creationDate: number;
  completedDate: number;
  completedTotalPrice: number;
  idBusiness: string;
  idZone: string;
  creatorUid: string;
  deliveryPrice: number;
  state: "created" | "accept" | "delivery" | "complete" | "null";

  constructor(data: any = null) {
    this.id = data?.id || "";

    this.removed = utils.parseBoolean(data?.removed);
    this.completed = utils.parseBoolean(data?.completed);
    this.creationDate = data?.creationDate || 0;
    this.completedDate = data?.completedDate || 0;
    this.completedTotalPrice = data?.completedTotalPrice || 0;
    this.idBusiness = data?.idBusiness || "";
    this.idZone = data?.idZone || "";
    this.creatorUid = data?.creatorUid || "";
    this.deliveryPrice = data?.deliveryPrice || 0;
    this.state = data?.state || "null";
  }
}
export default class OrderModel extends OrderBase {
  products: ProductModel[];
  constructor(data: any = null) {
    super(data);
    this.products = data?.products || [];
    this.products = this.products.map((p) => new ProductModel(p));
  }
}
export class OrderBasicModel extends OrderBase {
  products: { id: string; priceNeto: number }[];
  constructor(data: any = null) {
    super(data);
    this.products = data?.products || [];
  }
}
