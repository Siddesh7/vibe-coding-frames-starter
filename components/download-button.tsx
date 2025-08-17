"use client";

import { Button } from "@/components/ui/button";
import sdk from "@farcaster/frame-sdk";

export default function DownloadButton() {
  const handleDownload = () => {
    const currentUrl = window.location.origin;
    const downloadUrl = `${currentUrl}/api/download/splash`;

    // In Farcaster mini app, direct downloads are blocked by security policies
    // The best we can do is open the download URL in the device's browser
    // where users can save the file
    if (sdk?.actions?.openUrl) {
      sdk.actions.openUrl(downloadUrl);
    } else {
      // Fallback for non-Farcaster environments
      window.open(downloadUrl, "_blank");
    }
  };

  return (
    <Button onClick={handleDownload} variant="outline">
      Save Image
    </Button>
  );
}
