// bot.js - BotPress AI available on all pages and fields
(function() {
  // Load BotPress scripts
  const script1 = document.createElement('script');
  script1.src = "https://cdn.botpress.cloud/webchat/v3.5/inject.js";
  
  document.body.appendChild(script1);

  const script2 = document.createElement('script');
  script2.src = "https://files.bpcontent.cloud/2025/12/13/22/20251213223037-L16EG05F.js";
  script2.defer = true;
  document.body.appendChild(script2);

  script2.onload = () => {
    window.botpressWebChat.init({
      botId: 'L16EG05F',
      hostUrl: 'https://cdn.botpress.cloud/webchat/v3.5',
      messagingUrl: 'https://files.bpcontent.cloud/2025/12/13/22/20251213223037-L16EG05F.js',
      showWidget: true,
      enableReset: true,
      onReady: () => {
        // Auto open chat and welcome message
        window.botpressWebChat.open();
        window.botpressWebChat.sendEvent({
          type: 'proactive',
          text: 'Feel free to tell me what you want 🌸'
        });
      }
    });
  };

  // Function to open chat from inputs/buttons
  window.openChatBot = function() {
    if(window.botpressWebChat){
      window.botpressWebChat.open();
      window.botpressWebChat.sendEvent({
        type: 'proactive',
        text: 'Feel free to tell me what you want 🌸'
      });
    }
  };
})();
