import React from "react";
// import { NavLink } from "react-router-dom"

const Index = () => {
  return (
    <>
      <div className="main">
        <h2 className="search-main">Video Streaming OTT Platform</h2>
        <p>
          One OTT solution for all your needs providing a world-className video
          experience.
        </p>
      </div>

      <div id="benefits">
        <header className="benefits-head">
          <h2>Highlights Of Our OTT Services</h2>
          <p>
            OTT Fast provides all media management tools in one place. Upload,
            store, edit and schedule the data according to your requirements.
          </p>
          <div className="inspirations-wrapper">
            <div className="inspiration1 inspirations">
              <h3>OTT Platform</h3>
              <br />
              <h4>
                OTT Platform Deliver top-notch video quality for your VoD and
                live content to multiple devices seamlessly, effortlessly.
              </h4>
              <br />
            </div>
            <div className="inspiration1 inspirations">
              <h3>Cost Efficient</h3>
              <br />
              <h4>
                Leverage our affordable pricing plans to monetize your video
                content and generate greater ROI.
              </h4>
              <br />
            </div>
            <div className="inspiration1 inspirations">
              <h3>Video Hosting</h3>
              <br />
              <h4>
                With our management tools, you can upload, store, edit,
                schedule, and analyze your data at your convenience.
              </h4>
              <br />
            </div>
          </div>
          <div className="inspirations-wrapper">
            <div className="inspiration1 inspirations">
              <h3>Media Player</h3>
              <br />
              <h4>
                Deliver your content across all devices including mobiles,
                tablets, desktops, smart TVs, etc. seamlessly.
              </h4>
              <br />
            </div>
            <div className="inspiration1 inspirations">
              <h3>Video Transcoding</h3>
              <br />
              <h4>
                With the use of this technology, we create copies of video files
                in different available sizes making delivery quick.
              </h4>
              <br />
            </div>
            <div className="inspiration1 inspirations">
              <h3>Video Conferencing</h3>
              <br />
              <h4>
                Experience flawless connectivity over personal or business chats
                without lag and with minimal data required
              </h4>
              <br />
            </div>
          </div>
        </header>
      </div>

      <div id="packages">
        <h2>Why OTTFAST Makes It Best For Video Streaming?</h2>
        <div className="product-cards">
          <div className="card1 card">
            <h3>PACKAGE</h3>
            <br />
            <h4>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Sapiente, vel!
            </h4>
            <br />
          </div>

          <div className="card2 card">
            <h3>PACKAGE</h3>
            <br />
            <h4>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam,
              nulla?
            </h4>
            <br />
          </div>

          <div className="card3 card">
            <h3>PACKAGE</h3>
            <br />
            <h4>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
              corporis!
            </h4>
            <br />
          </div>

          <div className="card4 card">
            <h3>PACKAGE</h3>
            <br />
            <h4>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
              architecto.
            </h4>
            <br />
          </div>
        </div>
      </div>

      <div className="inspirations-wrapper">
        <div className="inspiration1 inspirations">
          <h4>EVERYTHING YOU NEED</h4>
          <br />
          <h1>All-in-one OTT Software</h1>
          <br />
          <h4>
            Launch a top-tier streaming service with more than 150 features and
            many revenue sources.
          </h4>
          <br />
        </div>
        <div className="inspiration1 inspirations">
          <ul style={{ listStyle: "circle" }}>
            <li>A HLS Player without Buffers</li>
            <br />
            <li>Professional-grade Video CMS</li>
            <br />
            <li>Hosting on Premise/On Cloud</li>
            <br />
            <li>A Whitelabel Solution with Lots of Features</li>
            <br />
          </ul>
        </div>
        <div className="inspiration1 inspirations">
          <ul style={{ listStyle: "circle" }}>
            <li>Scalable and Flexible Transcoding</li>
            <br />
            <li>Apps For OTT With In-App Purchase</li>
            <br />
            <li>Effective Video Marketing Techniques</li>
            <br />
            <li>Stream Across Different Platforms</li>
            <br />
          </ul>
        </div>
      </div>

      <div id="contact">
        <div className="form-wrapper">
          <header className="form-head">
            <h2>Leverage our experience</h2>
            <p>
              We won’t just help you launch your OTT service, we can also advise
              and support you as your ott streaming service continues to expand
              into new markets. Leverage our years of experience to build a
              successful OTT business.
            </p>
          </header>
          <div className="inspirations-wrapper">
            <div className="rap">
              <h3>OTT Platform</h3>
              <br />
              <h4>
                OTT Platform Deliver top-notch video quality for your VoD and
                live content to multiple devices seamlessly, effortlessly.
              </h4>
              <br />
            </div>
            <div className="rap">
              <h3>Cost Efficient</h3>
              <br />
              <h4>
                Leverage our affordable pricing plans to monetize your video
                content and generate greater ROI.
              </h4>
              <br />
            </div>
            <div className="rap">
              <h3>Video Hosting</h3>
              <br />
              <h4>
                With our management tools, you can upload, store, edit,
                schedule, and analyze your data at your convenience.
              </h4>
              <br />
            </div>
          </div>
        </div>
      </div>

      <div className="footer-wrapper">
        <div className="footer-container">
          <div className="footer1 footer">
            {/* <div className="logo">
                            <svg xmlns="http://www.w3.org/2000/svg" width="135" height="44"><path fill="#FFF" fill-rule="evenodd" d="M12.176 10.173c.863-.15 1.712-.31 2.563-.113.38.09.66.035.93-.226.2-.19.43-.277.7-.165.17.07.3.2.31.37.01.21-.21.1-.32.17-.16.1-.34.17-.49.27-.32.22-.21.51-.08.78.14.27.4.26.622.15.185-.08.337-.23.51-.35.16-.11.36-.24.51-.06.19.235.464.446.5.762.034.32-.33.29-.498.44-.12.1-.24.194-.33.313-.09.11-.15.21-.32.212-.55.01-.817.39-.988.842-.138.352-.25.712-.438 1.042-.11.196-.226.434-.467.44-.24.01-.306-.244-.39-.43-.11-.236-.264-.41-.554-.36-.28.05-.47.22-.53.495-.064.295.077.52.345.62.34.127.44.38.51.704.15.724.684 1.04 1.41.873.71-.167 1.575.123 1.895.723.272.51.65.646 1.18.6.562-.05.92.28.95.834.02.35-.046.685-.168 1.01-.36.96-.905 1.808-1.58 2.58-.49.566-.85 1.18-.54 1.97.08.21.23.48.026.61-.25.166-.478-.08-.66-.26-.08-.083-.136-.2-.195-.302-.545-.95-.82-1.96-.66-3.06.1-.73-.25-1.22-.84-1.576-.93-.56-1.06-1.29-.35-2.15.15-.18.15-.27-.04-.4-.55-.39-1.044-.88-1.64-1.158-.97-.456-1.473-1.28-1.93-2.14-.34-.635-.303-1.325.16-1.944.133-.174.23-.38.33-.58.136-.283.086-.54-.19-.72-.26-.164-.496-.16-.746.06-2.548 2.24-3.657 5.05-3.14 8.39.756 4.9 5.37 8.32 10.456 7.51 4.585-.737 8.008-5.1 7.525-9.697-.045-.453-.37-.695-.85-.633-.78.1-1.538-.457-1.658-1.21-.036-.22-.094-.43-.234-.62-.23-.3-.14-.474.24-.484.064-.003.134-.017.2-.04.12-.045.304 0 .334-.18.027-.146-.13-.18-.22-.253-.225-.182-.415-.34-.36-.72.055-.342-.144-.67-.502-.82-.47-.19-.46-.615-.28-.9.217-.33.05-.402-.143-.55-2.224-1.676-4.7-2.266-7.434-1.71-.88.18-1.74.46-2.48 1.015zm18.92 8.016c.008 3.28-1.14 6.15-3.033 8.79-1.87 2.6-4.012 4.97-6.13 7.37-1.697 1.92-3.44 3.8-5.07 5.77-.175.21-.295.41-.582.08-3.78-4.31-7.68-8.54-11.15-13.12-1.51-2-2.53-4.18-2.92-6.67-.79-5.11.69-9.46 4.41-12.99 3.07-2.93 6.82-4.19 11.04-3.89C24.32 4 29.82 9.06 30.9 15.61c.14.85.22 1.7.21 2.565zm18.77-2.61H46.19c0-1.57.122-3.44.275-4.54l-2.39.37c-.737 1.16-1.197 2.73-1.41 4.14l-2.055.76v1.31h1.84v9.44c0 3.21 1.47 4.29 4.046 4.29 1.38 0 2.544-.34 3.647-.98l-.368-1.35c-.674.21-1.195.33-1.747.33-1.532 0-1.84-.74-1.84-3.04v-8.7h3.22l.46-2.054zm7.052 3.34c-.03-1.87-.52-3.28-.736-3.74h-.46l-4.506 1.22v1.16c1.655.06 2.054.37 2.054 2.6v7.38c0 1.74-.368 2.05-2.023 2.14v1.224h8.276V29.7c-2.207-.06-2.513-.4-2.513-2.145v-5.03c0-2.668.705-3.526 3.126-3.526.613 0 .95.06 1.35.21l.765-3.93c-.24-.1-.64-.16-1.04-.16-1.65 0-3.31 1.38-4.29 3.77zm14.04 12.01v-1.22c-1.748-.06-1.993-.4-1.993-2.15V15.27h-.583l-5.21 1.135v1.16c1.654.06 2.053.37 2.053 2.605v7.388c0 1.743-.368 2.05-2.023 2.142v1.228h7.755zM69.24 11.11c0-1.288-1.01-2.33-2.33-2.33-1.317 0-2.36 1.042-2.36 2.33 0 1.287 1.043 2.33 2.33 2.33 1.318 0 2.36-1.043 2.36-2.33zm15.51 12.506c0 4.445-1.286 5.61-3.493 5.61-1.043 0-2.238-.49-3.035-1.472v-8.43c1.012-1.072 2.146-1.563 3.372-1.563 2.115 0 3.157 1.35 3.157 5.86zm-6.71-5.856c-.06-1.194-.49-2.237-.644-2.574h-.46l-4.506 1.226v1.165c1.656.06 2.054.368 2.054 2.606v13.395c0 1.748-.368 2.054-2.023 2.146v1.226h7.91v-1.226c-1.84-.06-2.14-.43-2.14-2.115v-3.96c.98 1.1 2.36 1.53 3.8 1.53 4.11 0 6.72-2.82 6.72-8.13 0-5.4-2.51-7.85-6.04-7.85-1.9 0-3.67 1.1-4.66 2.54zm27.742 5.427c0-5.027-2.882-8.03-7.388-8.03-4.475 0-7.48 3.156-7.48 8.122 0 5.08 2.882 8.03 7.388 8.03 4.17 0 7.48-2.73 7.48-8.13zm-4.077 0c0 4.353-1.104 6.437-3.28 6.437-2.606 0-3.433-2.023-3.433-6.468 0-4.353.858-6.253 3.31-6.253 2.238 0 3.403 1.716 3.403 6.284zm15.08-7.602h-3.677c0-1.564.122-3.434.276-4.537l-2.39.368c-.737 1.165-1.197 2.728-1.41 4.138l-2.055.766v1.318h1.84v9.442c0 3.218 1.47 4.29 4.04 4.29 1.38 0 2.54-.336 3.65-.98l-.37-1.348c-.68.214-1.2.337-1.75.337-1.54 0-1.84-.74-1.84-3.04v-8.71h3.22l.46-2.06zM133 23.187c0-5.027-2.88-8.03-7.388-8.03-4.475 0-7.48 3.156-7.48 8.122 0 5.08 2.882 8.03 7.39 8.03 4.167 0 7.478-2.73 7.478-8.13zm-4.077 0c0 4.353-1.103 6.437-3.28 6.437-2.605 0-3.433-2.023-3.433-6.468 0-4.353.858-6.253 3.31-6.253 2.238 0 3.403 1.716 3.403 6.284z" /></svg>
                        </div> */}
            <h3>Products of UXDLAB</h3>
            {/* <div className="footer1-icons">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">           Social media icons
            
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                </div> */}
          </div>
          <div className="footer2 footer">
            <h3>Useful Links</h3>
            <br />
            <h4>Home</h4>
            <br />
            <h4>Blogs</h4>
            <br />
            <h4>Contact Sales</h4>
            <br />
            <h4>Request Demo</h4>
          </div>
          <div className="footer3 footer">
            <h3>Industries</h3>
            <br />
            <h4>Broadcast & Media</h4>
            <br />
            <h4>Education & E-learning</h4>
            <br />
            <h4>Filmmaker</h4>
            <br />
            <h4>Enterprise</h4>
            <br />
            <h4>Fitness</h4>
            <br />
            <h4>Sports</h4>
            <br />
            <h4>Religious</h4>
            <br />
            <h4>Youtubers</h4>
          </div>
          <div className="footer4 footer">
            <h3>Services</h3>
            <br />
            <h4>Smart TV</h4>
            <br />
            <h4>Hbb TV</h4>
            <br />
            <h4>Iptv for content owner/Syndicate</h4>
            <br />
            <h4>Iptv for government</h4>
            <br />
            <h4>Iptv for Broadcast/Satelight</h4>
            <br />
            <h4>Iptv for MSOs/ISPs</h4>
            <br />
            <h4>Iptv for Operator</h4>
          </div>
          <div className="footer5 footer">
            <h3>Contact Us</h3>
            <br />
          </div>
        </div>
      </div>
    </>
  );
};
export default Index;
