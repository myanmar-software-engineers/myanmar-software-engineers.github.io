import { cn } from "@/utils";
import { useMDXComponent } from "next-contentlayer/hooks";
import React from "react";

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
        "mt-10 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0",
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
        "font-medium underline underline-offset-4 tracking-tight",
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
        "mt-6 border-l-2 pl-6 italic [&>*]:text-muted-foreground",
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
    <img className={cn("rounded-md border", className)} alt={alt} {...rest} />
  ),
  hr: ({ className, ...rest }: React.HTMLAttributes<HTMLHRElement>) => (
    <hr className={cn("my-4 md:my-8", className)} {...rest} />
  ),
  table: ({ className, ...rest }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cn("w-full", className)} {...rest} />
    </div>
  ),
  tr: ({ className, ...rest }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr className={cn("m-0 border-t p-0 even:bg-muted", className)} {...rest} />
  ),
  th: ({
    className,
    ...rest
  }: React.HTMLAttributes<HTMLTableHeaderCellElement>) => (
    <th
      className={cn(
        "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
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
        "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...rest}
    />
  ),
  pre: ({ className, ...rest }: React.HTMLAttributes<HTMLPreElement>) => (
    <pre
      className={cn(
        "mb-4 mt-6 overflow-x-auto rounded-lg border bg-black py-4 px-2",
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
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <div className="mdx">
      <Component components={components} />
    </div>
  );
}
