/**
 * @name RedSpeakingRing
 * @version 1.3.0
 * @description Makes the speaking outline around avatars or video tiles red instead of green.
 * @author Blowz
 */

module.exports = class RedSpeakingRing {
  start() {
    this.injectCSS();
  }

  stop() {
    BdApi.DOM.removeStyle("RedSpeakingRing");
  }

  injectCSS() {
    BdApi.DOM.addStyle("RedSpeakingRing", `
      /* Force speaking indicators to show a clear red outline */
      [class*="speaking"] {
        border: 2px solid #ff0000 !important;
        box-shadow: 0 0 6px #ff0000 !important;
      }
    `);
  }
};