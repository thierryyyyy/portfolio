import { useState, useEffect, useRef, useCallback } from "react";

export default function Cursor() {
  const curRef = useRef();
  const ringRef = useRef();
  const rxRef = useRef(0);
  const ryRef = useRef(0);
  const mxRef = useRef(0);
  const myRef = useRef(0);
  const rafRef = useRef(null);
  const isHoveringRef = useRef(false);

  const grow = useCallback(() => {
    if (!curRef.current || !ringRef.current) return;
    curRef.current.style.width = "16px";
    curRef.current.style.height = "16px";
    ringRef.current.style.width = "52px";
    ringRef.current.style.height = "52px";
    ringRef.current.style.borderColor = "rgba(255,95,31,.7)";
    isHoveringRef.current = true;
  }, []);

  const shrink = useCallback(() => {
    if (!curRef.current || !ringRef.current) return;
    curRef.current.style.width = "10px";
    curRef.current.style.height = "10px";
    ringRef.current.style.width = "36px";
    ringRef.current.style.height = "36px";
    ringRef.current.style.borderColor = "rgba(255,95,31,.4)";
    isHoveringRef.current = false;
  }, []);

  useEffect(() => {
    const onMove = (e) => {
      mxRef.current = e.clientX;
      myRef.current = e.clientY;
      if (curRef.current) {
        curRef.current.style.left = mxRef.current + "px";
        curRef.current.style.top = myRef.current + "px";
      }
    };
    document.addEventListener("mousemove", onMove);

    let running = true;
    const animate = () => {
      if (!running) return;
      rxRef.current += (mxRef.current - rxRef.current) * 0.12;
      ryRef.current += (myRef.current - ryRef.current) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = rxRef.current + "px";
        ringRef.current.style.top = ryRef.current + "px";
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    const bindHoverElements = () => {
      document.querySelectorAll("a, button, .clickable").forEach((el) => {
        el.removeEventListener("mouseenter", grow);
        el.removeEventListener("mouseleave", shrink);
        el.addEventListener("mouseenter", grow);
        el.addEventListener("mouseleave", shrink);
      });
    };
    bindHoverElements();
    const observer = new MutationObserver(bindHoverElements);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      running = false;
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
      observer.disconnect();
      document.querySelectorAll("a, button, .clickable").forEach((el) => {
        el.removeEventListener("mouseenter", grow);
        el.removeEventListener("mouseleave", shrink);
      });
    };
  }, [grow, shrink]);

  return (
    <>
      <div
        ref={curRef}
        className="fixed pointer-events-none z-[9999] rounded-full bg-orange max-md:hidden"
        style={{ width: 10, height: 10, transform: "translate(-50%,-50%)", transition: "width .25s, height .25s" }}
      />
      <div
        ref={ringRef}
        className="fixed pointer-events-none z-[9998] rounded-full border max-md:hidden"
        style={{ width: 36, height: 36, transform: "translate(-50%,-50%)", borderColor: "rgba(255,95,31,.4)", transition: "width .25s, height .25s, border-color .25s" }}
      />
    </>
  );
}
