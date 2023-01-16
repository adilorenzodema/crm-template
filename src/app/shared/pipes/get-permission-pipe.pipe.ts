import { Pipe, PipeTransform } from '@angular/core';
import { Code, Operations } from 'src/app/components/domain/interface';

@Pipe({
  name: 'getPermissionPipe'
})
export class GetPermissionPipePipe implements PipeTransform {

  transform(operations: Operations[], code: Code): boolean {
    let value = false;
    if (operations) {
      operations.map(
        (operation: { code: string; value: boolean }) => {
          if (operation.code === code)
            value = operation.value;
        }
      );
    }
    return value;
  }

}
