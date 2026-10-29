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

            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256" className='language'>
              <path fill="#0080ff" d="M128 206.55v49.448c83.813 0 149.07-80.968 121.653-168.793c-11.981-38.38-42.478-68.877-80.858-80.858C80.97-21.069 0 44.19 0 128.001h49.561c.008 0 .013-.014.013-.014c.008-52.597 52.061-93.262 107.36-73.196c20.487 7.435 36.829 23.773 44.268 44.259c20.069 55.266-20.535 107.3-73.088 107.374v-49.288l-.009-.003H78.697c-.005 0-.01.007-.01.007v49.41zm-49.32 37.977H40.715l-.01-.009V206.55h37.982v37.968s-.005.009-.009.009M40.732 206.55H8.908c-.013 0-.023-.008-.023-.008v-31.81s.01-.024.023-.024H40.71c.013 0 .023.01.023.01z"></path>
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