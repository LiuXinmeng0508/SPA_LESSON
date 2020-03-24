
//   var timerButton = function(config) {
//     var cfg = config,                
//         enabled = cfg.enabled,          
//         timer,                         
//         i = cfg.duration,               
//         $btn = $('<input class="timer-button" type="button">');
  
//     $(cfg.container).append($btn);
  
//     if(cfg.enabled) {
//       enableBtn();
//     } else {
//       disableBtn();
//     }
  
//     function disableBtn() {
//       enabled = false;
//       $btn.attr('disabled', 'disabled');
//       setBtnText();
  
//       timer = window.setInterval(function() {
//         i--;
//         setBtnText();
//         if(i === 0) enableBtn();
//       }, 1000);
//     }
  
//     function enableBtn() {
//       enabled = true;
//       i = cfg.duration;
//       clearInterval(timer);
//       setBtnText();
//       $btn.removeAttr('disabled');
//     }
  
//     function setBtnText() {
//       var txt = enabled ? cfg.text : cfg.text + ' (' + i + ' s)';
//       $btn.val(txt);
//     }
  
//     $btn.click(function() {
//       $btn.trigger('timer-button-click');
//       if(cfg.enabled) disableBtn();
//     });
  
//     return $btn;
//   };

  $(function() {
    var radStatus,
        txtTime  = $('details input[type="number"]'),
        txtTitle = $('details input[type="text"]'),
        txtCode  = $('details textarea'),
        fmButton = $('details form');
  
    fmButton.submit(function(e) {
      e.preventDefault();
      radStatus  = $('details input[type="radio"]:checked');
  
      var btn = timerButton({
        'container': 'div.main',
        'enabled': radStatus.val() === 'true',
        'duration': Number(txtTime.val()),
        'text': txtTitle.val()
      });
  
      btn.on('timer-button-click', new Function(txtCode.val()));
    });
  });
