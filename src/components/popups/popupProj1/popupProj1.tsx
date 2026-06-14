import "./popupProj1.css"

interface PopupProj1Props {
  triggerPopup: boolean;
  handle_triggerPopup: (sect: 'Proj1_popup' ) => void;
}

function PopupProj1({ triggerPopup, handle_triggerPopup }: PopupProj1Props) {
  return(

    <div className="proj1_container" style={{opacity: triggerPopup ? '1' : '0', pointerEvents: triggerPopup ? 'auto' : 'none'}} onClick={() => handle_triggerPopup('Proj1_popup')}>
      <div className="proj1_content" style={{transform: triggerPopup ? 'translateY(-15px)' : 'translateY(0px)'}} onClick={(e) => e.stopPropagation()}>
        
        <div className="topSection proj_topSection">
          <p>Project</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" viewBox="0 0 20 20" onClick={() => handle_triggerPopup('Proj1_popup')}>
            <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93A10 10 0 0 1 2.93 17.07M11.4 10l2.83-2.83l-1.41-1.41L10 8.59L7.17 5.76L5.76 7.17L8.59 10l-2.83 2.83l1.41 1.41L10 11.41l2.83 2.83l1.41-1.41L11.41 10z"></path>
          </svg>
        </div>



      </div>
    </div>

  )


}

export default PopupProj1;