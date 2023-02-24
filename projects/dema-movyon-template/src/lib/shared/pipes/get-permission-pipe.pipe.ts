import { Pipe, PipeTransform } from '@angular/core';
import { Operation } from '../../components/domain/interface';


@Pipe({
  name: 'getPermissionPipe'
})
export class GetPermissionPipe implements PipeTransform {

  transform(operations: Operation[], code: string): boolean {
    let value = '';
    if (operations) {
      operations.map(
        (operation: Operation) => {
          if (operation.code === code)
            value = operation.value;
        }
      );
    }
    return value === 'true';
  }

}
