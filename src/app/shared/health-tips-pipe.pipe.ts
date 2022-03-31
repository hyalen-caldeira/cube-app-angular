import { Pipe, PipeTransform } from '@angular/core';
import { HealthTip } from '../models/health-tip';

@Pipe({
  name: 'healthTipsPipe'
})
export class HealthTipsPipePipe implements PipeTransform {

  transform(healthTips: any[], value : any): any {
    
    // var containsTip = healthTips.filter(healthTip => value.id == healthTip.userId);
    // const filteredValues = (containsTip.length == 0) ? 
    //   {id: 0, tip: 'There is no Health Tip for the Selected User', userId: 0} : containsTip;

    // return filteredValues;


    return healthTips.filter(healthTip => value.id == healthTip.userId);
  }
}
