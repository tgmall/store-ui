import { Pipe, PipeTransform } from '@angular/core';
import { CommodityQuery } from 'common-biz';

@Pipe({
  name: 'commodityLargeImage',
})
export class CommodityLargeImagePipe implements PipeTransform {

  transform(item: CommodityQuery['commodity']): string {
    return item.skus.flatMap(it => it.images).flatMap(it => it.smallImageUrl)[0];
  }
}
