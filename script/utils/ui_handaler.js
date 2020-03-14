var hide_popup = true;

$(document).ready(() => {
  console.log("UI handaler script.");

  const side_navigation = $("#menu");
  const top_navigation = $("#top_menu");
  const bottom_manu = $("#action_menu");

  side_navigation.click(() => {
    console.log(hide_popup);
    hide_popup ? executer("menu") : executer("reset");
  });

  top_navigation.click(() => {
    console.log(hide_popup);
    hide_popup ? executer("top_menu") : executer("reset");
  });

  bottom_manu.click(() => {
    console.log(hide_popup);
    hide_popup ? executer("action_menu") : executer("reset");
  });
});

const executer = loc => {
  switch (loc) {
    case "menu":
      console.log("menu time");
      option2(false);
      option3(false);
      break;
    case "top_menu":
      option2(true);
      option3(false);
      break;
    case "action_menu":
      option2(false);
      option3(true);
      break;
    default:
      console.log("nono");
      option2(false);
      option3(false);
      hide_popup = true;
  }
};

const option2 = what => {
  let distence = 40;
  let elements = document.getElementsByClassName("action_icon");

  what
    ? Array.from(elements).forEach(
        item =>
          (item.style.cssText = `display: inline-block; top: ${(distence += 40)}px;
        box-shadow: 0 0px 25px 0 rgba(139, 139, 139, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.034); background-color: #fff`)
      )
    : Array.from(elements).forEach(
        item => (item.style.cssText = `display: none`)
      );
  hide_popup = false;
};

const option3 = what => {
  const bottom_popup_open = {
    display: "inline-block",
    "background-color": "#fff",
    "border-radius": "100px",
    "box-shadow":
      "0 0px 25px 0 rgba(139, 139, 139, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.034)",
    transition: "all 0.8s linear"
  };

  const bottom_popup_close = {
    display: "none"
  };

  what
    ? $(".set_icon").css(bottom_popup_open)
    : $(".set_icon").css(bottom_popup_close);
  hide_popup = false;
};
