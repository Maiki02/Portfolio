import { Injectable } from '@angular/core';

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
}
