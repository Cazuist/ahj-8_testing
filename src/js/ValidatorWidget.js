import Listeners from './Listeners';

export default class ValidatorWidget {
  constructor(container, cardsList) {
    this.container = container;
    this.cardsList = cardsList;

    this.bindToDOM();
    this.addListeners();

    this.input = this.container.querySelector(this.getInputSelector());
    this.cards = this.container.querySelectorAll(this.getCardSelector());
    this.msgBox = this.container.querySelector(this.getMessageSelector());
  }

  cardsMarkup() {
    let html = '';
    const list = this.cardsList;

    for (const card of list) {
      html += `<img class="card-box blur" src="${card.src}" 
          data-name="${card.name}"}"></img>`;
    }

    return html;
  }

  widgetMurkup() {
    return `
      <form class='form-widget' data-widget="card-form-widget">
        <fieldset>
          <legend>Card Validator v.1.0</legend>

          <div class="cards-row">${this.cardsMarkup()}</div>
          
          <div class="control-row">
            <label for="number-input">Enter your card number:</label>
            <input id="number-input" class="number-field" type="text">
            <button class="btn validate-btn">Click to validate</button>
            <div class="message-box invalid hidden"></div>
          </div>          
        </fieldset>        
      </form>
    `;
  }

  bindToDOM() {
    this.container.innerHTML = this.widgetMurkup();
  }

  addListeners() {
    const submit = this.container.querySelector(this.getSubmitSelector());
    const input = this.container.querySelector(this.getInputSelector());
    submit.addEventListener('click', (event) => this.onSubmit(event));
    input.addEventListener('input', (event) => this.onInput(event));
  }

  // eslint-disable-next-line  class-methods-use-this
  getSubmitSelector() {
    return '.validate-btn';
  }

  // eslint-disable-next-line  class-methods-use-this
  getInputSelector() {
    return '.number-field';
  }

  // eslint-disable-next-line  class-methods-use-this
  getCardSelector() {
    return '.card-box';
  }

  // eslint-disable-next-line  class-methods-use-this
  getMessageSelector() {
    return '.message-box';
  }

  onSubmit(event) {
    event.preventDefault();
    Listeners.onSubmit(this.input, this.cards, this.msgBox);
  }

  onInput() {
    Listeners.onInput(this.input, this.cardsList, this.cards);
  }
}
