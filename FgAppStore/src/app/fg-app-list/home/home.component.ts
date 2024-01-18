import { Component, OnInit } from '@angular/core';
import { AuthGuard } from 'src/app/auth.service';
import { SessionService } from 'src/app/services/session.service';
import { Router } from '@angular/router';
import { DashboardItem,DashboardService } from 'src/app/services/app-url-data.service';
import {  ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isDisabled: boolean = true; 
  dashboardItems: DashboardItem[] = [];
  constructor(private authGuard: AuthGuard,private sessionService: SessionService, private router: Router,private dashboardService: DashboardService,private elementRef: ElementRef, private renderer: Renderer2) {
    this.dashboardItems = 
    [
        {
          "title": "Infinity",
          "links": [
            { "type": "Playstore", "url": "https://play.google.com/store/apps/details?id=com.fgli.omni.omni" },
            { "type": "web", "url": "https://infinity2.futuregenerali.in/WEBAPP/InfinityApp/#/Login" },
            { "type": "AppleStore", "url": "" }
          ]
        },
        {
          "title": "Recruitment Tool",
          "links": [
            { "type": "Playstore", "url": "https://play.google.com/store/apps/details?id=com.generali.GeneraliRc" },
            { "type": "web", "url": "https://recruitment.futuregenerali.in/login.php" },
            { "type": "AppleStore", "url": "https://buyonline.life.futuregenerali.in/FGRecruitement/ios/" }
          ]
        },
        {
          "title": "Dashboard",
          "links": [
            { "type": "Playstore", "url": "" },
            { "type": "web", "url": "https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Flookerstudio.google.com%2F%3Frequirelogin%3D1&followup=https%3A%2F%2Flookerstudio.google.com%2F%3Frequirelogin%3D1&ifkv=ASKXGp2sP2vCbl2NmbXABxBiH-d92hrjbSkgl_JDDJ_1hzNMTUb8B4gAmPBuyqSxqR6yNlBkXbv8mw&ltmpl=datastudio&passive=1209600&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S906534888%3A1700631315493409&theme=glif" },
            { "type": "AppleStore", "url": "" }
          ]
        },
        {
          "title": "Success Factor",
          "links": [
            { "type": "Playstore", "url": "https://play.google.com/store/apps/details?id=com.successfactors.successfactors" },
            { "type": "web", "url": "https://adfs.futuregenerali.in/adfs/ls/?SAMLRequest=jZLBbtswDEB%2FxVDPlmTFyRLBCZAtGBag24Im62E3VWJcATbliVKz%2Ff3ctENzadcr8Qi8B7JZ53SPN%2FArA6ViTQQx%2BYCfAlLuIe4hPngLP26ul%2Bw%2BpYG0EEaph97kduDG2pAxEQ%2FooDfouA29INN3Sng3CGPpfzQrdjGkYEP30aPz2C5ZjqiDIU8aTQ%2Bkk9X79ddrrbjUd08Q6S%2BHw67cfd8fWLEZzT2aR%2B0LSXckfswpR2gBIZrOc4%2FnsehIsGK7WbI9TOczN%2FswKedg52VdO1caI6fl1DpVT6uFNXduRIkybJGSwbRkSqpJWVWlkge50KrSVc1ntfrJiluIdJYYTVnxu%2B%2BQ3q4ZntOfYY2k3l4w%2F%2B7zslE%2FNY%2FJp9OJnyY8xFYoKSshazFCgPbqhZ68QkshF4%2B0I99esVUzmuhzdly98%2ByNuNhpvo3q280udN7%2BKT6H2Jv0elnFq%2FPEu%2FJ4RnVGGsD6owfHxKoRl0%2B6%2Bgs%3D&RelayState=arcc5657b&SigAlg=http%3A%2F%2Fwww.w3.org%2F2001%2F04%2Fxmldsig-more%23rsa-sha256&Signature=cFuVc2ZNCcXP6kiGk1%2B7XwRm3YaVvmhBofSbVrohOLl7NIrWEmbJhNZq45pK8JWoCPkn1UbNrEddjT%2BP7vYaFLudU5oG%2F%2B0dA8q42OlvsCPVyk8sDw9w9i%2F42%2BCHPFdmFwaUtcVGPlRQefnqFZFM78x4vFfdxDEVxQEqTw6W3O0zw8LHzEOj8OYeED%2B%2Fquq5tUv01ItzQsICaL7h58MrTevgtn2hA959Fx3tjWACXkvj73yyfjOvqi9HUxwWVzGetGp2MN7He3ZCLHPaLkhNDJ7WstZSySmrIs7Azy92Fhe%2BTGWqAcpFm4jz%2BPq3oVObMFZTMfSQNPd%2Fembc%2F2Klzw%3D%3D" },
            { "type": "AppleStore", "url": "https://apps.apple.com/in/app/sap-successfactors/id426562526" }
          ]
        },
        {
          "title": "FG My Space",
          "links": [
            { "type": "Playstore", "url": "https://play.google.com/store/apps/details?id=com.fgli.attendance" },
            { "type": "web", "url": "" },
            { "type": "AppleStore", "url": "https://buyonline.life.futuregenerali.in/fgmyspace/ios/" }
          ]
        },
        {
          "title": "We learn",
          "links": [
            { "type": "Playstore", "url": "" },
            { "type": "web", "url": "https://welearn-generali.csod.com/client/welearn-generali/default.aspx" },
            { "type": "AppleStore", "url": "" }
          ]
        },
        {
          "title": "Yammer",
          "links": [
            { "type": "Playstore", "url": "https://www.yammer.com/futuregenerali.in/users/1715504898048" },
            { "type": "web", "url": "https://web.yammer.com/main/org/futuregenerali.in/groups/eyJfdHlwZSI6Ikdyb3VwIiwiaWQiOiI0NjI4OTM3OTMyOCJ9/all?trk_event=com_yams_view_group_feed&trk_outlook_origin=am&trk_integration_origin=am&trk_scenario_type=com&trk_scenario_sub_type=mandatoryannouncement&trk_notif_id=e36afa67441b4a2a261d947c32b373e413d3e5a6bd82f7615b54e5e5e88a6068&trk_group_id=46289379328" },
            { "type": "AppleStore", "url": "" }
          ]
        },
        {
          "title": "IT Ticketing",
          "links": [
            { "type": "Playstore", "url": "" },
            { "type": "web", "url": "https://ithelpdesk.futuregenerali.in" },
            { "type": "AppleStore", "url": "" }
          ]
        },
        {
          "title": "Expenses System",
          "links": [
            { "type": "Playstore", "url": "" },
            { "type": "web", "url": "https://expmgrlf.futuregenerali.in/portal/" },
            { "type": "AppleStore", "url": "" }
          ]
        },
        {
          "title": "XOXO Day",
          "links": [
            { "type": "Playstore", "url": "" },
            { "type": "web", "url": "https://www.xoxoday.com/#get-started" },
            { "type": "AppleStore", "url": "" }
          ]
        }
      ]
      
  }
  

  ngOnInit(): void {
    // this.getDashboardItems();
  }

  getDashboardItems(): void {
    this.dashboardService.getDashboardItems()
      .subscribe(items => {
        this.dashboardItems = items;
      });
  }
  logout(): void {
    this.sessionService.clearSession(); // Clear session in SessionService
    // Clear login data from localStorage
    sessionStorage.removeItem('loggedIn');
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('encryptedPassword');
    sessionStorage.removeItem('channelType');
    this.router.navigate(['fgApp/login']);

    // Set the logout flag when the user logs out
    this.authGuard.setLoggedOutFlag();

    // ... other code ...
  }



//Block access to hyperlink when url is not provided
  handleClick(event: MouseEvent, url: string): void {
    if (!url || url === '') {
      event.preventDefault();
    //  console.log('Link is disabled.');
      // Perform any other action needed when the link is disabled
    }
  }
  ngAfterViewInit(): void {
    this.handleTouch();
  }

  handleTouch(): void {
    const isTouchDevice = 'ontouchstart' in document.documentElement;

    if (isTouchDevice) {
      const boxFooters = this.elementRef.nativeElement.querySelectorAll('.box-footer');

      boxFooters.forEach((footer: HTMLElement) => {
        this.renderer.listen(footer, 'click', (event) => {
          const boxIcons = footer.closest('.box')?.querySelector('.box-icons');
          if (boxIcons) {
            boxIcons.classList.toggle('show-icons');
          }
          event.stopPropagation();
        });
      });
    }
  }





// To track the last opened collapsible item
  lastOpened: any = null; 
  // Function to toggle collapsible elements
  toggleCollapsible(item: any) {
    const checkbox = document.getElementById(item.title) as HTMLInputElement;
    // If the clicked item is different from the last opened, close the last opened collapsible
    if (this.lastOpened && this.lastOpened !== checkbox) {
      this.lastOpened.checked = false;
    }
    // Toggle the clicked collapsible
    checkbox.checked = !checkbox.checked;
    // Update the last opened collapsible
    this.lastOpened = checkbox.checked ? checkbox : null;
  }
  

}
