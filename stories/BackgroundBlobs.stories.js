/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import '../src/styles/_all.scss';

import * as blobs2 from "blobs/v2";
import { interpolate } from "flubber";
import { random } from 'lodash';
import Canvas from '../src/components/Canvas';

const randomBetween = (min, max) => random(min, max);

const gradients = [
  ['rgb(237,0,140)', 'rgb(226,33,91)'],
  ['#00c9ff', '#92fe9d'],
  ['#fc466b', '#3f5efb'],
  ['#d53369', '#daae51'],
  ['#3f2b96', '#a8c0ff'],
  ['rgb(0, 201, 162)', 'rgb(0, 160, 129)'],
  ['rgb(107, 114, 236)', 'rgb(58, 58, 117)'],
  ['rgb(242, 183, 0)', 'rgb(247,137,30)'],
  ['rgb(15, 178, 226)', 'rgb(15, 112, 255)'],
  // ['rgb(242, 246, 247)', 'rgb(112, 191, 84)'],
  ['rgb(45, 41, 85)', 'rgb(58,58,117)'],
];

class NCBlob {
  constructor(layer) {
    this.layer = layer;

    const speeds = {
      1: randomBetween(0.2, 0.35),
      2: randomBetween(0.1, 0.2),
      3: 0.1,
    };

    console.log("Constructing blob");
    this.speed = speeds[layer];
    this.angle = (randomBetween(45, 45) * Math.PI) / 180;
    this.animateForward = true;
    this.gradient = gradients[randomBetween(0, gradients.length - 1)];
    this.velocityX = Math.sin(this.angle) * this.speed;
    this.velocityY = Math.cos(this.angle) * this.speed;
  }

  updatePosition(ctx, time) {
    // if (!this.positionX || this.positionY) {
    //   return;
    // }

    const timeInSeconds = time / 10;

    if (!this.lastUpdate) { this.lastUpdate = timeInSeconds; }
    const timeDelta = timeInSeconds - this.lastUpdate || 1;

    this.lastUpdate = timeInSeconds;

    // Update position relative to time
    this.positionX += this.velocityX * timeDelta;
    this.positionY += this.velocityY * timeDelta;

    if (this.positionY + this.size < 0) {
      this.gradient = gradients[randomBetween(0, gradients.length - 1)];
      this.positionY = this.canvasHeight;
    }

    if (this.positionX + this.size < 0) {
      this.gradient = gradients[randomBetween(0, gradients.length - 1)];
      this.positionX = this.canvasWidth;
    }

    if (this.positionY > this.canvasHeight) {
      this.gradient = gradients[randomBetween(0, gradients.length - 1)];
      this.positionY = -this.size;
    }

    if (this.positionX > this.canvasWidth) {
      this.gradient = gradients[randomBetween(0, gradients.length - 1)];
      this.positionX = -this.size;
    }
  }

  invert(number) {
    return this.animateForward ? number : (number * -1) + 1;
  }

  animationPosition(time) {
    const duration = 30000; // some number of ms?

    // Start
    if (!this.startFrameTime) {
      this.startFrameTime = time;
      this.endFrameTime = time + duration;
      return this.invert(0);
    }

    if (time > this.endFrameTime) {
      this.startFrameTime = time;
      this.endFrameTime = time + duration;
      this.animateForward = !this.animateForward;
    }

    return this.invert((time - this.startFrameTime)
    / (this.endFrameTime - this.startFrameTime));
  }

  initialize(ctx) {
    const { devicePixelRatio } = window;

    this.canvasWidth = ctx.canvas.width / devicePixelRatio;
    this.canvasHeight = ctx.canvas.height / devicePixelRatio;

    const sizes = {
      1: randomBetween(100, 300),
      2: randomBetween(this.canvasWidth * 0.4, this.canvasWidth * 0.6),
      3: randomBetween(this.canvasWidth * 0.8, this.canvasWidth),
    };

    this.size = sizes[this.layer];

    this.positionX = randomBetween(0 - (this.size / 4), this.canvasWidth + (this.size / 4));
    this.positionY = randomBetween(0 - (this.size / 4), this.canvasHeight + (this.size / 4));

    this.shape = blobs2.svgPath({
      seed: Math.random(),
      extraPoints: 8,
      randomness: 8,
      size: this.size,
    });
    this.shape2 = blobs2.svgPath({
      seed: Math.random(),
      extraPoints: 8,
      randomness: 8,
      size: this.size,
    });
    this.interpolator = interpolate(this.shape, this.shape2);
  }

  render(ctx, time) {
    if (!this.size) {
      this.initialize(ctx);
    }

    this.updatePosition(ctx, time);

    // Debug rectangle
    // ctx.beginPath();
    // ctx.rect(this.positionX, this.positionY, this.size, this.size);
    // ctx.stroke();

    // Create gradient
    const grd = ctx.createLinearGradient(0, 0, this.size, 0);
    grd.addColorStop(0, this.gradient[0]);
    grd.addColorStop(1, this.gradient[1]);
    ctx.fillStyle = grd;
    // ctx.fillStyle = this.gradient[0];

    // Render
    // const p = new Path2D(this.shape);
    const t = this.animationPosition(time);
    const p = new Path2D(this.interpolator(t));

    ctx.save();
    ctx.translate(this.positionX, this.positionY);
    ctx.fill(p);
    ctx.restore();
  }
}

const second = (number) => (1000 / 60) * number;
const duration = (seconds) => frameCount / second(seconds);

const blobs = [
  [
    new NCBlob(3),
    new NCBlob(3),
    new NCBlob(3),
    new NCBlob(3),
  ],
  [
    new NCBlob(2),
    new NCBlob(2),
    new NCBlob(2),
  ],
  [
    new NCBlob(1),
    new NCBlob(1),
    new NCBlob(1),
    new NCBlob(1),
  ],
];

console.log(blobs);

const draw = (ctx, time, canvas) => {
  ctx.globalCompositeOperation = 'screen';
  // ctx.globalAlpha = 0.75;
  blobs.forEach((layer) => layer.forEach((blob) => blob.render(ctx, time)));
};

const requiredProps = {
  draw,
};

export default { title: 'Art/Background Blobs' };

export const normal = () => (
  <div
    style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
  >
    <Canvas draw={draw} />
  </div>
);
