import { NextRequest, NextResponse } from "next/server";

let requestCount = 0;

export function middleware(req: NextRequest) {
    requestCount++;
    const res = NextResponse.next()
    console.log('request count: ', requestCount)
    return res;
}