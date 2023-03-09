import React, { useEffect } from "react";

export default function Ad() {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);
  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-6411701553939136"
      data-ad-slot="1296348720"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
}
