
$("#fullpage").fullpage({
          anchors: ['home', 'skills', 'works', 'contact'],
          menu: '#myMenu',
          verticalCentered: false,
          css3: true,
          navigation: true,
          navigationPosition: "right",
          scrollOverflow: false,
          bigSectionsDestination: top,
          responsiveWidth: 1100,
          //adding the action to the button
          onLeave: function (index, nextIndex, direction) {
            if (index == 3 && direction == "down") {
              $(".section")
                .eq(index - 1)
                .removeClass("moveDown")
                .addClass("moveUp");
            } else if (index == 3 && direction == "up") {
              $(".section")
                .eq(index - 1)
                .removeClass("moveUp")
                .addClass("moveDown");
            }

            $("#staticImg").toggleClass(
              "active",
              (index == 2 && direction == "down") ||
                (index == 4 && direction == "up")
            );
            $("#staticImg").toggleClass("moveDown", nextIndex == 4);
            $("#staticImg").toggleClass(
              "moveUp",
              index == 4 && direction == "up"
            );
          },
});

