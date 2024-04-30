import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HashService {
  constructor() { }

  async hashData(data: string): Promise<string> {
    console.log(data)
    // const hashBuffer: any = crypto.subtle.digest('SHA-256', new TextEncoder().encode(data));
    const hashBuffer: any = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(data));
    return this.bufferToHexString(hashBuffer);
  }

  private bufferToHexString(buffer: ArrayBuffer): string {
    const byteArray = new Uint8Array(buffer);
    const hexChunks = Array.from(byteArray, byte => byte.toString(16).padStart(2, '0'));
    return hexChunks.join('');
  }
}
