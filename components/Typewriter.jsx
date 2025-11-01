'use client'; // For Next.js 13+ App Router

import { useEffect, useRef } from 'react';

export default function Typewriter() {
  const el = useRef(null);

  useEffect(() => {
    const TxtType = function (el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 200;
      this.txt = '';
      this.isDeleting = false;
      this.tick();
    };

    TxtType.prototype.tick = function () {
      const i = this.loopNum % this.toRotate.length;
      const fullTxt = this.toRotate[i];

      this.txt = this.isDeleting
        ? fullTxt.substring(0, this.txt.length - 1)
        : fullTxt.substring(0, this.txt.length + 1);

      this.el.innerHTML = `<span class="wrap">${this.txt}</span>`;

      let delta = 200 - Math.random() * 100;

      if (this.isDeleting) {
        delta /= 2;
      }

      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 10;
      }

      setTimeout(() => {
        this.tick();
      }, delta);
    };

    const element = el.current;
    const toRotate = element.getAttribute('data-type');
    const period = element.getAttribute('data-period');

    if (toRotate) {
      new TxtType(element, JSON.parse(toRotate), period);
    }
  }, []);

  return (
    <h2
      ref={el}
      className="typewrite fw-bold px-2 px-lg-5"
      data-period="2000"
      data-type='[ "IT Consulting Services For Your Business" ]'
       style={{ height: "180px" }}
    >
      <span className="wrap"></span>
    </h2>
  );
}
