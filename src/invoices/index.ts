import { PaginatedDto } from "../core/dto/pagination";
import { queryParams } from "../core/utils/queryParams";
import { RestApiModuleI, ApiModule } from "../model";
import { Invoice, CreateInvoice, UpdateInvoice, QueryInvoiceDto } from "./types";

export default class Invoices extends ApiModule implements RestApiModuleI {
  create(data:CreateInvoice) {
    return this._call<Invoice>('post','/invoices',data)
  }

  findAll(args:QueryInvoiceDto = {}) {
    return this._call<PaginatedDto<Invoice>>('get','/invoices',queryParams(args))
  } 

  findOne(id:number) {
    return this._call<Invoice>('get',`/invoices/${id}`)
  }

  update(id:number,data:UpdateInvoice) {
    return this._call<Invoice>('patch',`/invoices/${id}`,data)
  }

  remove(id:number) {
    return this._call<Invoice>('delete',`/invoices/${id}`)
  }
}