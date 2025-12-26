import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { NextResponse } from 'next/server';

export const CLAUDECODE = 'claude_code';
export const GEMINI = 'gemini';
export const CODEX = 'codex';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function extractApiKeyFromHeaders(headers: Headers): string | null {
  // 取出 authorization 头
  const authHeader = headers.get("authorization") || headers.get("Authorization");
  if (!authHeader) return null;

  // 格式必须是 "Bearer <token>"
  const match = authHeader.match(/^Bearer\s+(.+)$/i);
  if (!match) return null;

  // 返回 token 部分
  return match[1].trim();
}

export function extractGeminiApiKeyFromHeaders(headers: Headers): string | null {
  // 取出 x-goog-api-key 头
  const apiKey = headers.get("x-goog-api-key") || headers.get("X-GOOG-API-KEY");
  if (!apiKey) return null;

  // 返回 API key
  return apiKey.trim();
}

export function currentMonth() {
  const currentDate = new Date();
  const currentMonth = currentDate.toISOString().slice(0, 7);
  return currentMonth;
}

export function currentSubscription(startDate: Date) {
  const today = new Date();
  const diffMs = today.getTime() - startDate.getTime();

  const oneDayMs = 1000 * 60 * 60 * 24;

  const diffDays = Math.floor(diffMs / oneDayMs);

  const cycles = Math.floor(diffDays / 30) + 1;

  const startMonth = startDate.toISOString().slice(0, 7);
  return `${startMonth}-${cycles}`
}

export function currentDate() {
  const currentDate = new Date();
  return currentDate.toISOString().slice(0, 10)
}

export function date30DaysAgo() {
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() - 30);
  return currentDate.toISOString().slice(0, 10);
}

export function formatDate(dateString: string | null) {
  if (!dateString) return "Never";
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}

export function formatTokens(tokens: number | null | undefined) {
  if (tokens === null || tokens === undefined) {
    return '0';
  }
  if (tokens >= 1000000) {
    return `${(tokens / 1000000).toFixed(1)}M`;
  } else if (tokens >= 1000) {
    return `${(tokens / 1000).toFixed(1)}K`;
  }
  return tokens.toString();
}

export async function anthropicTemplateResponse(text: string, status: number = 200) {
  const fakeResponse = {
    id: "msg_test_1",
    type: "message",
    model: "claude-4.0-opus",
    content: [
      {
        type: "text",
        text: text
      }
    ],
    stop_reason: "end_turn",
    stop_sequence: null,
    usage: {
      input_tokens: 5,
      output_tokens: 8
    }
  };

  return NextResponse.json(fakeResponse, {
    status: status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  });
}

export function anthropicCountTokens() {
  const responseText = `{"input_tokens":1}`;

  return new NextResponse(responseText, {
    status: 200,
    headers: {
      'content-type': 'application/json',
    },
  });
}

export async function anthropicHelloWorldResponse() {
  return await anthropicTemplateResponse("Hello! How can I help you with your software engineering tasks today? If you're unexpected to see this, pls check your configure.");
}

export async function anthropicApikeyInvalidResponse() {
  return await anthropicTemplateResponse("Invalid key! Your api-key is invalid or expired");
}

export async function anthropicApikey401Response() {
  return await anthropicTemplateResponse("Unexpected error, pls contact us by email: cfjwlchangji@gmail.com");
}

export async function anthropicApiLimitExceedResponse() {
  return await anthropicTemplateResponse("reach the limit of api-key's quota, consider enlarge the quota: https://codebyai.net/dashboard/api-keys");
}

export async function anthropicUserLimitExceedResponse() {
  return await anthropicTemplateResponse("reach the limit of user's quota, consider top up: https://codebyai.net/dashboard/profile?topup=true");
}

