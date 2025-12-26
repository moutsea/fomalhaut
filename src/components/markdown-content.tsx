import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import Image from "next/image";
import type { CSSProperties } from "react";
import { CopyCodeButton } from "@/components/copy-code-button";

interface MarkdownContentProps {
  content: string;
  className?: string;
}

type CodeBlockWithLineNumbersProps = {
  language: string;
  children: string | string[];
};

type MarkdownImgProps = {
  src?: string | null;
  alt?: string;
  className?: string;
  style?: CSSProperties;
  width?: number | string;
  height?: number | string;
};

export function MarkdownImg({ src, alt = "", className, style, width, height }: MarkdownImgProps) {
  if (!src) return null;

  const resolvedWidth = typeof width === "string" ? parseInt(width, 10) || 1200 : width ?? 1200;
  const resolvedHeight = typeof height === "string" ? parseInt(height, 10) || 800 : height ?? 800;

  return (
    <span className="my-6 flex justify-center">
      <Image
        src={src}
        alt={alt}
        width={resolvedWidth}
        height={resolvedHeight}
        className={`w-auto max-w-full rounded-lg object-contain shadow-md ${className ?? ""}`}
        style={{ maxHeight: 600, ...style }}
        sizes="100vw"
      />
    </span>
  );
}

function CodeBlockWithLineNumbers({ language, children }: CodeBlockWithLineNumbersProps) {
  const codeString = String(children).replace(/\n$/, "");
  const lines = codeString.split("\n");

  return (
    <div className="relative mb-4 ml-2">
      <CopyCodeButton code={codeString} />
      <div className="overflow-x-auto rounded-lg bg-gray-900 py-3">
        <table className="w-full">
          <tbody>
            {lines.map((line, index) => (
              <tr key={index} className="group hover:bg-gray-800">
                <td className="sticky left-0 w-12 select-none bg-gray-900 px-4 text-right text-sm text-gray-500 group-hover:bg-gray-800">
                  {index + 1}
                </td>
                <td className="py-0 text-left">
                  <SyntaxHighlighter
                    style={{
                      ...oneDark,
                      'pre[class*="language-"]': {
                        ...oneDark['pre[class*="language-"]'],
                        background: 'transparent',
                        margin: 0,
                        padding: 0,
                        fontSize: '0.875rem',
                        lineHeight: '1.25rem',
                      },
                      'code[class*="language-"]': {
                        ...oneDark['code[class*="language-"]'],
                        background: 'transparent',
                        padding: 0,
                      },
                    }}
                    language={language}
                    PreTag="pre"
                    className="m-0 p-0"
                  >
                    {line || " "}
                  </SyntaxHighlighter>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function MarkdownContent({ content, className }: MarkdownContentProps) {
  const renderers = {
    h1: ({ children }) => (
      <h1 className="mb-8 border-b border-border pb-6 text-4xl font-bold text-foreground">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="mt-8 border-b border-border pb-4 text-3xl font-semibold text-foreground">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-6 text-2xl font-semibold text-foreground">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="mt-4 text-xl font-semibold text-foreground">{children}</h4>
    ),
    p: ({ children }) => (
      <p className="mb-4 text-base leading-7 text-muted-foreground">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="mb-4 list-disc space-y-2 pl-8 text-muted-foreground">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="mb-4 list-decimal space-y-2 pl-8 text-muted-foreground">{children}</ol>
    ),
    li: ({ children }) => <li className="leading-7 pl-1">{children}</li>,
    blockquote: ({ children }) => (
      <blockquote className="mb-4 ml-2 rounded-r-lg border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-900/20 py-3 pl-6 italic text-muted-foreground">
        {children}
      </blockquote>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-blue-600 dark:text-blue-400 underline transition-colors duration-200 hover:text-blue-800 dark:hover:text-blue-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
    strong: ({ children }) => (
      <strong className="font-semibold text-foreground">{children}</strong>
    ),
    em: ({ children }) => <em className="italic text-foreground">{children}</em>,
    hr: () => <hr className="my-8 border-border" />,
    table: ({ children }) => (
      <div className="mb-4 ml-2 overflow-x-auto">
        <table className="min-w-full border-collapse border border-border">
          {children}
        </table>
      </div>
    ),
    th: ({ children }) => (
      <th className="border border-border bg-muted/50 px-4 py-2 text-left font-semibold text-foreground">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="border border-border px-4 py-2 text-muted-foreground">{children}</td>
    ),
    img: ({ src, alt, ...props }) => (
      <MarkdownImg src={typeof src === "string" ? src : undefined} alt={alt ?? ""} {...props} />
    ),
    code: ({ className, children, ...props }) => {
      const match = /language-(\w+)/.exec(className || "");
      const inline = !(className && match);

      if (!inline && match) {
        return (
          <CodeBlockWithLineNumbers language={match[1]}>
            {children as string | string[]}
          </CodeBlockWithLineNumbers>
        );
      }

      return (
        <code
          className={`${className ?? ""} rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-red-600 dark:text-red-400`}
          {...props}
        >
          {children}
        </code>
      );
    },
  } satisfies Components;

  return (
    <div className={`max-w-none space-y-6 text-foreground ${className ?? ""}`}>
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={renderers}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
