import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';


@Pipe({
  name: 'yTvideos'
})
export class YTvideosPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {

  }

  // SECURITY BYPASS YT API

  transform(videoId: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${videoId}`);
  }

}
