import { Component, ElementRef, AfterViewInit, HostListener, ViewChild, OnDestroy, OnInit, NgZone } from '@angular/core';

interface Point {
  x: number;
  y: number;
  timestamp: number;
}

@Component({
  selector: 'app-mouse-trail',
  template: '<canvas #canvas style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none;"></canvas>',
  styles: []
})
export class MouseTrailComponent implements OnInit, OnDestroy {
  @ViewChild('canvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;

  private ctx: any;
  private f: any;
  private e = 0;
  private pos: any = {};
  private lines: any[] = [];
  private isRunning = true;

  private E = {
    debug: true,
    friction: 0.5,
    trails: 20,
    size: 50,
    dampening: 0.25,
    tension: 0.98,
  };

  constructor(private el: ElementRef, private ngZone: NgZone) {}

  ngOnInit(): void {
    this.ngZone.runOutsideAngular(() => {
      this.initializeCanvas();
    });
  }

  ngOnDestroy(): void {
    this.isRunning = false;
    document.removeEventListener('mousemove', this.onMousemove);
    document.removeEventListener('touchstart', this.onMousemove);
    document.body.removeEventListener('orientationchange', this.resizeCanvas);
    window.removeEventListener('resize', this.resizeCanvas);
    window.removeEventListener('focus', this.onFocus);
    window.removeEventListener('blur', this.onBlur);
  }

  private initializeCanvas(): void {
    const canvas = this.canvasRef.nativeElement;  // Usa canvasRef
    this.ctx = canvas.getContext('2d');
    this.ctx.running = true;
    this.ctx.frame = 1;

    this.f = new SineWave({
      phase: Math.random() * 2 * Math.PI,
      amplitude: 85,
      frequency: 0.0015,
      offset: 285,
    });

    document.addEventListener('mousemove', this.onMousemove);
    document.addEventListener('touchstart', this.onMousemove);
    document.body.addEventListener('orientationchange', this.resizeCanvas);
    window.addEventListener('resize', this.resizeCanvas);
    window.addEventListener('focus', this.onFocus);
    window.addEventListener('blur', this.onBlur);

    this.resizeCanvas();
  }

  private onMousemove = (e: MouseEvent | TouchEvent): void => {
    document.removeEventListener('mousemove', this.onMousemove);
    document.removeEventListener('touchstart', this.onMousemove);
    document.addEventListener('mousemove', this.handleMouseMove);
    document.addEventListener('touchmove', this.handleMouseMove);
    document.addEventListener('touchstart', this.handleTouchStart);
    
    this.handleMouseMove(e);
    this.initLines();
    this.render();
  }

  private handleMouseMove = (e: MouseEvent | TouchEvent): void => {
    if ('touches' in e) {
      this.pos.x = (e as TouchEvent).touches[0].pageX;
      this.pos.y = (e as TouchEvent).touches[0].pageY;
    } else {
      this.pos.x = (e as MouseEvent).clientX;
      this.pos.y = (e as MouseEvent).clientY;
    }
    e.preventDefault();
  }

  private handleTouchStart = (e: TouchEvent): void => {
    if (e.touches.length === 1) {
      this.pos.x = e.touches[0].pageX;
      this.pos.y = e.touches[0].pageY;
    }
  }

  private initLines(): void {
    this.lines = [];
    for (let i = 0; i < this.E.trails; i++) {
      this.lines.push(new Line({ 
        spring: 0.4 + (i / this.E.trails) * 0.025,
        friction: this.E.friction,
        size: this.E.size,
        dampening: this.E.dampening,
        tension: this.E.tension,
        pos: this.pos
      }));
    }
  }

  private render = (): void => {
    if (this.ctx.running && this.isRunning) {
      this.ctx.globalCompositeOperation = 'source-over';
      this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
      this.ctx.globalCompositeOperation = 'lighter';
      this.ctx.strokeStyle = 'hsla(' + Math.round(this.f.update()) + ',50%,50%,0.2)';
      this.ctx.lineWidth = 1;
      
      for (let t = 0; t < this.E.trails; t++) {
        const line = this.lines[t];
        line.update();
        line.draw(this.ctx);
      }
      
      this.ctx.frame++;
      window.requestAnimationFrame(this.render);
    }
  }

  private resizeCanvas = (): void => {
    this.ctx.canvas.width = window.innerWidth - 20;
    this.ctx.canvas.height = window.innerHeight;
  }

  private onFocus = (): void => {
    if (!this.ctx.running) {
      this.ctx.running = true;
      this.render();
    }
  }

  private onBlur = (): void => {
    this.ctx.running = true;
  }
}

class SineWave {
  private phase: number;
  private offset: number;
  private frequency: number;
  private amplitude: number;
  private e = 0;

  constructor(options: any) {
    this.phase = options.phase || 0;
    this.offset = options.offset || 0;
    this.frequency = options.frequency || 0.001;
    this.amplitude = options.amplitude || 1;
  }

  update(): number {
    this.phase += this.frequency;
    this.e = this.offset + Math.sin(this.phase) * this.amplitude;
    return this.e;
  }

  value(): number {
    return this.e;
  }
}

class Node {
  x = 0;
  y = 0;
  vx = 0;
  vy = 0;
}

class Line {
  private spring: number;
  private friction: number;
  private nodes: Node[] = [];
  private pos: any;
  private options: any;

  constructor(options: any) {
    this.options = options;
    this.spring = options.spring + 0.1 * Math.random() - 0.02;
    this.friction = options.friction + 0.01 * Math.random() - 0.002;
    this.pos = options.pos;
    
    for (let i = 0; i < options.size; i++) {
      const node = new Node();
      node.x = this.pos.x;
      node.y = this.pos.y;
      this.nodes.push(node);
    }
  }

  update(): void {
    let e = this.spring;
    const t = this.nodes[0];
    
    t.vx += (this.pos.x - t.x) * e;
    t.vy += (this.pos.y - t.y) * e;
    
    for (let i = 0, len = this.nodes.length; i < len; i++) {
      const currentNode = this.nodes[i];
      
      if (i > 0) {
        const prevNode = this.nodes[i - 1];
        currentNode.vx += (prevNode.x - currentNode.x) * e;
        currentNode.vy += (prevNode.y - currentNode.y) * e;
        currentNode.vx += prevNode.vx * this.options.dampening;
        currentNode.vy += prevNode.vy * this.options.dampening;
      }
      
      currentNode.vx *= this.friction;
      currentNode.vy *= this.friction;
      currentNode.x += currentNode.vx;
      currentNode.y += currentNode.vy;
      
      e *= this.options.tension;
    }
  }

  draw(ctx: CanvasRenderingContext2D): void {
    let n = this.nodes[0].x;
    let i = this.nodes[0].y;
    
    ctx.beginPath();
    ctx.moveTo(n, i);
    
    for (let a = 1, o = this.nodes.length - 2; a < o; a++) {
      const e = this.nodes[a];
      const t = this.nodes[a + 1];
      n = 0.5 * (e.x + t.x);
      i = 0.5 * (e.y + t.y);
      ctx.quadraticCurveTo(e.x, e.y, n, i);
    }
    
    const e = this.nodes[this.nodes.length - 2];
    const t = this.nodes[this.nodes.length - 1];
    ctx.quadraticCurveTo(e.x, e.y, t.x, t.y);
    
    ctx.stroke();
    ctx.closePath();
  }
}