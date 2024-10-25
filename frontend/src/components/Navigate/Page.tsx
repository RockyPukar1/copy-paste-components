import { Link } from "react-router-dom";

export default function NavigatePage() {
  return (
    <div>
      <p>Page</p>
      <div className="flex justify-between">
      <Link to="#" className="shadow-md p-4 absolute left-4 bottom-4">Previous Page</Link>
      <Link to="#" className="shadow-md p-4 absolute right-4 bottom-4">Next Page</Link>
    </div>
    </div>
  );
}
