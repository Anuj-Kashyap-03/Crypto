import React from "react";
import { useEffect } from 'react'

export default function LoadScript() {
  useEffect(() => {
    function enableGoogleAdsense() {
      const head = document.getElementsByTagName("head")[0];
      const scriptElement = document.createElement(`script`);
      scriptElement.type = `text/javascript`;
      scriptElement.async;
      scriptElement.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6411701553939136`;
      scriptElement.crossOrigin = "anonymous";
      head.appendChild(scriptElement);
    }
    enableGoogleAdsense();
    console.log("Hi anuj");
  }, []);
  return <></>;
}
