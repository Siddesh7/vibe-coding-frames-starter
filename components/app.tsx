"use client";

import { useEffect, useState } from "react";
import sdk from "@farcaster/frame-sdk";

import WalletConnector from "./wallet-connector";
import DownloadButton from "./download-button";

export default function App() {
  const [isSDKLoaded, setIsSDKLoaded] = useState(false);
  const [farcasterUserContext, setFarcasterUserContext] = useState<any>();

  useEffect(() => {
    const load = async () => {
      setFarcasterUserContext(await sdk.context);
      sdk.actions.ready();
    };
    if (sdk && !isSDKLoaded) {
      setIsSDKLoaded(true);
      load();
    }
  }, [isSDKLoaded]);

  return (
    <div>
      <p>we vibe code</p>
      <WalletConnector />
      <DownloadButton />
    </div>
  );
}
