import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }
 getGroupAvatarURL(memberName: string, size: number = 1) {
    return `https://source.boringavatars.com/bauhaus/${size}/${encodeURIComponent(memberName)
        }?colors=ffc5b1,ff7b5b,785298,52d2bc,e8ab2d`;
      }

 getMemberAvatarURL(memberName: string, size: number = 1) {
    return `https://source.boringavatars.com/beam/${size}/${encodeURIComponent(memberName)
        }?colors=ffc5b1,ff7b5b,785298,52d2bc,e8ab2d`;
      }
}
