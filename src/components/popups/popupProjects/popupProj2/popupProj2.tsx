import "../popupProj.css"
import "../../popup.css"

interface PopupProj2Props {
  triggerPopup: boolean;
  handle_triggerPopup: (sect: 'Proj2_popup' ) => void;
}

function PopupProj2({ triggerPopup, handle_triggerPopup }: PopupProj2Props) {
  return(

    <div className="proj_container" style={{opacity: triggerPopup ? '1' : '0', pointerEvents: triggerPopup ? 'auto' : 'none'}} onClick={() => handle_triggerPopup('Proj2_popup')}>
      <div className="proj_content" style={{transform: triggerPopup ? 'translateY(-12px)' : 'translateY(0px)'}} onClick={(e) => e.stopPropagation()}>
        
        <div className="topSection proj_topSection">
          <p>Project</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" viewBox="0 0 20 20" onClick={() => handle_triggerPopup('Proj2_popup')}>
            <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93A10 10 0 0 1 2.93 17.07M11.4 10l2.83-2.83l-1.41-1.41L10 8.59L7.17 5.76L5.76 7.17L8.59 10l-2.83 2.83l1.41 1.41L10 11.41l2.83 2.83l1.41-1.41L11.41 10z"></path>
          </svg>
        </div>

        <img className="project_img" src="./Project/ImagineCities.png"/>

        <div className="project_link_languages_container">

          <div className='language_animate'>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" className='language'>
              <path fill="#43a047" d="M22 2h4v4h-4zm0 8v12.13A3.88 3.88 0 0 1 18.13 26H18v4h.13A7.866 7.866 0 0 0 26 22.13V10Zm-8-8h4v20h-4z"/>
              <path fill="#43a047" d="M11.838 12A2.165 2.165 0 0 1 14 14.162v4.955l-.77.257a5.03 5.03 0 0 1-2.812.108A3.19 3.19 0 0 1 8 16.384v-.547A3.84 3.84 0 0 1 11.838 12m0-4A7.84 7.84 0 0 0 4 15.837v.547a7.19 7.19 0 0 0 5.448 6.978a9.03 9.03 0 0 0 5.047-.194L18 22v-7.838A6.16 6.16 0 0 0 11.838 8"/>
            </svg>

            
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" className='language' style={{paddingTop: "6px", zIndex:"2"}}><path fill="#00bcd4" d="M16 12c7.444 0 12 
              2.59 12 4s-4.556 4-12 4s-12-2.59-12-4s4.556-4 12-4m0-2c-7.732 0-14 2.686-14 6s6.268 6 14 6s14-2.686 14-6s-6.268-6-14-6"/>
              <path fill="#00bcd4" d="M16 
              14a2 2 0 1 0 2 2a2 2 0 0 0-2-2"/><path fill="#00bcd4" d="M10.458 5.507c2.017 0 5.937 3.177 9.006 8.493c3.722 6.447 3.757 11.687 2.536 12.392a.9.9 0 0 
              1-.457.1c-2.017 0-5.938-3.176-9.007-8.492C8.814 11.553 8.779 6.313 10 5.608a.9.9 0 0 1 .458-.1m-.001-2A2.87 2.87 0 0 0 9 3.875C6.13 5.532 6.938 12.304 
              10.804 19c3.284 5.69 7.72 9.493 10.74 9.493A2.87 2.87 0 0 0 23 28.124c2.87-1.656 2.062-8.428-1.804-15.124c-3.284-5.69-7.72-9.493-10.74-9.493Z"/>
              <path fill="#00bcd4" d="M21.543 5.507a.9.9 0 0 1 .457.1c1.221.706 1.186 5.946-2.536 12.393c-3.07 5.316-6.99 8.493-9.007 8.493a.9.9 0 0 
              1-.457-.1C8.779 25.686 8.814 20.446 12.536 14c3.07-5.316 6.99-8.493 9.007-8.493m0-2c-3.02 0-7.455 3.804-10.74 9.493C6.939 19.696 6.13 26.468 
              9 28.124a2.87 2.87 0 0 0 
              1.457.369c3.02 0 7.455-3.804 10.74-9.493C25.061 12.304 25.87 5.532 23 3.876a2.87 2.87 0 0 0-1.457-.369"/>
            </svg>



            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" className='language'>
              <path fill="#e44f26" d="M5.902 27.201L3.655 2h24.69l-2.25 25.197L15.985 30z" />
              <path fill="#f1662a" d="m16 27.858l8.17-2.265l1.922-21.532H16z" />
              <path fill="#ebebeb" d="M16 13.407h-4.09l-.282-3.165H16V7.151H8.25l.074.83l.759 8.517H16zm0 8.027l-.014.004l-3.442-.929l-.22-2.465H9.221l.433 4.852l6.332 1.758l.014-.004z" />
              <path fill="#fff" d="M15.989 13.407v3.091h3.806l-.358 4.009l-3.448.93v3.216l6.337-1.757l.046-.522l.726-8.137l.076-.83zm0-6.256v3.091h7.466l.062-.694l.141-1.567l.074-.83z" />
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 128 128" className='language'>
              <path fill="#1572b6" d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754l-45.243 12.543z" />
              <path fill="#33a9dc" d="m64.001 117.062l36.559-10.136l8.601-96.354h-45.16z" />
              <path fill="#fff" d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711l-3.4 38.114h-30.95z" />
              <path fill="#ebebeb" d="m64.083 87.349l-.061.018l-15.403-4.159l-.985-11.031H33.752l1.937 21.717l28.331 7.863l.063-.018z" />
              <path fill="#fff" d="m81.127 64.675l-1.666 18.522l-15.426 4.164v14.39l28.354-7.858l.208-2.337l2.406-26.881z" />
              <path fill="#ebebeb" d="M64.048 23.435v13.831H30.64l-.277-3.108l-.63-7.012l-.331-3.711zm-.047 27.996v13.831H48.792l-.277-3.108l-.631-7.012l-.33-3.711z" />
            </svg>
          </div>


          <a className="project_link" href='https://www.imaginecities.com/' target='#blank'>Check Live Site <svg viewBox="0 0 24 24"><path d="M5 17.59L15.59 7H9V5h10v10h-2V8.41L6.41 19z"/></svg></a>
        </div>

        <h1 className="proj_title">Imagine Cities</h1>

        <div className="project_info_container">
          <h6>The Project</h6>
          <ul className="proj_list">
            <li>A learning and planning tool for neighborhoods in local development, talent aquisition and general guidance</li>
          </ul>
          <h6>Personal Contributions</h6>
          <ul className="proj_list">
            <li>Responsible for the frontend conversion from Django markup to ReactJS syntax</li>
            <li>ReactJS related page and component creation as well as API work</li>
          </ul>
        </div>

      </div>
    </div>

  )


}

export default PopupProj2;