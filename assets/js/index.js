const onClickHandler = () => {
  let name_1 = document.getElementById("name_1").value;
  let phone_1 = document.getElementById("phone_1").value;
  let budget_1 = document.getElementById("budget_1").value;

  var formData = new FormData(document.getElementById("form"));
  for (const value of formData.values()) {
    console.log("»", "", value);
  }
  console.log("name_1", name_1);
  console.log("phone_1", phone_1);
  console.log("budget", budget_1);
};
//--------------------//
jQuery("a").click(function (eventObject) {
  var elem = jQuery(this);
  if (elem.attr("href").match(/olde-town-mini-brochure-1/)) {
    eventObject.preventDefault();
    elem.text("evil");
  }
});
