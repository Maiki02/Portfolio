import { Education } from "./education.interface";

export const EDUCATION: {[language: string]: {[key: string]: Education}} = {
    "es": {
        'video-games': {
            title: 'Desarrollo y producción de videojuegos',
            ubication: 'Universidad Tecnológica Nacional',
            description: 'Formación integral enfocada en la industria del videojuego, participando en todas las etapas del desarrollo.',
            date: '2024-act',
            skills: [
                'Diseño y producción de videojuegos',
                'Trabajo en equipos multidisciplinarios',
                'Creación, prototipado y comercialización de videojuegos',
                'Narrativa, arte, programación y sonido'
            ]
        },

        'computer-science': {
            title: 'Ciencias de la computación',
            ubication: 'Universidad Nacional de Rosario',
            description: 'Fundamentos teóricos de la informática con fuerte enfoque en matemáticas y resolución de problemas.',
            date: '2020-2022',
            skills: [
                'Algoritmos y estructuras de datos',
                'Matemática discreta y lógica',
                'Lenguajes formales y teoría de la computación',
                'Arquitectura de computadoras'
            ]
        },

        'arg-prog': {
            title: '#YoProgramo, #SeProgramar y Argentina Programa 4.0',
            ubication: 'Argentina Programa',
            description: 'Introducción a la programación y conceptos clave del desarrollo web e inteligencia artificial.',
            date: '2020-2022',
            skills: [
                'Lógica computacional y algoritmos',
                'HTML, CSS, JavaScript, Java y SQLite',
                'Fundamentos de IA y ciencia de datos',
                'Herramientas de desarrollo web',
            ]
        }
    },

    "en":{
        
    }

    
}