import { useEffect, useRef } from "react";
import "./shortcutCircles.css"
import gsap from "gsap";


interface ShortcutCirclesProps {
  camera_trigger: boolean;

    triggerPopup: {
    Edu_popup: boolean,
    Exp_popup: boolean,
    Proj1_popup: boolean,
    Proj2_popup: boolean,
    Proj3_popup: boolean,
    Proj4_popup: boolean,
  };

  handle_triggerPopup: (sect: 'Edu_popup' | 'Exp_popup' | 'Proj1_popup' | 'Proj2_popup' | 'Proj3_popup' | 'Proj4_popup') => void;
}

function ShortcutCircles({ triggerPopup, camera_trigger, handle_triggerPopup }: ShortcutCirclesProps) {
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

   const anyPopupOpen = Object.values(triggerPopup).some(v => v === true);


  return (
    <div
      ref={containerRef}
      className="shortcut_container"
      style={{ opacity: anyPopupOpen ? "0" : "1", pointerEvents: anyPopupOpen ? "none" : "auto" }}
    >
      <div className="shortcut_circles_container" style={{backgroundColor: camera_trigger ? "rgba(0, 0, 0, 0.1)" : "transparent"}}>
        <span className="circular_shortcut education_shortcut" onClick={() => handle_triggerPopup('Edu_popup')}></span>
        <span className="circular_shortcut proj_shortcut" onClick={() => handle_triggerPopup('Proj1_popup')}></span>
        <span className="circular_shortcut proj_shortcut" onClick={() => handle_triggerPopup('Proj2_popup')}></span>
        <span className="circular_shortcut proj_shortcut" onClick={() => handle_triggerPopup('Proj3_popup')}></span>
        <span className="circular_shortcut proj_shortcut" onClick={() => handle_triggerPopup('Proj4_popup')}></span>
        <span className="circular_shortcut experience_shortcut" onClick={() => handle_triggerPopup('Exp_popup')}></span>
      </div>
    </div>
  );
}

export default ShortcutCircles;