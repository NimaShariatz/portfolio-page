import "./popupProj1.css"

interface PopupProj1Props {
  triggerPopup: boolean;
  handle_triggerPopup: (sect: 'Proj1_popup' ) => void;
}

function PopupProj1({ triggerPopup, handle_triggerPopup }: PopupProj1Props) {
  return(

    <div className="proj1_container" style={{opacity: triggerPopup ? '1' : '0', pointerEvents: triggerPopup ? 'auto' : 'none'}} onClick={() => handle_triggerPopup('Proj1_popup')}>
      <div className="proj1_content" style={{transform: triggerPopup ? 'translateY(-15px)' : 'translateY(0px)'}} onClick={(e) => e.stopPropagation()}>
        

        <p style={{paddingLeft:"15%"}}> To be completed: June 14th</p>
      </div>
    </div>

  )


}

export default PopupProj1;