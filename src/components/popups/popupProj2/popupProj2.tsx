import "./popupProj2.css"

interface PopupProj2Props {
  triggerPopup: boolean;
  handle_triggerPopup: (sect: 'Proj2_popup' ) => void;
}

function PopupProj2({ triggerPopup, handle_triggerPopup }: PopupProj2Props) {
  return(

    <div className="proj2_container" style={{opacity: triggerPopup ? '1' : '0', pointerEvents: triggerPopup ? 'auto' : 'none'}} onClick={() => handle_triggerPopup('Proj2_popup')} aria-hidden={!triggerPopup}>
      <div className="proj2_content" style={{transform: triggerPopup ? 'translateY(-15px)' : 'translateY(0px)'}}>

      </div>
    </div>

  )


}

export default PopupProj2;