import React, { useRef, useEffect } from 'react';

const px = (f) => `${Math.round(f)}px`;

const range = (min, max) => (
  Math.random() * (max - min) + min
);

const palette = [
  'rgb(226, 33, 91)',
  'rgb(242, 183, 0)',
  'rgb(0, 201, 162)',
  'rgb(15, 178, 226)',
  'rgb(211, 15, 239)',
  'rgb(255, 58, 140)',
  'rgb(15, 112, 255)',
  'rgb(112, 191, 84)',
  'rgb(247, 137, 30)',
  'rgb(237, 0, 140)',
  'rgb(232, 45, 63)',
];

const newItem = (el) => () => {
  const item = {
    a: range(-Math.PI, Math.PI),
    h: range(150, 200),
    f: range(1, 3),
    d: 1,
    s: range(25, 50),
    c: palette[Math.floor(range(0, palette.length))],
    el: document.createElement('div'),
  };

  item.el.classList.add('export-sprite__node');
  item.el.style.backgroundColor = item.c;
  item.el.style.width = px(item.s);
  item.el.style.height = px(item.s);
  item.el.style.left = px(Math.sin(item.a) * item.h + 200);
  item.el.style.top = px(Math.cos(item.a) * item.h + 200);
  item.el.style.opacity = 1 - (item.h/200);
  item.el.style.borderRadius = px(100);
  el.appendChild(item.el);

  return item;
};

class ExportAnimation {
  constructor(el) {
    if (!el) { throw new Error('Element not found'); }
    this.el = el;
    this.items = [];
    this.start();
  }

  start() {
    this.items = Array(5).fill(undefined)
      .map(newItem(this.el));

    this.loop();

    setTimeout(() => {
      console.log(this.items);
    }, 10000);
  }

  loop() {
    // render
    this.items.forEach((item) => {
      const s = item.s/2 + item.s * item.h / 200;
      item.el.style.left = px(Math.sin(item.a) * item.h + 200 - s / 2);
      item.el.style.opacity = item.h > 50
        ? 1 - (item.h/200)
        : item.h/50;
      item.el.style.top = px(Math.cos(item.a) * item.h + 200 - s / 2);
      item.el.style.width = px(s);
      item.el.style.height = px(s);
    });

    this.items = this.items
      .map((item) => {
        const a = item.a - item.d * 0.015 * item.f;
        const h = item.h * Math.pow(0.9834, item.f);

        if (h <= item.s / 5) {
          this.el.removeChild(item.el);
        }

        return {
          ...item,
          a,
          h,
        };
      })
      .filter(({ h, s }) => h > s / 5);

    this.items = [
      ...this.items,
      ...Array(15 - this.items.length)
        .fill(undefined)
        .map(newItem(this.el)),
    ];

    window.requestAnimationFrame(() => this.loop());
  }

  destroy() {
    this.items.forEach(({ el }) => {
      this.el.removeChild(el);
    });

    this.items = [];
  }
}

const ExportSprite = () => {
  const el = useRef();
  const animation = useRef();

  useEffect(() => {
    animation.current = new ExportAnimation(el.current);

    return () => { animation.current.destroy(); };
  }, [el.current]);

  return (
    <div className="export-sprite" ref={el}>
      <div className="export-sprite__destination" />
    </div>
  );
};

export default ExportSprite;
