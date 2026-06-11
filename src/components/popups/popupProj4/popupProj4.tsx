import "./popupProj4.css"

interface PopupProj4Props {
  triggerPopup: boolean;
  handle_triggerPopup: (sect: 'Proj4_popup' ) => void;
}

function PopupProj4({ triggerPopup, handle_triggerPopup }: PopupProj4Props) {
  return(

    <div className="proj4_container" style={{opacity: triggerPopup ? '1' : '0', pointerEvents: triggerPopup ? 'auto' : 'none'}} onClick={() => handle_triggerPopup('Proj4_popup')} aria-hidden={!triggerPopup}>
      <div className="proj4_content" style={{transform: triggerPopup ? 'translateY(-15px)' : 'translateY(0px)'}}>

      </div>
    </div>

  )


}

export default PopupProj4;