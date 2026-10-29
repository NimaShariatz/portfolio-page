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

            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 128 128" className='language'>
              <defs>
                <linearGradient id="SVG89VyEssG" x1={-15.615} x2={-6.741} y1={-9.108} y2={-9.108} gradientTransform="rotate(90 -90.486 64.634)scale(9.2712)" gradientUnits="userSpaceOnUse">
                  <stop offset={0} stopColor="#95d7f4"></stop>
                  <stop offset={0.92} stopColor="#0f7fcc"></stop>
                  <stop offset={1} stopColor="#0f7fcc"></stop>
                </linearGradient>
              </defs>
              <path fill="#0b7fcc" d="M69.5 99.176c-.059-.73-.094-1.2-.094-1.2S67.2 83.087 64.57 78.642c-.414-.707.043-3.594 1.207-7.88c.68 1.169 3.54 6.192 4.118 7.81c.648 1.824.78 2.347.78 2.347s-1.57-8.082-4.144-12.797a162 162 0 0 1 2.004-6.265c.973 1.71 3.313 5.859 3.828 7.3c.102.293.192.543.27.774l.074-.414c-.59-2.504-1.75-6.86-3.336-10.082c3.52-18.328 15.531-42.824 27.84-53.754H16.9c-5.387 0-9.789 4.406-9.789 9.789v88.57c0 5.383 4.406 9.789 9.79 9.789h52.897a119 119 0 0 1-.297-14.652"></path>
              <path fill="url(#SVG89VyEssG)" d="M65.777 70.762c.68 1.168 3.54 6.188 4.117 7.809c.649 1.824.781 2.347.781 2.347s-1.57-8.082-4.144-12.797a165 165 0 0 1 2.004-6.27c.887 1.567 2.922 5.169 3.652 6.872l.082-.961c-.648-2.496-1.633-5.766-2.898-8.328c3.242-16.871 13.68-38.97 24.926-50.898H16.899a6.94 6.94 0 0 0-6.934 6.933v82.11c17.527-6.731 38.664-12.88 56.855-12.614c-.672-2.605-1.441-4.96-2.25-6.324c-.414-.707.043-3.597 1.207-7.879"></path>
              <path fill="#003956" d="M115.95 2.781c-5.5-4.906-12.164-2.933-18.734 2.899a44 44 0 0 0-2.914 2.859c-11.25 11.926-21.684 34.023-24.926 50.895c1.262 2.563 2.25 5.832 2.894 8.328c.168.64.32 1.242.442 1.754c.285 1.207.437 1.996.437 1.996s-.101-.383-.515-1.582c-.078-.23-.168-.484-.27-.773a8 8 0 0 0-.172-.434c-.734-1.703-2.765-5.305-3.656-6.867c-.762 2.25-1.437 4.36-2.004 6.265c2.578 4.715 4.149 12.797 4.149 12.797s-.137-.523-.782-2.347c-.578-1.621-3.441-6.64-4.117-7.809c-1.164 4.281-1.625 7.172-1.207 7.88c.809 1.362 1.574 3.722 2.25 6.323c1.524 5.867 2.586 13.012 2.586 13.012s.031.469.094 1.2a119 119 0 0 0 .297 14.651c.504 6.11 1.453 11.363 2.664 14.172l.828-.449c-1.781-5.535-2.504-12.793-2.188-21.156c.48-12.793 3.422-28.215 8.856-44.289c9.191-24.27 21.938-43.738 33.602-53.035c-10.633 9.602-25.023 40.684-29.332 52.195c-4.82 12.891-8.238 24.984-10.301 36.574c3.55-10.863 15.047-15.53 15.047-15.53s5.637-6.958 12.227-16.888c-3.95.903-10.43 2.442-12.598 3.352c-3.2 1.344-4.067 1.8-4.067 1.8s10.371-6.312 19.27-9.171c12.234-19.27 25.562-46.648 12.141-58.621"></path>
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