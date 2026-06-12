import "./popupEdu.css"

interface PopupEduProps {
  triggerPopup: boolean;
  handle_triggerPopup: (sect: 'Edu_popup' ) => void;
}


function PopupEdu({ triggerPopup, handle_triggerPopup }: PopupEduProps) {
  return(

    <div className="edu_container" style={{opacity: triggerPopup ? '1' : '0', pointerEvents: triggerPopup ? 'auto' : 'none'}} onClick={() => handle_triggerPopup('Edu_popup')} aria-hidden={!triggerPopup}>
      <div className="edu_content" style={{transform: triggerPopup ? 'translateY(-15px)' : 'translateY(0px)'}}>
        

        <div className="edu_header_container">
          <div className="edu_title_container">
            <p className="edu_cornerT">Education</p>
            <h1 className="edu_title">Bsc in Computing Science</h1>
            <h3 className="edu_subtitle">University of Alberta</h3>
          </div>


          <div className="circ_section_container">
            <svg xmlns="http://www.w3.org/2000/svg" width="85%" height="85%" viewBox="0 0 24 24">
              <path fill="#000" d="m21.45 8.61l-9-4.5a1 1 0 0 0-.89 0l-6 3l-3 1.5l-1 .5a1 1 0 0 0-.55.89v6h2v-5.38l8.55 4.28c.14.07.29.11.45.11s.31-.04.45-.11l9-4.5c.34-.17.55-.52.55-.89s-.21-.72-.55-.89Z" className="b"></path>
              <path fill="#000" d="M12 17c-.46 0-.93-.11-1.34-.32L5 13.85v1.59C5 17.5 8.12 20 12 20s7-2.49 7-4.56v-1.59l-5.66 2.83c-.41.21-.88.32-1.34.32" className="b"></path>
            </svg>
          </div>

          

        </div>


      </div>
    </div>

  )
}

export default PopupEdu;