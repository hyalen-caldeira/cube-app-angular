import { Pipe, PipeTransform } from '@angular/core';
import { HealthTip } from '../models/health-tip';

@Pipe({
  name: 'healthTipsPipe'
})
export class HealthTipsPipePipe implements PipeTransform {

  transform(healthTips: any[], value : any): any {
    // if (!healthTips || !filter)
    //   return healthTips;

  // filter items array, items which match and return true will be
  // kept, false will be filtered out
  // return healthTips.filter(healthTip => healthTip.userId == 8);
  return healthTips.filter(healthTip => value.id == healthTip.userId);
  }
}
