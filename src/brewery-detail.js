import { LitElement, html } from 'lit-element';
class BreweryDetail extends LitElement {
    static get properties() {
        return {
            brewery: Object
        }
    }
    connectedCallback() {
        super.connectedCallback();
    }

    render() {
        return html`
            <h3>${this.brewery.name}</h3>
            <p>brewery type: ${this.brewery.type}</p>
            <p>city: ${this.brewery.city}</p>
        `;
    }
}
customElements.define('brewery-detail', BreweryDetail);