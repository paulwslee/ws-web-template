export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-screen-xl px-4 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} GTIRI.ORG — All rights reserved.
      </div>
    </footer>
  );
}
