import { Suspense } from "react";

export default function CartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense fallback={<div className="p-6">Loading cart…</div>}>
      {children}
    </Suspense>
  );
}
