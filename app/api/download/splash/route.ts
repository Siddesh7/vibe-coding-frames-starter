import { NextRequest, NextResponse } from "next/server";
import { readFileSync } from "fs";
import { join } from "path";

export async function GET(request: NextRequest) {
  try {
    // Read the splash.png file from the public directory
    const filePath = join(process.cwd(), "public", "splash.png");
    const fileBuffer = readFileSync(filePath);

    // Create response with proper download headers
    const response = new NextResponse(fileBuffer);

    // Set headers to force download
    response.headers.set("Content-Type", "image/png");
    response.headers.set(
      "Content-Disposition",
      'attachment; filename="splash.png"'
    );
    response.headers.set("Cache-Control", "no-cache");

    return response;
  } catch (error) {
    console.error("Error serving download:", error);
    return new NextResponse("File not found", { status: 404 });
  }
}
