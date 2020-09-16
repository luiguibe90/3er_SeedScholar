import { __decorate, __metadata } from "tslib";
import { Component, Renderer2 } from '@angular/core';
import { MenuService } from './app.menu.service';
let AppMainComponent = class AppMainComponent {
    constructor(renderer, menuService) {
        this.renderer = renderer;
        this.menuService = menuService;
        this.layout = 'layout-blue';
        this.layoutMode = 'horizontal';
        this.wrapperMode = false;
        this.configDialogActive = false;
        this.theme = 'blue';
        this.scheme = 'light';
    }
    onLayoutClick() {
        if (!this.topbarItemClick) {
            this.activeTopbarItem = null;
            this.topbarMenuActive = false;
        }
        if (!this.configClick) {
            this.configDialogActive = false;
        }
        if (!this.menuClick) {
            if (this.isHorizontal()) {
                this.menuService.reset();
            }
            if (this.overlayMenuActive || this.overlayMenuMobileActive) {
                this.hideOverlayMenu();
            }
            this.menuHoverActive = false;
        }
        this.topbarItemClick = false;
        this.menuClick = false;
        this.configClick = false;
    }
    onTopbarItemClick(event, item) {
        this.topbarItemClick = true;
        if (this.activeTopbarItem === item) {
            this.activeTopbarItem = null;
        }
        else {
            this.activeTopbarItem = item;
        }
        event.preventDefault();
    }
    onTopbarSubItemClick(event) {
        event.preventDefault();
    }
    changeComponentTheme(event, theme, scheme) {
        this.theme = theme;
        this.scheme = scheme;
        const themeLink = document.getElementById('theme-css');
        const href = 'assets/theme/' + theme + '/theme-' + scheme + '.css';
        this.replaceLink(themeLink, href);
        event.preventDefault();
    }
    changeLayoutTheme(event, color, theme, scheme) {
        this.layout = color;
        const layoutLink = document.getElementById('layout-css');
        const href = 'assets/layout/css/' + color + '.css';
        this.replaceLink(layoutLink, href);
        this.changeComponentTheme(event, theme, scheme);
        event.preventDefault();
    }
    isIE() {
        return /(MSIE|Trident\/|Edge\/)/i.test(window.navigator.userAgent);
    }
    replaceLink(linkElement, href) {
        if (this.isIE()) {
            linkElement.setAttribute('href', href);
        }
        else {
            const id = linkElement.getAttribute('id');
            const cloneLinkElement = linkElement.cloneNode(true);
            cloneLinkElement.setAttribute('href', href);
            cloneLinkElement.setAttribute('id', id + '-clone');
            linkElement.parentNode.insertBefore(cloneLinkElement, linkElement.nextSibling);
            cloneLinkElement.addEventListener('load', () => {
                linkElement.remove();
                cloneLinkElement.setAttribute('id', id);
            });
        }
    }
    changeWrapperMode(event, mode) {
        this.wrapperMode = mode;
        event.preventDefault();
    }
    changeLayoutMode(event, mode) {
        this.layoutMode = mode;
        event.preventDefault();
    }
    onMenuButtonClick(event) {
        this.menuClick = true;
        this.topbarMenuActive = false;
        if (this.layoutMode === 'overlay' && !this.isMobile()) {
            this.overlayMenuActive = !this.overlayMenuActive;
        }
        else {
            if (!this.isDesktop()) {
                this.overlayMenuMobileActive = !this.overlayMenuMobileActive;
            }
        }
        event.preventDefault();
    }
    onMenuClick($event) {
        this.menuClick = true;
    }
    hideOverlayMenu() {
        this.overlayMenuActive = false;
        this.overlayMenuMobileActive = false;
    }
    isDesktop() {
        return window.innerWidth > 990;
    }
    isMobile() {
        return window.innerWidth <= 990;
    }
    isOverlay() {
        return this.layoutMode === 'overlay';
    }
    isHorizontal() {
        return this.layoutMode === 'horizontal';
    }
};
AppMainComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.main.component.html'
    }),
    __metadata("design:paramtypes", [Renderer2, MenuService])
], AppMainComponent);
export { AppMainComponent };
//# sourceMappingURL=app.main.component.js.map