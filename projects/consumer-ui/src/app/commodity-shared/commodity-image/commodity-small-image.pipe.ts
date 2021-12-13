import { Pipe, PipeTransform } from '@angular/core';
import { CommoditiesQuery } from 'common-biz';

@Pipe({
  name: 'commoditySmallImage',
})
export class CommoditySmallImagePipe implements PipeTransform {
  transform(item: CommoditiesQuery['commodities'][0]): string {
    return item.skus.flatMap(it => it.images).flatMap(it => it.smallImageUrl)[0];
  }
}
