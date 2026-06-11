import "./popupProj1.css"

interface PopupProj1Props {
  triggerPopup: boolean;
  handle_triggerPopup: (sect: 'Proj1_popup' ) => void;
}

function PopupProj1({ triggerPopup, handle_triggerPopup }: PopupProj1Props) {
  return(

    <div className="proj1_container" style={{opacity: triggerPopup ? '1' : '0', pointerEvents: triggerPopup ? 'auto' : 'none'}} onClick={() => handle_triggerPopup('Proj1_popup')} aria-hidden={!triggerPopup}>
      <div className="proj1_content" style={{transform: triggerPopup ? 'translateY(-15px)' : 'translateY(0px)'}}>

      </div>
    </div>

  )


}

export default PopupProj1;