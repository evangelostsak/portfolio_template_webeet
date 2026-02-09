"use client";

import { useEffect, useState } from 'react';

type Props = {
  pdfPath?: string;
  version?: string;
  downloadLabel?: string;
};

export function ResumeActions({ pdfPath = '/files/resume.pdf', version = 'v2026.02', downloadLabel = 'Download' }: Props) {
  const [size, setSize] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [tooltip, setTooltip] = useState<string | null>(null);

  useEffect(() => {
    let aborted = false;
    // Attempt to fetch HEAD to get content-length (works locally if served statically)
    fetch(pdfPath, { method: 'HEAD' })
      .then(r => {
        if (aborted) return;
        const len = r.headers.get('content-length');
        if (len) {
          const kb = (parseInt(len, 10) / 1024).toFixed(1);
          setSize(`${kb} KB`);
        }
      })
      .catch(() => {});
    return () => { aborted = true; };
  }, [pdfPath]);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.origin + pdfPath);
      setCopied(true);
      setTooltip('Copied PDF link');
      setTimeout(() => { setCopied(false); setTooltip(null); }, 1800);
    } catch {
      setTooltip('Copy failed');
      setTimeout(() => setTooltip(null), 1800);
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-2">
      <a
        href={pdfPath}
        download
        className="inline-flex items-center gap-1 rounded-lg px-3 py-1.5 bg-brand text-white hover:bg-brand-dark active:opacity-90 text-xs sm:text-sm transition-colors"
        aria-label="Download resume PDF"
      >
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
  <span>{downloadLabel}</span>
        {size && <span className="hidden sm:inline text-white/80">({size})</span>}
      </a>
      <a
        href={pdfPath}
        target="_blank"
        rel="noreferrer noopener"
        className="inline-flex items-center gap-1 rounded-lg px-3 py-1.5 border border-brand/40 text-brand hover:bg-brand/10 active:bg-brand/20 text-xs sm:text-sm transition-colors"
        aria-label="Open resume PDF in new tab"
      >
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3h7v7" /><path d="M10 14 21 3" /><path d="M5 10v11h11" /></svg>
        <span>Open</span>
      </a>
      <button
        type="button"
        onClick={copyLink}
        className="relative inline-flex items-center gap-1 rounded-lg px-3 py-1.5 border border-neutral-300 dark:border-neutral-700 text-xs sm:text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
        aria-label="Copy direct resume link"
      >
        {copied ? (
          <svg className="w-4 h-4 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
        ) : (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
        )}
        <span>{copied ? 'Copied' : 'Copy Link'}</span>
        {tooltip && (
          <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] px-2 py-1 rounded bg-neutral-900 text-white dark:bg-neutral-700 shadow">
            {tooltip}
          </span>
        )}
      </button>
      <span className="ml-1 text-[10px] sm:text-xs px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 tracking-wide font-medium text-neutral-600 dark:text-neutral-300">
        {version}
      </span>
    </div>
  );
}
