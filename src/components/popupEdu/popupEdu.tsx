import "./popupEdu.css"

interface PopupEduProps {
  triggerEDU: boolean;
  handle_triggerEDU: () => void;
}

function PopupEdu({ triggerEDU, handle_triggerEDU }: PopupEduProps) {
  return(

    <div className="edu_container" style={{opacity: triggerEDU ? '1' : '0', pointerEvents: triggerEDU ? 'auto' : 'none'}} onClick={handle_triggerEDU} aria-hidden={!triggerEDU}>
      <div className="edu_content" style={{transform: triggerEDU ? 'translateY(-15px)' : 'translateY(0px)'}}>

      </div>
    </div>

  )


}

export default PopupEdu;