import React, { useEffect, useRef } from "react";
import videojs from "video.js";
import omniPortada from "../assets/images/omniquestPortada.png";

export const VideoJs = (props: any) => {
  return (
    <div data-vjs-player className="h-screen flex justify-center px-48 py-20">
      <video
        id=""
        className="vjs-sublime-skin"
        preload="auto"
        poster="../assets/images/omniquestPortada.png"
        data-setup="{}"
        controls
      >
        <source
          src="https://prismic-io.s3.amazonaws.com/leomonzon/cc5633ab-482c-4f3b-9343-d76e0459ac6a_omniquest.mp4"
          type="video/mp4"
        ></source>
        <source src="//vjs.zencdn.net/v/oceans.webm" type="video/webm"></source>
        <p className="vjs-no-js">
          To view this video please enable JavaScript, and consider upgrading to
          a web browser that
        </p>
      </video>
    </div>
  );
};
