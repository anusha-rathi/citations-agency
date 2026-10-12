import { ArrowBigUp, MessageSquare, Sparkles } from "lucide-react";
import type { ReactNode } from "react";

// Reddit-style and AI-answer mockups. Everything rendered here is illustrative; "Tallybird" is a fictional brand.

const card =
  "rounded-3xl border border-line bg-white p-5 text-left shadow-[0_1px_0_rgba(23,23,23,0.04),0_30px_60px_-30px_rgba(23,23,23,0.22)]";

export function Illustrative({ children = "Illustrative example", className = "" }: { children?: ReactNode; className?: string }) {
  return (
    <p className={`flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-muted ${className}`}>
      <span aria-hidden className="size-1.5 shrink-0 rounded-full bg-accent" />
      {children}
    </p>
  );
}

export const Brand = () => (
  <span className="font-semibold underline decoration-accent decoration-2 underline-offset-4">Tallybird</span>
);

export const Cite = ({ n = 1 }: { n?: number }) => (
  <sup className="ml-0.5 rounded bg-lav px-1 py-px font-mono text-[10px] font-semibold text-violet">{n}</sup>
);

export const Skeleton = ({ w }: { w: string }) => (
  <span aria-hidden className="inline-block h-2 rounded-full bg-ink/10 align-middle" style={{ width: w }} />
);

export function RedditPost({
  sub, user, time, title, body, votes, comments, children, className = "",
}: {
  sub: string; user: string; time: string; title: string; body?: string;
  votes: string; comments: string; children?: ReactNode; className?: string;
}) {
  return (
    <article className={`${card} ${className}`}>
      <header className="flex flex-wrap items-center gap-x-2 text-xs text-muted">
        <span aria-hidden className="grid size-6 place-items-center rounded-full bg-accent font-display text-[10px] font-bold text-ink">r/</span>
        <span className="font-semibold text-ink">r/{sub}</span>
        <span>· u/{user} · {time}</span>
      </header>
      <p className="mt-3 font-display text-lg font-semibold leading-snug">{title}</p>
      {body && <p className="mt-1.5 text-sm leading-relaxed text-muted">{body}</p>}
      <div className="mt-3 flex gap-2 text-xs font-medium">
        <span className="flex items-center gap-1 rounded-full bg-paper px-2.5 py-1">
          <ArrowBigUp aria-hidden className="size-4 text-accent" />
          {votes}
        </span>
        <span className="flex items-center gap-1.5 rounded-full bg-paper px-2.5 py-1">
          <MessageSquare aria-hidden className="size-3.5" />
          {comments}
        </span>
      </div>
      {children && <div className="mt-3 space-y-1 border-t border-line pt-3">{children}</div>}
    </article>
  );
}

export function Comment({
  user, time, votes, badge, highlight, children,
}: { user: string; time: string; votes: string; badge?: string; highlight?: boolean; children: ReactNode }) {
  return (
    <div className={`flex gap-2.5 rounded-xl p-2.5 ${highlight ? "bg-accent/[0.07] ring-1 ring-accent/30" : ""}`}>
      <span aria-hidden className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-ink/10 text-[10px] font-bold uppercase">
        {user[0]}
      </span>
      <div className="min-w-0 text-sm">
        <p className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-xs text-muted">
          <span className="font-semibold text-ink">u/{user}</span>· {time}
          {badge && <span className="rounded-full bg-ink px-2 py-0.5 text-[10px] font-medium text-paper">{badge}</span>}
        </p>
        <p className="mt-1 leading-relaxed">{children}</p>
        <p className="mt-1.5 flex items-center gap-1 text-xs text-muted">
          <ArrowBigUp aria-hidden className="size-3.5" />
          {votes}
        </p>
      </div>
    </div>
  );
}

export function AIAnswer({
  query, children, sources, className = "",
}: { query: string; children: ReactNode; sources: string[]; className?: string }) {
  return (
    <article className={`${card} ${className}`}>
      <header className="flex items-center gap-2 text-xs">
        <span aria-hidden className="grid size-6 place-items-center rounded-full bg-lav text-violet">
          <Sparkles className="size-3.5" />
        </span>
        <span className="font-semibold">AI assistant</span>
      </header>
      <p className="ml-auto mt-3 w-fit max-w-[88%] rounded-2xl rounded-br-sm bg-paper px-3.5 py-2 text-sm">{query}</p>
      <div className="mt-3 space-y-2 text-sm leading-relaxed">{children}</div>
      <p className="mt-4 border-t border-line pt-3 font-mono text-[10px] uppercase tracking-widest text-muted">Sources</p>
      <ul className="mt-2 space-y-1.5">
        {sources.map((s, i) => (
          <li key={s} className="flex items-center gap-2 rounded-lg bg-lav/50 px-2.5 py-1.5 text-xs">
            <span className="grid size-4 shrink-0 place-items-center rounded bg-violet text-[10px] font-bold text-white">{i + 1}</span>
            <span className="truncate">{s}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
