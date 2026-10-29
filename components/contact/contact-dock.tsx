"use client";

import { Code2, FileText, Github, Linkedin, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import Dock from "@/components/Dock";
import { portfolio } from "@/lib/portfolio";

const items = [
  { icon: <Linkedin size={18} />, label: "LinkedIn", onClick: () => window.open(portfolio.person.linkedin, "_blank", "noopener,noreferrer") },
  { icon: <Github size={18} />, label: "GitHub", onClick: () => window.open(portfolio.person.github, "_blank", "noopener,noreferrer") },
  { icon: <Code2 size={18} />, label: "LeetCode", onClick: () => window.open(portfolio.person.leetcode, "_blank", "noopener,noreferrer") },
  { icon: <Phone size={18} />, label: "Call Vraj", onClick: () => window.location.assign(portfolio.person.phoneHref) },
  { icon: <FileText size={18} />, label: "Resume", onClick: () => window.open(portfolio.person.resume, "_blank", "noopener,noreferrer") },
];

export function ContactDock() {
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 639px)");
    const update = () => setIsCompact(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  return <Dock items={items} panelHeight={isCompact ? 52 : 62} baseItemSize={isCompact ? 36 : 44} magnification={isCompact ? 44 : 52} dockHeight={isCompact ? 100 : 120} itemGap={isCompact ? 8 : 16} panelPaddingX={isCompact ? 8 : 16} />;
}
