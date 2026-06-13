import "./popupEdu.css"

interface PopupEduProps {
  triggerPopup: boolean;
  handle_triggerPopup: (sect: 'Edu_popup' ) => void;
}




function PopupEdu({ triggerPopup, handle_triggerPopup }: PopupEduProps) {

  return(

    <div className="edu_container" style={{opacity: triggerPopup ? '1' : '0', pointerEvents: triggerPopup ? 'auto' : 'none'}}>
      <div className="edu_content" style={{transform: triggerPopup ? 'translateY(-15px)' : 'translateY(0px)'}}>
        
        <div className="edu_topSection">
            <p>Education</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" viewBox="0 0 20 20" onClick={() => handle_triggerPopup('Edu_popup')}>
              <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93A10 10 0 0 1 2.93 17.07M11.4 10l2.83-2.83l-1.41-1.41L10 8.59L7.17 5.76L5.76 7.17L8.59 10l-2.83 2.83l1.41 1.41L10 11.41l2.83 2.83l1.41-1.41L11.41 10z"></path>
            </svg>
        </div>

        <div className="edu_header_container">
          <div className="edu_title_container">
            <h1 className="edu_title">Bsc in Computing Science</h1>
            <h4>University of Alberta</h4>
            <p className="edu_date">Sept 2021 - April 2025</p>
          </div>

          <div className="circ_section_container">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24">
              <path fill="#c22652" d="m21.45 8.61l-9-4.5a1 1 0 0 0-.89 0l-6 3l-3 1.5l-1 .5a1 1 0 0 0-.55.89v6h2v-5.38l8.55 4.28c.14.07.29.11.45.11s.31-.04.45-.11l9-4.5c.34-.17.55-.52.55-.89s-.21-.72-.55-.89Z" className="b"></path>
              <path fill="#8f183a" d="M12 17c-.46 0-.93-.11-1.34-.32L5 13.85v1.59C5 17.5 8.12 20 12 20s7-2.49 7-4.56v-1.59l-5.66 2.83c-.41.21-.88.32-1.34.32" className="b"></path>
            </svg>
          </div>

        </div>

        <p>
          AFAF
        </p>

      </div>
    </div>

  )
}

export default PopupEdu;