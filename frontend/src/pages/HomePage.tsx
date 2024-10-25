import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-2">
      <Link to="/components/filter/with-dropdown">Filter With Dropdown</Link>
      <Link to="/components/navigate/page">Navigate Page</Link>
      <Link to="/components/navigate/section">Navigate Section</Link>
      <Link to="/components/breadcrumb">Breadcrumb</Link>
      <Link to="/components/countdown">Countdown</Link>
      <Link to="/components/infinite-scrolling">Infinite Scrolling</Link>
    </div>
  );
}
