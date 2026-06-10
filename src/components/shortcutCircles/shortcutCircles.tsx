import { useEffect, useRef } from "react";
import "./shortcutCircles.css"
import gsap from "gsap";


interface ShortcutCirclesProps {
  triggerEDU: boolean;
  camera_trigger: boolean;
  handle_triggerEDU: () => void;
}

function ShortcutCircles({ triggerEDU, camera_trigger, handle_triggerEDU }: ShortcutCirclesProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if(camera_trigger){
       gsap.to(".circular_shortcut", {
        y: 0,
        stagger: 0.2,
        duration: 1.3,
        ease: "back.out(5)"
      });
    }
  }, [camera_trigger]);

  return (
    <div
      ref={containerRef}
      className="shortcut_container"
      style={{ opacity: triggerEDU ? "0" : "1", pointerEvents: triggerEDU ? "none" : "auto" }}
    >
      <span className="circular_shortcut education_shortcut" onClick={handle_triggerEDU}></span>
      <span className="circular_shortcut proj_shortcut" onClick={handle_triggerEDU}></span>
      <span className="circular_shortcut proj_shortcut" onClick={handle_triggerEDU}></span>
      <span className="circular_shortcut proj_shortcut" onClick={handle_triggerEDU}></span>
      <span className="circular_shortcut proj_shortcut" onClick={handle_triggerEDU}></span>
      <span className="circular_shortcut experience_shortcut" onClick={handle_triggerEDU}></span>
    </div>
  );
}

export default ShortcutCircles;