import React from "react";

export function PrograssBar() {
  window.onscroll = function () {
    myFunction();
  };

  function myFunction() {
    let winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    let height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    let elm = document.querySelector<HTMLElement>(".myBar")!;
    elm.style.width = scrolled + "%";
    elm.style.display = "block";
  }

  return (
    <div className="h-[3px] fixed right-0 left-0 top-0 dark:bg-zinc-700 bg-gray-300">
      <div className="myBar bg-yellow-500 h-[3px] hidden"></div>
    </div>
  );
}
