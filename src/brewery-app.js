import { LitElement, html } from 'lit-element';
import './brewery-detail';
class BreweryApp extends LitElement {
    static get properties() {
        return {
            breweries: Array,
            loading: Boolean
        }
    }
    connectedCallback() {
        super.connectedCallback();
        if (!this.breweries) {
            this.fetchBreweries();
        }
    }
    async fetchBreweries() {
        this.loading = true;
        const response = await fetch('http://api.openbrewerydb.org/breweries');
        const jsonReponse = await response.json();
        this.breweries = jsonReponse;
        this.loading = false;
    }
    render() {
        if (this.loading) {
            return html`Loading...`;
        }
        return html`
            <h2>Breweries</h2>
            <ul>
                ${this.breweries.map(brewery => html`
                    <li>
                        <brewery-detail
                        .brewery=${brewery}>
                        </brewery-detail>
                    </li>
                `)}
            </ul>
        `;
    }
}
customElements.define('brewery-app', BreweryApp);