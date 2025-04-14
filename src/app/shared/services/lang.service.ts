import { Injectable } from '@angular/core';
import { MenuType } from '../types/menu.types';
import { MENU_OPTIONS } from '../const/lang';

@Injectable({
  providedIn: 'root'
})
export class LangService {

  constructor() { }

  textButtonHome(language: "es" | "en") {
    const text = {
      en: 'Start',
      es: 'Comenzar'
    };
    return text[language];
  }

  textMenu(language: "es" | "en", section: MenuType) {
    return MENU_OPTIONS[section][language];
  }

}
