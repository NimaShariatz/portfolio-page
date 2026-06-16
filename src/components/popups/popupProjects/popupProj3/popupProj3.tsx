import "../popupProj.css"

interface PopupProj3Props {
  triggerPopup: boolean;
  handle_triggerPopup: (sect: 'Proj3_popup' ) => void;
}

function PopupProj3({ triggerPopup, handle_triggerPopup }: PopupProj3Props) {
  return(

    <div className="proj_container" style={{opacity: triggerPopup ? '1' : '0', pointerEvents: triggerPopup ? 'auto' : 'none'}} onClick={() => handle_triggerPopup('Proj3_popup')}>
      <div className="proj_content" style={{transform: triggerPopup ? 'translateY(-12px)' : 'translateY(0px)'}} onClick={(e) => e.stopPropagation()}>
        
        <div className="topSection proj_topSection">
          <p>Project</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" viewBox="0 0 20 20" onClick={() => handle_triggerPopup('Proj3_popup')}>
            <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93A10 10 0 0 1 2.93 17.07M11.4 10l2.83-2.83l-1.41-1.41L10 8.59L7.17 5.76L5.76 7.17L8.59 10l-2.83 2.83l1.41 1.41L10 11.41l2.83 2.83l1.41-1.41L11.41 10z"></path>
          </svg>
        </div>

        <img className="project_img" src="./Project/Henning.png"/>

        <div className="project_link_languages_container">

          <div className='language_animate'>

              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" className='language'><path fill="#00bcd4" d="M16 12c7.444 0 12 
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
                <path fill="#ff9100" d="M11.84 29.2c1.17.47 2.44.75 3.78.8c1.81.06 3.52-.31 5.06-1.02c-1.84-.72-3.51-1.78-4.93-3.1a8.5 8.5 0 0 1-3.9 3.32Z" />
                <path fill="#ffc400" d="M15.74 25.88c-3.25-3-5.22-7.35-5.05-12.12c0-.15.01-.31.02-.46a8.5 8.5 0 0 0-4.39.05c-.87 1.52-1.39 3.26-1.46 5.13c-.17 4.82 2.75 9.03 6.98 10.73a8.37 8.37 0 0 0 3.9-3.32Z" />
                <path fill="#ff9100" d="M15.74 25.88a8.4 8.4 0 0 0 1.27-4.15c.14-4.02-2.56-7.47-6.3-8.44c0 .15-.02.31-.02.46a15.69 15.69 0 0 0 5.05 12.12Z" />
                <path fill="#dd2c00" d="M16.59 2c-2.13 1.7-3.81 3.95-4.83 6.54a15.6 15.6 0 0 0-1.05 4.75a8.41 8.41 0 0 1 6.3 8.44a8.27 8.27 0 0 1-1.27 4.15a15.8 15.8 0 0 0 4.93 3.1c3.7-1.71 6.32-5.38 6.47-9.73c.1-2.82-.98-5.33-2.51-7.45c-1.62-2.24-8.04-9.79-8.04-9.79Z" />
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

            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 128 128" className='language'>
              <path fill="#fff" d="M22.67 47h99.67v73.67H22.67z" />
              <path fill="#007acc" d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 0 1 7.82 4.5a20.6 20.6 0 0 1 3 4c0 .16-5.4 3.81-8.69 5.85c-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 0 0-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.6 4.6 0 0 0 .54 2.34c.83 1.73 2.38 2.76 7.24 4.86c8.95 3.85 12.78 6.39 15.16 10c2.66 4 3.25 10.46 1.45 15.24c-2 5.2-6.9 8.73-13.83 9.9a38.3 38.3 0 0 1-9.52-.1a23 23 0 0 1-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9 9 0 0 1 1.15-.73L82 101l3.59-2.08l.75 1.11a16.8 16.8 0 0 0 4.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 0 0 .69-6.92c-1-1.39-3-2.56-8.59-5c-6.45-2.78-9.23-4.5-11.77-7.24a16.5 16.5 0 0 1-3.43-6.25a25 25 0 0 1-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.7 31.7 0 0 1 9.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49 49 0 0 1 .12-5.17C29.08 59 39 59 51 59h21.83z" />
            </svg>
          </div>


          <a className="project_link" href='https://www.henningthenavigator.ca/' target='#blank'>Check Live Site <svg viewBox="0 0 24 24"><path d="M5 17.59L15.59 7H9V5h10v10h-2V8.41L6.41 19z"/></svg></a>
        </div>

        <h1 className="proj_title">Henning the Navigator</h1>

        <div className="project_info_container">
          <h6>The Project</h6>
          <ul className="proj_list">
            <li>A map navigation tool for the flight simulator IL-2 Sturmovik: Great Battles. Wavepoints on a map are set with distance, speed and heading which output a navigational path</li>
            <li>Used by players for route planning and information sharing for group flights</li>
          </ul>
          <h6>Personal Contributions</h6>
          <ul className="proj_list">
            <li>A personal project under steady iterative development</li>
            <li>Uses ReactJS and Firestore (JSON DB) for live instances</li>
            <li>Capable of sharing waypoints, targets, drawings, and notes either by JSON download, or through a live instance using Firestore</li>
          </ul>
        </div>

      </div>
    </div>

  )


}

export default PopupProj3;