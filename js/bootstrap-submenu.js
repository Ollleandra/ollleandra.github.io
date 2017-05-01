/**
 * $.inArray: friends with IE8. Use Array.prototype.indexOf in future.
 * $.proxy: friends with IE8. Use Function.prototype.bind in future.
 */

'use strict';

(function(factory) {
  if (typeof define == 'function' && define.amd) {
    // AMD. Register as an anonymous module
    define(['jquery'], factory);
  }
  else if (typeof exports == 'object') {
    // Node/CommonJS
    module.exports = factory(require('jquery'));
  }
  else {
    // Browser globals
    factory(jQuery);
  }
})(function($) {
  function Item(element) {
    this.$element = $(element);
    this.$menu = this.$element.closest('.dropdown-menu');
    this.$main = this.$menu.parent();
    this.$items = this.$menu.children('.dropdown-submenu');

    this.init();
  }

  Item.prototype = {
    init: function() {
      this.$element.on('keydown', $.proxy(this, 'keydown'));
    },
    close: function() {
      this.$main.removeClass('open');
      this.$items.trigger('hide.bs.submenu');
    },
    keydown: function(event) {
      // 27: Esc

      if (event.keyCode == 27) {
        event.stopPropagation();

        this.close();
        this.$main.children('a, button').trigger('focus');
      }
    }
  };

  function SubmenuItem(element) {
    this.$element = $(element);
    this.$main = this.$element.parent();
    this.$menu = this.$main.children('.dropdown-menu');
    this.$subs = this.$main.siblings('.dropdown-submenu');
    this.$items = this.$menu.children('.dropdown-submenu');

    this.init();
  }

  $.extend(SubmenuItem.prototype, Item.prototype, {
    init: function() {
      this.$element.on({
        click: $.proxy(this, 'click'),
        keydown: $.proxy(this, 'keydown')
      });

      this.$main.on('hide.bs.submenu', $.proxy(this, 'hide'));
    },
    click: function(event) {
      // Fix a[href="#"]. For community
      event.preventDefault();

      event.stopPropagation();

      this.toggle();
    },
    hide: function(event) {
      // Stop event bubbling
      event.stopPropagation();

      this.close();
    },
    open: function() {
      this.$main.addClass('open');
      this.$subs.trigger('hide.bs.submenu');
    },
    toggle: function() {
      if (this.$main.hasClass('open')) {
        this.close();
      }
      else {
        this.open();
      }
    },
    keydown: function(event) {
      // 13: Return, 32: Spacebar

      if (event.keyCode == 32) {
        // Off vertical scrolling
        event.preventDefault();
      }

      if ($.inArray(event.keyCode, [13, 32]) != -1) {
        this.toggle();
      }
    }
  });

  function Submenupicker(element) {
    this.$element = $(element);
    this.$main = this.$element.parent();
    this.$menu = this.$main.children('.dropdown-menu');
    this.$items = this.$menu.children('.dropdown-submenu');

    this.init();
  }

  Submenupicker.prototype = {
    init: function() {
      this.$menu.off('keydown.bs.dropdown.data-api');
      this.$menu.on('keydown', $.proxy(this, 'itemKeydown'));

      this.$menu.find('li > a').each(function() {
        new Item(this);
      });

      this.$menu.find('.dropdown-submenu > a').each(function() {
        new SubmenuItem(this);
      });

      this.$main.on('hidden.bs.dropdown', $.proxy(this, 'hidden'));
    },
    hidden: function() {
      this.$items.trigger('hide.bs.submenu');
    },
    itemKeydown: function(event) {
      // 38: Arrow up, 40: Arrow down

      if ($.inArray(event.keyCode, [38, 40]) != -1) {
        // Off vertical scrolling
        event.preventDefault();

        event.stopPropagation();

        var $items = this.$menu.find('li:not(.disabled):visible > a');
        var index = $items.index(event.target);

        if (event.keyCode == 38 && index !== 0) {
          index--;
        }
        else if (event.keyCode == 40 && index !== $items.length - 1) {
          index++;
        }
        else {
          return;
        }

        $items.eq(index).trigger('focus');
      }
    }
  };

  var old = $.fn.submenupicker;

  // For AMD/Node/CommonJS used elements (optional)
  // http://learn.jquery.com/jquery-ui/environments/amd/
  $.fn.submenupicker = function(elements) {
    var $elements = this instanceof $ ? this : $(elements);

    return $elements.each(function() {
      var data = $.data(this, 'bs.submenu');

      if (!data) {
        data = new Submenupicker(this);

        $.data(this, 'bs.submenu', data);
      }
    });
  };

  $.fn.submenupicker.Constructor = Submenupicker;
  $.fn.submenupicker.noConflict = function() {
    $.fn.submenupicker = old;
    return this;
  };

  return $.fn.submenupicker;
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJib290c3RyYXAtc3VibWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogJC5pbkFycmF5OiBmcmllbmRzIHdpdGggSUU4LiBVc2UgQXJyYXkucHJvdG90eXBlLmluZGV4T2YgaW4gZnV0dXJlLlxyXG4gKiAkLnByb3h5OiBmcmllbmRzIHdpdGggSUU4LiBVc2UgRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQgaW4gZnV0dXJlLlxyXG4gKi9cclxuXHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbihmdW5jdGlvbihmYWN0b3J5KSB7XHJcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XHJcbiAgICAvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGVcclxuICAgIGRlZmluZShbJ2pxdWVyeSddLCBmYWN0b3J5KTtcclxuICB9XHJcbiAgZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcpIHtcclxuICAgIC8vIE5vZGUvQ29tbW9uSlNcclxuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKCdqcXVlcnknKSk7XHJcbiAgfVxyXG4gIGVsc2Uge1xyXG4gICAgLy8gQnJvd3NlciBnbG9iYWxzXHJcbiAgICBmYWN0b3J5KGpRdWVyeSk7XHJcbiAgfVxyXG59KShmdW5jdGlvbigkKSB7XHJcbiAgZnVuY3Rpb24gSXRlbShlbGVtZW50KSB7XHJcbiAgICB0aGlzLiRlbGVtZW50ID0gJChlbGVtZW50KTtcclxuICAgIHRoaXMuJG1lbnUgPSB0aGlzLiRlbGVtZW50LmNsb3Nlc3QoJy5kcm9wZG93bi1tZW51Jyk7XHJcbiAgICB0aGlzLiRtYWluID0gdGhpcy4kbWVudS5wYXJlbnQoKTtcclxuICAgIHRoaXMuJGl0ZW1zID0gdGhpcy4kbWVudS5jaGlsZHJlbignLmRyb3Bkb3duLXN1Ym1lbnUnKTtcclxuXHJcbiAgICB0aGlzLmluaXQoKTtcclxuICB9XHJcblxyXG4gIEl0ZW0ucHJvdG90eXBlID0ge1xyXG4gICAgaW5pdDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRoaXMuJGVsZW1lbnQub24oJ2tleWRvd24nLCAkLnByb3h5KHRoaXMsICdrZXlkb3duJykpO1xyXG4gICAgfSxcclxuICAgIGNsb3NlOiBmdW5jdGlvbigpIHtcclxuICAgICAgdGhpcy4kbWFpbi5yZW1vdmVDbGFzcygnb3BlbicpO1xyXG4gICAgICB0aGlzLiRpdGVtcy50cmlnZ2VyKCdoaWRlLmJzLnN1Ym1lbnUnKTtcclxuICAgIH0sXHJcbiAgICBrZXlkb3duOiBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAvLyAyNzogRXNjXHJcblxyXG4gICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PSAyNykge1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICAgICAgdGhpcy4kbWFpbi5jaGlsZHJlbignYSwgYnV0dG9uJykudHJpZ2dlcignZm9jdXMnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIFN1Ym1lbnVJdGVtKGVsZW1lbnQpIHtcclxuICAgIHRoaXMuJGVsZW1lbnQgPSAkKGVsZW1lbnQpO1xyXG4gICAgdGhpcy4kbWFpbiA9IHRoaXMuJGVsZW1lbnQucGFyZW50KCk7XHJcbiAgICB0aGlzLiRtZW51ID0gdGhpcy4kbWFpbi5jaGlsZHJlbignLmRyb3Bkb3duLW1lbnUnKTtcclxuICAgIHRoaXMuJHN1YnMgPSB0aGlzLiRtYWluLnNpYmxpbmdzKCcuZHJvcGRvd24tc3VibWVudScpO1xyXG4gICAgdGhpcy4kaXRlbXMgPSB0aGlzLiRtZW51LmNoaWxkcmVuKCcuZHJvcGRvd24tc3VibWVudScpO1xyXG5cclxuICAgIHRoaXMuaW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgJC5leHRlbmQoU3VibWVudUl0ZW0ucHJvdG90eXBlLCBJdGVtLnByb3RvdHlwZSwge1xyXG4gICAgaW5pdDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRoaXMuJGVsZW1lbnQub24oe1xyXG4gICAgICAgIGNsaWNrOiAkLnByb3h5KHRoaXMsICdjbGljaycpLFxyXG4gICAgICAgIGtleWRvd246ICQucHJveHkodGhpcywgJ2tleWRvd24nKVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMuJG1haW4ub24oJ2hpZGUuYnMuc3VibWVudScsICQucHJveHkodGhpcywgJ2hpZGUnKSk7XHJcbiAgICB9LFxyXG4gICAgY2xpY2s6IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgIC8vIEZpeCBhW2hyZWY9XCIjXCJdLiBGb3IgY29tbXVuaXR5XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgIHRoaXMudG9nZ2xlKCk7XHJcbiAgICB9LFxyXG4gICAgaGlkZTogZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgLy8gU3RvcCBldmVudCBidWJibGluZ1xyXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgIH0sXHJcbiAgICBvcGVuOiBmdW5jdGlvbigpIHtcclxuICAgICAgdGhpcy4kbWFpbi5hZGRDbGFzcygnb3BlbicpO1xyXG4gICAgICB0aGlzLiRzdWJzLnRyaWdnZXIoJ2hpZGUuYnMuc3VibWVudScpO1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgIGlmICh0aGlzLiRtYWluLmhhc0NsYXNzKCdvcGVuJykpIHtcclxuICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgdGhpcy5vcGVuKCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBrZXlkb3duOiBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAvLyAxMzogUmV0dXJuLCAzMjogU3BhY2ViYXJcclxuXHJcbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09IDMyKSB7XHJcbiAgICAgICAgLy8gT2ZmIHZlcnRpY2FsIHNjcm9sbGluZ1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICgkLmluQXJyYXkoZXZlbnQua2V5Q29kZSwgWzEzLCAzMl0pICE9IC0xKSB7XHJcbiAgICAgICAgdGhpcy50b2dnbGUoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBmdW5jdGlvbiBTdWJtZW51cGlja2VyKGVsZW1lbnQpIHtcclxuICAgIHRoaXMuJGVsZW1lbnQgPSAkKGVsZW1lbnQpO1xyXG4gICAgdGhpcy4kbWFpbiA9IHRoaXMuJGVsZW1lbnQucGFyZW50KCk7XHJcbiAgICB0aGlzLiRtZW51ID0gdGhpcy4kbWFpbi5jaGlsZHJlbignLmRyb3Bkb3duLW1lbnUnKTtcclxuICAgIHRoaXMuJGl0ZW1zID0gdGhpcy4kbWVudS5jaGlsZHJlbignLmRyb3Bkb3duLXN1Ym1lbnUnKTtcclxuXHJcbiAgICB0aGlzLmluaXQoKTtcclxuICB9XHJcblxyXG4gIFN1Ym1lbnVwaWNrZXIucHJvdG90eXBlID0ge1xyXG4gICAgaW5pdDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRoaXMuJG1lbnUub2ZmKCdrZXlkb3duLmJzLmRyb3Bkb3duLmRhdGEtYXBpJyk7XHJcbiAgICAgIHRoaXMuJG1lbnUub24oJ2tleWRvd24nLCAkLnByb3h5KHRoaXMsICdpdGVtS2V5ZG93bicpKTtcclxuXHJcbiAgICAgIHRoaXMuJG1lbnUuZmluZCgnbGkgPiBhJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICBuZXcgSXRlbSh0aGlzKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLiRtZW51LmZpbmQoJy5kcm9wZG93bi1zdWJtZW51ID4gYScpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgbmV3IFN1Ym1lbnVJdGVtKHRoaXMpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMuJG1haW4ub24oJ2hpZGRlbi5icy5kcm9wZG93bicsICQucHJveHkodGhpcywgJ2hpZGRlbicpKTtcclxuICAgIH0sXHJcbiAgICBoaWRkZW46IGZ1bmN0aW9uKCkge1xyXG4gICAgICB0aGlzLiRpdGVtcy50cmlnZ2VyKCdoaWRlLmJzLnN1Ym1lbnUnKTtcclxuICAgIH0sXHJcbiAgICBpdGVtS2V5ZG93bjogZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgLy8gMzg6IEFycm93IHVwLCA0MDogQXJyb3cgZG93blxyXG5cclxuICAgICAgaWYgKCQuaW5BcnJheShldmVudC5rZXlDb2RlLCBbMzgsIDQwXSkgIT0gLTEpIHtcclxuICAgICAgICAvLyBPZmYgdmVydGljYWwgc2Nyb2xsaW5nXHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgIHZhciAkaXRlbXMgPSB0aGlzLiRtZW51LmZpbmQoJ2xpOm5vdCguZGlzYWJsZWQpOnZpc2libGUgPiBhJyk7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gJGl0ZW1zLmluZGV4KGV2ZW50LnRhcmdldCk7XHJcblxyXG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09IDM4ICYmIGluZGV4ICE9PSAwKSB7XHJcbiAgICAgICAgICBpbmRleC0tO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChldmVudC5rZXlDb2RlID09IDQwICYmIGluZGV4ICE9PSAkaXRlbXMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgaW5kZXgrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkaXRlbXMuZXEoaW5kZXgpLnRyaWdnZXIoJ2ZvY3VzJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICB2YXIgb2xkID0gJC5mbi5zdWJtZW51cGlja2VyO1xyXG5cclxuICAvLyBGb3IgQU1EL05vZGUvQ29tbW9uSlMgdXNlZCBlbGVtZW50cyAob3B0aW9uYWwpXHJcbiAgLy8gaHR0cDovL2xlYXJuLmpxdWVyeS5jb20vanF1ZXJ5LXVpL2Vudmlyb25tZW50cy9hbWQvXHJcbiAgJC5mbi5zdWJtZW51cGlja2VyID0gZnVuY3Rpb24oZWxlbWVudHMpIHtcclxuICAgIHZhciAkZWxlbWVudHMgPSB0aGlzIGluc3RhbmNlb2YgJCA/IHRoaXMgOiAkKGVsZW1lbnRzKTtcclxuXHJcbiAgICByZXR1cm4gJGVsZW1lbnRzLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgIHZhciBkYXRhID0gJC5kYXRhKHRoaXMsICdicy5zdWJtZW51Jyk7XHJcblxyXG4gICAgICBpZiAoIWRhdGEpIHtcclxuICAgICAgICBkYXRhID0gbmV3IFN1Ym1lbnVwaWNrZXIodGhpcyk7XHJcblxyXG4gICAgICAgICQuZGF0YSh0aGlzLCAnYnMuc3VibWVudScsIGRhdGEpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICAkLmZuLnN1Ym1lbnVwaWNrZXIuQ29uc3RydWN0b3IgPSBTdWJtZW51cGlja2VyO1xyXG4gICQuZm4uc3VibWVudXBpY2tlci5ub0NvbmZsaWN0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAkLmZuLnN1Ym1lbnVwaWNrZXIgPSBvbGQ7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9O1xyXG5cclxuICByZXR1cm4gJC5mbi5zdWJtZW51cGlja2VyO1xyXG59KTsiXSwiZmlsZSI6ImJvb3RzdHJhcC1zdWJtZW51LmpzIn0=
