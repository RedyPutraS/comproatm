import React, { useEffect } from "react";

function ComproPdf() {
  useEffect(() => {
    const url = "/pdf/COMPANY-PROFILE-ATM.pdf";
    window.location.href = url;
  }, []);

  return (
    <div>
      <p>The PDF should open in a new tab automatically.</p>
    </div>
  );
}

export default ComproPdf;
