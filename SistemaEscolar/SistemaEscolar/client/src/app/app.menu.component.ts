import { Component, OnInit } from '@angular/core';
import { AppMainComponent } from './app.main.component';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[];

    constructor(public app: AppMainComponent) {}

    ngOnInit() {
        this.model = [
            {label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/template']},
            {
                label: 'Components', icon: 'pi pi-fw pi-star', routerLink: ['template/components'],
                items: [
                    { label: 'Sample Page', icon: 'pi pi-fw pi-th-large', routerLink: ['template/components/sample']},
                            { label: 'Forms', icon: 'pi pi-fw pi-file', routerLink: ['template/components/forms'] },
                            { label: 'Data', icon: 'pi pi-fw pi-table', routerLink: ['template/components/data'] },
                            { label: 'Panels', icon: 'pi pi-fw pi-list', routerLink: ['template/components/panels'] },
                            { label: 'Overlays', icon: 'pi pi-fw pi-clone', routerLink: ['template/components/overlays'] },
                    { label: 'Menus', icon: 'pi pi-fw pi-plus', routerLink: ['template/components/menus'] },
                    { label: 'Messages', icon: 'pi pi-fw pi-envelope', routerLink: ['template/components/messages'] },
                    { label: 'Charts', icon: 'pi pi-fw pi-chart-bar', routerLink: ['template/components/charts'] },
                    { label: 'File', icon: 'pi pi-fw pi-upload', routerLink: ['template/components/file'] },
                    { label: 'Misc', icon: 'pi pi-fw pi-spinner', routerLink: ['template/components/misc'] }
                ]
            },
            {
                label: 'Pages', icon: 'pi pi-fw pi-copy', routerLink: ['template/pages'],
                items: [
                    { label: 'Empty', icon: 'pi pi-fw pi-clone', routerLink: ['template//pages/empty'] },
                    { label: 'Login', icon: 'pi pi-fw pi-sign-in', routerLink: ['template//login'], target: '_blank' },
                    { label: 'Landing', icon: 'pi pi-fw pi-globe', url: 'template/assets/pages/landing.html', target: '_blank' },
                    { label: 'Error', icon: 'pi pi-fw pi-exclamation-triangle', routerLink: ['/error'], target: '_blank' },
                    { label: '404', icon: 'pi pi-fw pi-times', routerLink: ['/404'], target: '_blank' },
                    {
                        label: 'Access Denied', icon: 'pi pi-fw pi-ban',
                        routerLink: ['/accessdenied'], target: '_blank'
                    }
                ]
            },
            {
                label: 'Hierarchy', icon: 'pi pi-fw pi-sitemap',
                items: [
                    {
                        label: 'Submenu 1', icon: 'pi pi-fw pi-sign-in',
                        items: [
                            {
                                label: 'Submenu 1.1', icon: 'pi pi-fw pi-sign-in',
                                items: [
                                    { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-sign-in' },
                                    { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-sign-in' },
                                    { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-sign-in' },
                                ]
                            },
                            {
                                label: 'Submenu 1.2', icon: 'pi pi-fw pi-sign-in',
                                items: [
                                    { label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-sign-in' }
                                ]
                            },
                        ]
                    },
                    {
                        label: 'Submenu 2', icon: 'pi pi-fw pi-sign-in',
                        items: [
                            {
                                label: 'Submenu 2.1', icon: 'pi pi-fw pi-sign-in',
                                items: [
                                    { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-sign-in' },
                                    { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-sign-in' },
                                ]
                            },
                            {
                                label: 'Submenu 2.2', icon: 'pi pi-fw pi-sign-in',
                                items: [
                                    { label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-sign-in' },
                                ]
                            },
                        ]
                    }
                ]
            },
            {
                label: 'Documentation', icon: 'pi pi-fw pi-file', routerLink: ['template/documentation']
            },
            {
                label: 'Buy Now', icon: 'pi pi-fw pi-money-bill', url: ['https://www.primefaces.org/store']
            }
        ];
    }
}
