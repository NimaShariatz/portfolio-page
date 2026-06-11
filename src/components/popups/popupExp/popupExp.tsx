import "./popupExp.css"

interface PopupExpProps {
  triggerPopup: boolean;
  handle_triggerPopup: (sect: 'Exp_popup' ) => void;
}

function PopupExp({ triggerPopup, handle_triggerPopup }: PopupExpProps) {
  return(

    <div className="exp_container" style={{opacity: triggerPopup ? '1' : '0', pointerEvents: triggerPopup ? 'auto' : 'none'}} onClick={() => handle_triggerPopup('Exp_popup')} aria-hidden={!triggerPopup}>
      <div className="exp_content" style={{transform: triggerPopup ? 'translateY(-15px)' : 'translateY(0px)'}}>
        <p style={{paddingLeft:"15%"}}> To be completed: June 13th</p>
      </div>
    </div>

  )


}

export default PopupExp;