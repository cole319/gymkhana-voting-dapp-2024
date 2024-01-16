import Link from "next/link";

export default function Default() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <h1>Please Connect Wallet to Continue</h1>
      <Link href="/">Go back to homepage</Link>
    </div>
  );
}
