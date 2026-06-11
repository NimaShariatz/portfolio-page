import "./popupEdu.css"

interface PopupEduProps {
  triggerPopup: boolean;
  handle_triggerPopup: (sect: 'Edu_popup' ) => void;
}

function PopupEdu({ triggerPopup, handle_triggerPopup }: PopupEduProps) {
  return(

    <div className="edu_container" style={{opacity: triggerPopup ? '1' : '0', pointerEvents: triggerPopup ? 'auto' : 'none'}} onClick={() => handle_triggerPopup('Edu_popup')} aria-hidden={!triggerPopup}>
      <div className="edu_content" style={{transform: triggerPopup ? 'translateY(-15px)' : 'translateY(0px)'}}>
        <p style={{paddingLeft:"15%"}}> To be completed: June 12th</p>
      </div>
    </div>

  )


}

export default PopupEdu;