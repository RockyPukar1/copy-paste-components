import { useEffect, useRef } from "react";
import Section from "./Section";

interface IContentProps {
  sections: {
    id: string;
    title: string;
    content: string;
    subTopics?: {
      id: string;
      title: string;
      content: string;
    }[];
  }[];
  setActiveSection: (id: string) => void;
  setActiveHeading: (id: string) => void;
}

export default function Content({
  sections,
  setActiveSection,
  setActiveHeading,
}: IContentProps) {
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            setActiveHeading(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    const sectionElements = document.querySelectorAll(".content-section");
    sectionElements.forEach((section) => observer.current?.observe(section));

    return () => {
      sectionElements.forEach((section) => observer.current?.observe(section));
    };
  }, [setActiveSection, setActiveHeading]);
  console.log(sections[0].subTopics);

  return (
    <div className="w-3/5 p-8 h-screen">
      {sections.map((section) => (
        <div key={section.id}>
          <Section
            id={section.id}
            title={section.title}
            content={section.content}
          />
          {section.subTopics &&
            section.subTopics.map((subTopic) => (
              <Section
                key={subTopic.id}
                id={subTopic.id}
                title={subTopic.title}
                content={subTopic.content}
              />
            ))}
        </div>
      ))}
    </div>
  );
}
