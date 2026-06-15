import "../popupProj.css"

interface PopupProj4Props {
  triggerPopup: boolean;
  handle_triggerPopup: (sect: 'Proj4_popup' ) => void;
}

function PopupProj4({ triggerPopup, handle_triggerPopup }: PopupProj4Props) {
  return(

    <div className="proj_container" style={{opacity: triggerPopup ? '1' : '0', pointerEvents: triggerPopup ? 'auto' : 'none'}} onClick={() => handle_triggerPopup('Proj4_popup')} aria-hidden={!triggerPopup}>
      <div className="proj_content" style={{transform: triggerPopup ? 'translateY(-15px)' : 'translateY(0px)'}}>
        <p style={{paddingLeft:"15%"}}> To be completed: June 15th</p>
      </div>
    </div>

  )


}

export default PopupProj4;