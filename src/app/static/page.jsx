import React from "react";

export const revalidate = 4;

export default function StaticPage() {
  return <div>StaticPage {Date.now()}</div>;
}
