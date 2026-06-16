import "../popupProj.css"
import "../../popup.css"

interface PopupProj4Props {
  triggerPopup: boolean;
  handle_triggerPopup: (sect: 'Proj4_popup' ) => void;
}

function PopupProj4({ triggerPopup, handle_triggerPopup }: PopupProj4Props) {
  return(

    <div className="proj_container" style={{opacity: triggerPopup ? '1' : '0', pointerEvents: triggerPopup ? 'auto' : 'none'}} onClick={() => handle_triggerPopup('Proj4_popup')}>
      <div className="proj_content" style={{transform: triggerPopup ? 'translateY(-12px)' : 'translateY(0px)'}} onClick={(e) => e.stopPropagation()}>
        
        <div className="topSection proj_topSection">
          <p>Project</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" viewBox="0 0 20 20" onClick={() => handle_triggerPopup('Proj4_popup')}>
            <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93A10 10 0 0 1 2.93 17.07M11.4 10l2.83-2.83l-1.41-1.41L10 8.59L7.17 5.76L5.76 7.17L8.59 10l-2.83 2.83l1.41 1.41L10 11.41l2.83 2.83l1.41-1.41L11.41 10z"></path>
          </svg>
        </div>

        <img className="project_img" src="./Project/FoodUpcycling.png"/>

        <div className="project_link_languages_container">

          <div className='language_animate'>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 128 128" className='language'>
              <path fill="#3fb6d3" d="M12.3 64.2L76.3 0h39.4L32.1 83.6zm64 63.8h39.4L81.6 93.9l34.1-34.8H76.3L42.2 93.5z"/>
              <path fill="#27aacd" d="m81.6 93.9l-20-20l-19.4 19.6l19.4 19.6z"/><path fill="#19599a" d="M115.7 128L81.6 93.9l-20 19.2L76.3 128z"/>
              <linearGradient id="deviconFlutter0" x1="59.365" x2="86.825" y1="116.36" y2="99.399" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#1b4e94"/>
              <stop offset=".63" stopColor="#1a5497"/><stop offset="1" stopColor="#195a9b"/></linearGradient><path fill="url(#deviconFlutter0)" d="m61.6 113.1l30.8-8.4l-10.8-10.8z"/>
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" className='language'>
              <path fill="#43a047" d="M22 2h4v4h-4zm0 8v12.13A3.88 3.88 0 0 1 18.13 26H18v4h.13A7.866 7.866 0 0 0 26 22.13V10Zm-8-8h4v20h-4z"/>
              <path fill="#43a047" d="M11.838 12A2.165 2.165 0 0 1 14 14.162v4.955l-.77.257a5.03 5.03 0 0 1-2.812.108A3.19 3.19 0 0 1 8 16.384v-.547A3.84 3.84 0 0 1 11.838 12m0-4A7.84 7.84 0 0 0 4 15.837v.547a7.19 7.19 0 0 0 5.448 6.978a9.03 9.03 0 0 0 5.047-.194L18 22v-7.838A6.16 6.16 0 0 0 11.838 8"/>
            </svg>
          </div>


          <a className="project_link" href='https://cmput401.ca/projects/32e9c1c0-dc63-4236-ad31-33d5f29fc601' target='#blank'>Check Live Site <svg viewBox="0 0 24 24"><path d="M5 17.59L15.59 7H9V5h10v10h-2V8.41L6.41 19z"/></svg></a>
        </div>

        <h1 className="proj_title">FoodUpcycling - ROD</h1>

        <div className="project_info_container">
          <h6>The Project</h6>
          <ul className="proj_list">
            <li>A community volunteer project with the aim of taking farmer donations and distributing them to beneficiaries in need by volunteers</li>
          </ul>
          <h6>Personal Contributions</h6>
          <ul className="proj_list">
            <li>A brownfield project built with Flutter and Django with the built-in SQLite DB as a placeholder for development</li>
            <li>Responsible for some backend logic with Django, sprint planning, and documentation</li>
          </ul>
        </div>

      </div>
    </div>

  )


}

export default PopupProj4;