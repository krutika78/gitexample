import { LightningElement,api } from 'lwc';

export default class Newlwccomponent extends LightningElement {
    @api set checked(value) {
        this.template.querySelector('input').checked = value;
        this._checked = value;
      }
      get checked() {
        return this._checked;
      }
      @api name;
      _checked;
      rating(event) {
        this._checked = event.target.checked;
        this.dispatchEvent(
          new CustomEvent(
            'change',
              { detail: {
                name: this.name,
                checked: this._checked
              }
            }
          )
        );
      }


}