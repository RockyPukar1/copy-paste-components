import clsx from "clsx";

interface RightSidebar {
  headings: {
    id: string;
    title: string;
  }[];
  activeHeading: string;
  onHeadingClick: (id: string) => void;
}

export default function RightSidebar({
  headings,
  activeHeading,
  onHeadingClick,
}: RightSidebar) {
  return (
    <div className="w-1/5 h-screen bg-gray-50 p-4 top-0 overflow-y-auto border-l border-gray-200 sticky">
      <h2 className="">On This Page</h2>
      <ul className="space-y-2">
        {headings.map((heading) => (
          <li
            key={heading.id}
            className={clsx(
              "cursor-pointer p-2 rounded",
              activeHeading === heading.id
                ? "bg-blue-500 text-white"
                : "text-gray-700"
            )}
            onClick={() => onHeadingClick(heading.id)}
          >
            {heading.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
