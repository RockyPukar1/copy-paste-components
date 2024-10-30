import clsx from "clsx";
import { useEffect, useState } from "react";

interface ILeftSidebarProps {
  sections: {
    id: string;
    title: string;
    subTopics?: {
      id: string;
      title: string;
    }[];
  }[];
  activeSection: string;
  onSectionClick: (id: string) => void;
}

export default function LeftSidebar({
  sections,
  activeSection,
  onSectionClick,
}: ILeftSidebarProps) {
  const [expandedSection, setExpandedSection] = useState<string>(
    sections[0].id
  );

  useEffect(() => {
    setExpandedSection(activeSection);
  }, [activeSection]);

  return (
    <div className="w-1/5 h-screen bg-gray-100 p-4 sticky top-0">
      <h2 className="text-lg font-bold mb-4">Documentation</h2>
      <ul className="space-y-2">
        {sections.map((section) => (
          <li key={section.id}>
            <div
              className={clsx(
                "cursor-pointer p-2 rounded",
                activeSection === section.id
                  ? "bg-blue-500 text-white"
                  : "text-gray-700"
              )}
              onClick={() => {
                setExpandedSection(section.id);
                onSectionClick(section.id);
              }}
            >
              {section.title}
            </div>
            {expandedSection &&
              expandedSection == section.id &&
              section.subTopics && (
                <ul className="ml-4 mt-2 space-y-1">
                  {section.subTopics.map((subTopic) => (
                    <li
                      key={subTopic.id}
                      className={clsx(
                        "cursor-pointer p-2 rounded",
                        activeSection === subTopic.id
                          ? "bg-blue-400 text-white"
                          : "text-gray-600"
                      )}
                      onClick={() => onSectionClick(subTopic.id)}
                    >
                      {subTopic.title}
                    </li>
                  ))}
                </ul>
              )}
          </li>
        ))}
      </ul>
    </div>
  );
}
