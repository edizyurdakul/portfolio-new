import React from "react";

interface PageProps {
  children: React.ReactNode;
}

function ContentLayout({ children }: PageProps) {
  return <main className="mx-auto max-w-3xl p-4">{children}</main>;
}

export default ContentLayout;
