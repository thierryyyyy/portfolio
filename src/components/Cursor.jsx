import { useEffect, useRef } from "react";

export default function Cursor() {
  const curRef = useRef();
  const ringRef = useRef();
  let rx = 0, ry = 0;

  useEffect(() => {
    let mx = 0, my = 0;
    const onMove = (e) => {
      mx = e.clientX; my = e.clientY;
      if (curRef.current) { curRef.current.style.left = mx + "px"; curRef.current.style.top = my + "px"; }
    };
    document.addEventListener("mousemove", onMove);

    let rafId;
    const animate = () => {
      rx += (mx - rx) * 0.12; ry += (my - ry) * 0.12;
      if (ringRef.current) { ringRef.current.style.left = rx + "px"; ringRef.current.style.top = ry + "px"; }
      rafId = requestAnimationFrame(animate);
    };
    animate();

    const grow = () => {
      if (!curRef.current || !ringRef.current) return;
      curRef.current.style.width = "16px"; curRef.current.style.height = "16px";
      ringRef.current.style.width = "52px"; ringRef.current.style.height = "52px";
      ringRef.current.style.borderColor = "rgba(255,95,31,.7)";
    };
    const shrink = () => {
      if (!curRef.current || !ringRef.current) return;
      curRef.current.style.width = "10px"; curRef.current.style.height = "10px";
      ringRef.current.style.width = "36px"; ringRef.current.style.height = "36px";
      ringRef.current.style.borderColor = "rgba(255,95,31,.4)";
    };
    document.querySelectorAll("a, button, .clickable").forEach(el => {
      el.addEventListener("mouseenter", grow);
      el.addEventListener("mouseleave", shrink);
    });

    return () => { document.removeEventListener("mousemove", onMove); cancelAnimationFrame(rafId); };
  }, []);

  return (
    <>
      <div ref={curRef} className="fixed pointer-events-none z-[9999] rounded-full bg-orange"
        style={{ width: 10, height: 10, transform: "translate(-50%,-50%)", transition: "width .25s, height .25s" }} />
      <div ref={ringRef} className="fixed pointer-events-none z-[9998] rounded-full border"
        style={{ width: 36, height: 36, transform: "translate(-50%,-50%)", borderColor: "rgba(255,95,31,.4)", transition: "width .25s, height .25s, border-color .25s" }} />
    </>
  );
}
