"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const MENU_LINKS = [
  { path: "/", label: "Home" },
  { path: "/Frieren", label: "Frieren" },
  { path: "/Akaza", label: "Akaza" },
  { path: "/YaeMiko", label: "YaeMiko" },
  { path: "/Tester", label: "Test"}
];

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  // refs
  const rootRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const barRef = useRef<HTMLDivElement | null>(null);
  const linksRef = useRef<HTMLAnchorElement[]>([]);
  const infoColsRef = useRef<HTMLDivElement[]>([]);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  // helper: keep array refs stable
  const setLinkRef = (el: HTMLAnchorElement | null, i: number) => {
    if (el) linksRef.current[i] = el;
  };
  const setInfoRef = (el: HTMLDivElement | null, i: number) => {
    if (el) infoColsRef.current[i] = el;
  };

  // GSAP timeline
  useEffect(() => {
    if (!overlayRef.current) return;

    gsap.set(overlayRef.current, { scaleY: 0, transformOrigin: "top" });
    gsap.set(barRef.current, { y: -24, opacity: 0 });
    gsap.set(linksRef.current, { y: 24, opacity: 0 });
    gsap.set(infoColsRef.current, { y: 16, opacity: 0 });

    const tl = gsap.timeline({ paused: true, defaults: { ease: "power3.out" } });

    tl.to(overlayRef.current, { scaleY: 1, duration: 0.5 })
      .to(barRef.current, { y: 0, opacity: 1, duration: 0.35 }, "-=0.1")
      .to(
        linksRef.current,
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.06 },
        "-=0.05"
      )
      .to(
        infoColsRef.current,
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.05 },
        "-=0.2"
      );

    tlRef.current = tl;
  }, []);

  // open/close side effects: lock scroll + play/reverse timeline
  useEffect(() => {
    if (!tlRef.current) return;
    if (isOpen) {
      document.body.style.overflow = "hidden";
      tlRef.current.play();
    } else {
      tlRef.current.reverse();
      document.body.style.overflow = "";
    }
    // cleanup on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // close on ESC
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  // click outside overlay content closes menu
  const onOverlayBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === overlayRef.current) setIsOpen(false);
  };

  return (
    <div ref={rootRef} className="relative">
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-4 bg-neutral-950 text-white">
        <div className="text-lg font-semibold">
          <Link href="/" className="hover:opacity-80 transition">
            Whiskey.dev
          </Link>
        </div>
        <button
          onClick={() => setIsOpen(true)}
          className="group inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm text-white/90 hover:bg-white/10 transition"
          aria-label="Open menu"
        >
          <span className="tracking-wide">Menu</span>
          <span className="block h-[1px] w-4 bg-white/50 group-hover:w-6 transition-[width] duration-200" />
        </button>
      </div>

      {/* Overlay */}
      <div
        ref={overlayRef}
        onClick={onOverlayBackgroundClick}
        className={[
          "fixed inset-0 z-50 origin-top bg-neutral-950/95 backdrop-blur-md",
          "text-white",
          "will-change-transform will-change-opacity",
          isOpen ? "pointer-events-auto" : "pointer-events-none",
        ].join(" ")}
        aria-hidden={!isOpen}
      >
        {/* overlay bar */}
        <div
          ref={barRef}
          className="flex items-center justify-between px-6 py-5"
        >
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="text-xl font-semibold hover:opacity-80 transition"
          >
            Whiskey.dev
          </Link>

          <button
            onClick={() => setIsOpen(false)}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm hover:bg-white/10 transition"
            aria-label="Close menu"
          >
            <span>Close</span>
            <span className="text-lg leading-none">&times;</span>
          </button>
        </div>

        {/* content */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 md:grid-cols-3 md:gap-16 md:px-10">
          {/* links */}
          <nav className="md:col-span-2">
            <ul className="space-y-2 md:space-y-3">
              {MENU_LINKS.map((item, i) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    ref={(el) => setLinkRef(el, i)}
                    onClick={() => setIsOpen(false)}
                    className={[
                      "block rounded-xl px-3 py-3 transition",
                      "text-3xl font-semibold tracking-tight md:text-5xl",
                      "hover:bg-white/5 hover:pl-4",
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* info / socials */}
          <aside className="space-y-8">
            <div
              ref={(el) => setInfoRef(el, 0)}
              className="rounded-2xl border border-white/10 p-5"
            >
              <h4 className="mb-2 text-sm uppercase tracking-widest text-white/60">
                Follow
              </h4>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#"
                  className="rounded-full border border-white/15 px-3 py-1 text-sm hover:bg-white/10 transition"
                >
                  X / Twitter
                </a>
                <a
                  href="#"
                  className="rounded-full border border-white/15 px-3 py-1 text-sm hover:bg-white/10 transition"
                >
                  GitHub
                </a>
                <a
                  href="#"
                  className="rounded-full border border-white/15 px-3 py-1 text-sm hover:bg-white/10 transition"
                >
                  Instagram
                </a>
              </div>
            </div>

            <div
              ref={(el) => setInfoRef(el, 1)}
              className="rounded-2xl border border-white/10 p-5"
            >
              <h4 className="mb-2 text-sm uppercase tracking-widest text-white/60">
                Contact
              </h4>
              <p className="text-white/80">
                hello@codegrid.dev
                <br />
                Bangkok, TH
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
