import Link from "next/link";

export default function Navigation() {
  return (
    <nav>
      <Link href="/">
        <a className="nav-logo">
          <img className="nav-logo-img" src="/assets/logo.png" />
        </a>
      </Link>
      <div className="nav-links">
        <Link href="/">
          <a className="nav-link">Raw Data</a>
        </Link>
        <Link href="/">
          <a className="nav-link">Discord</a>
        </Link>
        <Link href="/">
          <a className="nav-link">Log In</a>
        </Link>
      </div>
    </nav>
  );
}
