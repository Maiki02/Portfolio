import { Component, ElementRef, AfterViewInit, HostListener, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-mouse-trail',
  template: `<canvas #canvas class="pointer-events-none absolute inset-0 w-full"></canvas>`,
  styles: [`
    canvas {
      position: absolute;
      inset: 0;
      width: 100vw;
      height: 100vh;
      display: block;
      vertical-align: middle;
      pointer-events: none;
      background:red;
    }
  `],
  standalone: true
})
export class MouseTrailComponent implements AfterViewInit, OnDestroy {
  private canvas!: HTMLCanvasElement;
  private ctx!: CanvasRenderingContext2D;
  private lines: Line[] = [];
  private mouse = { x: 0, y: 0 };
  private lastMouse = { x: 0, y: 0 };
  private animationFrameId!: number;
  private isActive = false;

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.canvas = this.el.nativeElement.querySelector('canvas');
    this.ctx = this.canvas.getContext('2d')!;
    this.resizeCanvas();
    this.initLines();
    this.animate();
    this.isActive = true;
  }

  ngOnDestroy() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
    this.isActive = false;
  }

  @HostListener('window:resize')
  resizeCanvas() {
    if (this.canvas) {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    }
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    console.log("move")
    this.lastMouse.x = this.mouse.x;
    this.lastMouse.y = this.mouse.y;
    this.mouse.x = event.clientX;
    this.mouse.y = event.clientY;
  }

  @HostListener('document:touchmove', ['$event'])
  onTouchMove(event: TouchEvent) {
    console.log("move")
    if (event.touches.length > 0) {
      this.lastMouse.x = this.mouse.x;
      this.lastMouse.y = this.mouse.y;
      this.mouse.x = event.touches[0].clientX;
      this.mouse.y = event.touches[0].clientY;
    }
  }

  private initLines() {
    this.lines = [];
    const count = 15; // Número de líneas
    
    for (let i = 0; i < count; i++) {
      this.lines.push(new Line(this.canvas.width / 2, this.canvas.height / 2, i * 5));
    }
  }

  private animate() {
    if (!this.isActive) return;

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    // Actualizar y dibujar cada línea
    this.lines.forEach((line, i) => {
      line.update(this.mouse, this.lastMouse);
      line.draw(this.ctx);
    });
    
    this.animationFrameId = requestAnimationFrame(() => this.animate());
  }
}

class Line {
  private points: { x: number, y: number, age: number }[] = [];
  private maxPoints = 50;
  private color: string;
  private colorOffset: number;
  private width: number;
  private speed: number;
  private maxAge: number = 60;
  
  constructor(x: number, y: number, colorOffset: number) {
    this.colorOffset = colorOffset;
    this.color = this.getHue(0);
    this.width = Math.random() * 2 + 1;
    this.speed = 0.3 - Math.random() * 0.1;
    
    // Inicializar puntos
    for (let i = 0; i < this.maxPoints; i++) {
      this.points.push({ x, y, age: this.maxAge });
    }
  }
  
  update(mouse: { x: number, y: number }, lastMouse: { x: number, y: number }) {
    // Añadir nuevo punto basado en la posición del mouse
    const newPoint = {
      x: mouse.x,
      y: mouse.y,
      age: 0
    };
    
    this.points.unshift(newPoint);
    if (this.points.length > this.maxPoints) {
      this.points.pop();
    }
    
    // Actualizar edad de todos los puntos
    this.points.forEach(point => {
      point.age++;
    });
  }
  
  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    
    // Dibujar línea conectando los puntos
    let startDrawn = false;
    
    for (let i = 0; i < this.points.length - 1; i++) {
      const point = this.points[i];
      const nextPoint = this.points[i + 1];
      
      if (point.age < this.maxAge) {
        const alpha = 1 - point.age / this.maxAge;
        ctx.strokeStyle = this.getHue(i + this.colorOffset);
        ctx.lineWidth = this.width * alpha;
        
        if (!startDrawn) {
          ctx.moveTo(point.x, point.y);
          startDrawn = true;
        }
        
        // Suavizar la línea con curvas
        const xc = (point.x + nextPoint.x) / 2;
        const yc = (point.y + nextPoint.y) / 2;
        ctx.quadraticCurveTo(point.x, point.y, xc, yc);
      }
    }
    
    ctx.stroke();
  }
  
  private getHue(offset: number): string {
    const hue = (Date.now() / 30 + offset) % 360;
    return `hsla(${hue}, 100%, 70%, 0.8)`;
  }
}