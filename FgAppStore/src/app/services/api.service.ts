// api.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  apiUrl = 'https://infinity2.futuregenerali.in/API/Infinity2JourneyAPI/api/V3/Login/Userlogin';
  //apiUrl = 'https://lfuat.futuregenerali.in/Infinity2API//api/V3/Login/Userlogin';

  constructor(private http: HttpClient) {}

  loginUser(userId: string, encryptedPassword: string, channelType: string): Observable<any> {
    const payload = {
      Source: 'Omni',
      AgentPassword: encryptedPassword,
      AgentCode: userId,
      LoginType: channelType,
      DeviceDetails: {
        AppName: 'InfinityNext',
        Device: '',
        IsTablet: null,
        IsMobileDevice: null,
        VersionCode: '119.0.0',
        VersionName: '',
        IPAddress: '',
        DeviceID: '',
        DeviceManifacturer: '',
        DeviceModel: '',
        DeviceType: '',
        DeviceVersion: '',
        Latitude: '',
        Longitude: '',
        PinCode: '',
        AppID: ''
      }
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<any>(this.apiUrl, payload, { headers: headers });
  }
}
