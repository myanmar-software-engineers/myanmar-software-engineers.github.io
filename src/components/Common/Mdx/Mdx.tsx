"use client";

import { cn } from "@/utils";
import { getMDXComponent } from "mdx-bundler/client";
import React, { useEffect, useMemo, useState } from "react";
import * as ReactDOM from "react-dom";
import * as jsxRuntime from "react/jsx-runtime";
import TitleText from "../TitleText/TitleText";

const components = {
  h1: ({ className, ...rest }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={cn("mt-2 scroll-m-20 text-4xl font-bold tracking-tight")}
      {...rest}
    />
  ),
  h2: ({ className, ...rest }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={cn(
        "mt-10 border-b border-white/10 pb-1 text-3xl font-semibold tracking-tight first:mt-0",
        className
      )}
      {...rest}
    />
  ),
  h3: ({ className, ...rest }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={cn(
        "mt-8 text-3xl font-semibold tracking-tight first:mt-0",
        className
      )}
      {...rest}
    />
  ),
  h4: ({ className, ...rest }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      className={cn(
        "mt-8 text-xl font-semibold tracking-tight first:mt-0",
        className
      )}
      {...rest}
    />
  ),
  h5: ({ className, ...rest }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h5
      className={cn(
        "mt-8 text-lg font-semibold tracking-tight first:mt-0",
        className
      )}
      {...rest}
    />
  ),
  h6: ({ className, ...rest }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h6
      className={cn(
        "mt-8 text-base font-semibold tracking-tight first:mt-0",
        className
      )}
      {...rest}
    />
  ),
  a: ({ className, ...rest }: React.HTMLAttributes<HTMLAnchorElement>) => (
    <a
      className={cn(
        "font-medium underline underline-offset-4 tracking-tight text-prism-cyan hover:text-prism-violet transition-colors",
        className
      )}
      {...rest}
    />
  ),
  p: ({ className, ...rest }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
      {...rest}
    />
  ),
  ul: ({ className, ...rest }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className={cn("my-6 ml-6 list-disc", className)} {...rest} />
  ),
  ol: ({ className, ...rest }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className={cn("my-6 ml-6 list-decimal", className)} {...rest} />
  ),
  li: ({ className, ...rest }: React.HTMLAttributes<HTMLLIElement>) => (
    <li className={cn("mt-2", className)} {...rest} />
  ),
  blockquote: ({
    className,
    ...rest
  }: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className={cn(
        "mt-6 border-l-2 border-prism-violet/40 pl-6 italic text-zinc-400",
        className
      )}
      {...rest}
    />
  ),
  img: ({
    className,
    alt,
    ...rest
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    (<img className={cn("rounded-md border border-white/10", className)} alt={alt} {...rest} />)
  ),
  hr: ({ className, ...rest }: React.HTMLAttributes<HTMLHRElement>) => (
    <hr className={cn("my-4 md:my-8 border-white/10", className)} {...rest} />
  ),
  table: ({ className, ...rest }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cn("w-full", className)} {...rest} />
    </div>
  ),
  tr: ({ className, ...rest }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr className={cn("m-0 border-t border-white/10 p-0 even:bg-white/[0.02]", className)} {...rest} />
  ),
  th: ({
    className,
    ...rest
  }: React.HTMLAttributes<HTMLTableHeaderCellElement>) => (
    <th
      className={cn(
        "border border-white/10 px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...rest}
    />
  ),
  td: ({
    className,
    ...rest
  }: React.HTMLAttributes<HTMLTableDataCellElement>) => (
    <td
      className={cn(
        "border border-white/10 px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...rest}
    />
  ),
  pre: ({ className, ...rest }: React.HTMLAttributes<HTMLPreElement>) => (
    <pre
      className={cn(
        "mb-4 mt-6 overflow-x-auto rounded-lg border border-white/10 bg-surface py-4 px-2",
        className
      )}
      {...rest}
    />
  ),
  code: ({ className, ...rest }: React.HTMLAttributes<HTMLElement>) => (
    <code
      className={cn(
        "relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm",
        className
      )}
      {...rest}
    />
  ),
};

interface MdxProps {
  code: string;
  extraText?: string;
}

/* eslint-disable react-hooks/static-components */
export function Mdx({ code, extraText }: MdxProps) {
  // Use Next.js's React runtime for hooks inside bundled contributor components.
  const Component = useMemo(
    () => getMDXComponent(code, { React, ReactDOM, _jsx_runtime: jsxRuntime }),
    [code],
  );
  const [showExtraText, setShowExtraText] = useState(false);

  useEffect(() => {
    const mdxContainer = document.getElementById("mdx_container");
    setTimeout(() => {
      if (mdxContainer && !mdxContainer.innerHTML) {
        setShowExtraText(true);
      }
    }, 300);
    return () => {};
  }, []);

  return (
    <div className="mdx" id="mdx_container">
      <Component components={components} />
      {showExtraText && !!extraText ? (
        <>
          <TitleText>{extraText}</TitleText>
          <TitleText tag="h2" className="text-sm mt-5">
            Note: The profile owner needs to update their Profile Detail Page
          </TitleText>
        </>
      ) : null}
    </div>
  );
}
