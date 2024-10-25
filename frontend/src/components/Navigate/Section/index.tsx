import { useRef, useState } from "react";

export default function NavigateSection() {
  const [activeSection, setActiveSection] = useState(null);
  const observer = useRef(null);

  return (
    <div>
      <p>Section</p>
      <div>
        
      </div>
    </div>
  );
}
