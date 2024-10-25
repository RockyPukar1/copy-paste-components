import { throttle } from "lodash";
import { useEffect, useState } from "react";
import { ISection } from "../shared/interfaces/section.interface";

export function useVisibleSection(sections: Array<ISection>) {
  const [visibleSection, setVisibleSection] = useState<string | undefined>();

  function isSectionVisible(elementId: string) {
    const section = document.getElementById(elementId);

    if (section) {
      const sectionPosition = section.getBoundingClientRect();

      const viewPort = {
        height: window.innerHeight,
        width: window.innerWidth,
      };

      return (
        sectionPosition.top >= 0 &&
        sectionPosition.left >= 0 &&
        sectionPosition.bottom <= viewPort.height &&
        sectionPosition.right <= viewPort.width
      );
    }
  }

  function checkVisibility() {
    sections.forEach(({ id }) => {
      if (isSectionVisible(id)) {
        setVisibleSection(id);
      }
    });
  }

  useEffect(() => {
    if (sections) {
      window.addEventListener("scroll", throttle(checkVisibility, 300));
    }
  }, []);
}
